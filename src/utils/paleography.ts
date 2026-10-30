import { RuleType, ShabdakoshItem, SegmentedWord, DocumentMetrics } from '../types/modi';

/**
 * Calculates Levenshtein edit distance between two sequences
 */
export function levenshteinDistance<T>(a: T[], b: T[]): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

/**
 * Computes Character Error Rate (CER)
 */
export function calculateCER(reference: string, hypothesis: string): number {
  if (!reference.length) return hypothesis.length ? 100 : 0;
  const refChars = Array.from(reference);
  const hypChars = Array.from(hypothesis);
  const distance = levenshteinDistance(refChars, hypChars);
  return Number(((distance / refChars.length) * 100).toFixed(1));
}

/**
 * Computes Word Error Rate (WER)
 */
export function calculateWER(reference: string, hypothesis: string): number {
  const refWords = reference.trim().split(/\s+/).filter(Boolean);
  const hypWords = hypothesis.trim().split(/\s+/).filter(Boolean);
  if (!refWords.length) return hypWords.length ? 100 : 0;
  const distance = levenshteinDistance(refWords, hypWords);
  return Number(((distance / refWords.length) * 100).toFixed(1));
}

/**
 * Applies Shabdakosh normalisation policy to text
 */
export function applyNormalisationPolicy(
  text: string,
  rules: ShabdakoshItem[],
  policy: 'archival' | 'modernised' | 'annotated'
): string {
  if (policy === 'archival') {
    return text; // Preserve raw transcribed historical spelling
  }

  let result = text;
  for (const rule of rules) {
    if (rule.rule === 'modernised' && rule.term !== rule.result) {
      // Devanagari characters are not matched by \b, so use boundaries with whitespace or punctuation
      const escapedTerm = rule.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(^|(?<=[\\s,;।॥]))${escapedTerm}(?=[\\s,;।॥]|$)`, 'gu');
      if (policy === 'modernised') {
        result = result.replace(pattern, rule.result);
      } else if (policy === 'annotated') {
        result = result.replace(pattern, `${rule.term} [आधुनिक: ${rule.result}]`);
      }
    }
  }

  return result;
}

/**
 * Validates words against a known historical lexicon and flags OOV
 */
export function detectOOVWords(
  words: string[],
  lexicon: Set<string>
): { token: string; isOov: boolean }[] {
  return words.map(w => {
    // Strip trailing punctuation
    const clean = w.replace(/[.,;।॥]/g, '').trim();
    const isOov = clean.length > 0 && !lexicon.has(clean);
    return { token: w, isOov };
  });
}

/**
 * Generates TEI-XML formatted historical archival document output
 */
export function generateTeiXml(
  docId: string,
  title: string,
  period: string,
  archiveRef: string,
  devanagariText: string,
  englishTranslation: string,
  metrics: DocumentMetrics
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>${title}</title>
        <author>Peshwa Daftarkhana Archivists</author>
      </titleStmt>
      <publicationStmt>
        <publisher>Modi Lipi Digital Archives Project</publisher>
        <idno type="MOD-ID">${docId}</idno>
        <idno type="ArchiveRef">${archiveRef}</idno>
      </publicationStmt>
      <sourceDesc>
        <p>Manuscript in Modi script, ${period}.</p>
      </sourceDesc>
    </fileDesc>
    <encodingDesc>
      <metric type="CER">${metrics.cer}%</metric>
      <metric type="WER">${metrics.wer}%</metric>
      <metric type="Words">${metrics.wordsSegmented}</metric>
      <metric type="OOV">${metrics.flaggedOov}</metric>
    </encodingDesc>
  </teiHeader>
  <text>
    <body>
      <div type="transcription" xml:lang="mar-Modi">
        <p>${devanagariText}</p>
      </div>
      <div type="translation" xml:lang="en">
        <p>${englishTranslation}</p>
      </div>
    </body>
  </text>
</TEI>`;
}
