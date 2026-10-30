export type RuleType = 'preserved' | 'modernised' | 'glossed';

export interface ShabdakoshItem {
  term: string;
  result: string;
  rule: RuleType;
  etymology?: string;
  category?: string;
  historicalNotes?: string;
}

export interface SegmentedWord {
  id: string;
  modiGlyph: string;
  devanagari: string;
  modernNormalized?: string;
  isOov?: boolean;
  confidence: number; // 0 - 100
  grammaticalCategory?: string;
  meaningEnglish?: string;
  boxCoordinates?: { x: number; y: number; w: number; h: number };
}

export interface DocumentMetrics {
  cer: number; // Character error rate %
  wer: number; // Word error rate %
  wordsSegmented: number;
  flaggedOov: number;
  recognitionAccuracy: number;
  linesDetected: number;
}

export interface ModiDocument {
  id: string;
  accessionNumber: string;
  titleMarathi: string;
  titleEnglish: string;
  genre: 'revenue' | 'charter' | 'order' | 'ledger' | 'dispute' | 'endowment';
  genreLabelMarathi: string;
  genreLabelEnglish: string;
  period: string;
  eraTag: 'Shivakalin' | 'Peshwekalin' | 'Yadava' | 'BritishRaj';
  eraYears: string;
  archiveLocation: string;
  rumalOrDaftarRef: string;
  scribeOrOfficer: string;
  materialDetails: string;
  sealDescription: string;
  sealSvgType: 'octagonal_rajmudra' | 'oval_peshwa_mortab' | 'round_kazi' | 'square_subha';
  classificationNotes: string;
  f1Score: number;
  datedByMethod: string;
  metrics: DocumentMetrics;
  transliteration: {
    fullDevanagari: string;
    modiExcerpt: string;
    englishTranslation: string;
    words: SegmentedWord[];
  };
  shabdakoshEntries: ShabdakoshItem[];
  paleographicFeatures: string[];
  keyEntities: {
    places: string[];
    persons: string[];
    fiscalUnits: string[];
  };
  fleuronSymbol: string;
}

export interface ModiAlphabetGlyph {
  modiChar: string;
  devanagariChar: string;
  romanChar: string;
  type: 'vowel' | 'consonant' | 'numeral' | 'sign';
  strokeTips: string;
  exampleWordModi?: string;
  exampleWordDevanagari?: string;
}

export type ViewMode = 
  | 'overview' 
  | 'transliteration' 
  | 'analysis' 
  | 'manuscript' 
  | 'shabdakosh' 
  | 'paleography-lab' 
  | 'pipeline-simulation';
