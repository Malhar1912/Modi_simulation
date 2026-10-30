import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCER,
  calculateWER,
  applyNormalisationPolicy,
  detectOOVWords,
  generateTeiXml,
} from './paleography';
import { ShabdakoshItem } from '../types/modi';

test('calculateCER correctly computes character error rate', () => {
  const ref = 'मौजे कसबे';
  const hyp = 'मौजे कसबे';
  assert.equal(calculateCER(ref, hyp), 0);

  // 1 deletion or substitution
  const cer = calculateCER('पुणे', 'पुना');
  assert.ok(cer > 0 && cer <= 100);
});

test('calculateWER correctly computes word error rate', () => {
  const ref = 'मौजे कसबे पुणे प्रांत जुन्नर';
  const hyp = 'मौजे कसबे पुणे जुन्नर'; // missing 'प्रांत'
  const wer = calculateWER(ref, hyp);
  assert.equal(wer, 20); // 1 error out of 5 words = 20%
});

test('applyNormalisationPolicy handles archival, modernised, and annotated policies', () => {
  const rules: ShabdakoshItem[] = [
    { term: 'हुजूर', result: 'श्रीमान', rule: 'modernised' },
    { term: 'जनाब', result: 'साहेब', rule: 'modernised' },
    { term: 'जमाबंदी', result: 'जमाबंदी', rule: 'preserved' },
  ];

  const text = 'हुजूर यांचे आज्ञेने जनाब आले.';

  const archival = applyNormalisationPolicy(text, rules, 'archival');
  assert.equal(archival, 'हुजूर यांचे आज्ञेने जनाब आले.');

  const modern = applyNormalisationPolicy(text, rules, 'modernised');
  assert.equal(modern, 'श्रीमान यांचे आज्ञेने साहेब आले.');

  const annotated = applyNormalisationPolicy(text, rules, 'annotated');
  assert.ok(annotated.includes('हुजूर [आधुनिक: श्रीमान]'));
  assert.ok(annotated.includes('जनाब [आधुनिक: साहेब]'));
});

test('detectOOVWords flags unrecognized tokens correctly', () => {
  const lexicon = new Set(['मौजे', 'पुणे', 'जमाबंदी']);
  const words = ['मौजे', 'पुणे', 'अज्ञातशब्द', 'जमाबंदी.'];

  const results = detectOOVWords(words, lexicon);
  assert.equal(results[0].isOov, false);
  assert.equal(results[1].isOov, false);
  assert.equal(results[2].isOov, true);
  assert.equal(results[3].isOov, false); // stripped period matches
});

test('generateTeiXml produces valid XML structure with metadata', () => {
  const xml = generateTeiXml(
    'MOD-0427',
    'Pune Jamabandi',
    'c. 1760',
    'Rumal 48',
    'मौजे कसबे पुणे',
    'Village of Pune',
    { cer: 7.2, wer: 11.8, wordsSegmented: 24, flaggedOov: 1, recognitionAccuracy: 92.8, linesDetected: 6 }
  );

  assert.ok(xml.includes('<idno type="MOD-ID">MOD-0427</idno>'));
  assert.ok(xml.includes('<metric type="CER">7.2%</metric>'));
  assert.ok(xml.includes('xml:lang="mar-Modi"'));
});
