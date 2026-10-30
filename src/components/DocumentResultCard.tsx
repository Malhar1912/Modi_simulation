import React, { useState } from 'react';
import { ModiDocument, SegmentedWord, RuleType } from '../types/modi';
import { applyNormalisationPolicy } from '../utils/paleography';
import { 
  ChevronDown, 
  Download, 
  FileText, 
  FileCode, 
  Printer, 
  Sliders, 
  Info, 
  Eye, 
  BookOpen, 
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';

interface DocumentResultCardProps {
  document: ModiDocument;
  onOpenExportModal: (format: 'docx' | 'xml' | 'txt') => void;
  onOpenSimulation: () => void;
  onOpenAlphabet: () => void;
}

export const DocumentResultCard: React.FC<DocumentResultCardProps> = ({
  document,
  onOpenExportModal,
  onOpenSimulation,
  onOpenAlphabet,
}) => {
  const [activeTab, setActiveTab] = useState<'extraction' | 'analysis' | 'interlinear' | 'scholarly'>('extraction');
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [normalisationPolicy, setNormalisationPolicy] = useState<'archival' | 'modernised' | 'annotated'>('archival');
  const [selectedWord, setSelectedWord] = useState<SegmentedWord | null>(null);

  // Apply policy to full text
  const renderedText = applyNormalisationPolicy(
    document.transliteration.fullDevanagari,
    document.shabdakoshEntries,
    normalisationPolicy
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-3 sm:px-4">
      
      {/* Tab Switcher Controls (Above card) */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1 bg-[#ede4ce] dark:bg-[#251d14] p-1 rounded-lg border border-[#d8c8a6] dark:border-[#3d2e1f]">
          <button
            onClick={() => setActiveTab('extraction')}
            className={`px-3 py-1.5 text-xs sm:text-sm vp-ser font-medium rounded transition-all cursor-pointer ${
              activeTab === 'extraction'
                ? 'bg-[#2b2016] text-[#e9dcc0] shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                : 'text-[#6b5637] dark:text-[#baaa93] hover:text-[#2b2016]'
            }`}
          >
            Extraction Result (लिप्यंतरण)
          </button>
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-3 py-1.5 text-xs sm:text-sm vp-ser font-medium rounded transition-all cursor-pointer ${
              activeTab === 'analysis'
                ? 'bg-[#2b2016] text-[#e9dcc0] shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                : 'text-[#6b5637] dark:text-[#baaa93] hover:text-[#2b2016]'
            }`}
          >
            Analysis & Shabdakosh (विश्लेषण)
          </button>
          <button
            onClick={() => setActiveTab('interlinear')}
            className={`px-3 py-1.5 text-xs sm:text-sm vp-ser font-medium rounded transition-all cursor-pointer ${
              activeTab === 'interlinear'
                ? 'bg-[#2b2016] text-[#e9dcc0] shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                : 'text-[#6b5637] dark:text-[#baaa93] hover:text-[#2b2016]'
            }`}
          >
            Interlinear Glyphs (अन्वय)
          </button>
          <button
            onClick={() => setActiveTab('scholarly')}
            className={`px-3 py-1.5 text-xs sm:text-sm vp-ser font-medium rounded transition-all cursor-pointer ${
              activeTab === 'scholarly'
                ? 'bg-[#2b2016] text-[#e9dcc0] shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                : 'text-[#6b5637] dark:text-[#baaa93] hover:text-[#2b2016]'
            }`}
          >
            Historical Provenance (संदर्भ)
          </button>
        </div>

        {/* Normalisation Policy Filter */}
        <div className="flex items-center gap-1.5 text-xs vp-ser text-[#6b5637] dark:text-[#a08a68]">
          <Sliders className="w-3.5 h-3.5 text-[#8a6b3a]" />
          <span>Spelling Rule:</span>
          <select
            value={normalisationPolicy}
            onChange={(e) => setNormalisationPolicy(e.target.value as any)}
            className="bg-[#f3e8cf] dark:bg-[#251d14] text-[#2e2213] dark:text-[#e0d2b8] border border-[#d8c69a] dark:border-[#473523] text-xs rounded px-2 py-1 cursor-pointer focus:outline-none"
          >
            <option value="archival">Archival Exact (अपरिवर्तित)</option>
            <option value="modernised">Modernised Marathi (आधुनिक)</option>
            <option value="annotated">Annotated Scholarly (सटीप)</option>
          </select>
        </div>
      </div>

      {/* Main Vintage Result Card matching user slides */}
      <div className="bg-[#e9dec5] dark:bg-[#1a140d] rounded-xl p-3 sm:p-3.5 shadow-xl border border-[#d8caa6] dark:border-[#352718] transition-colors">
        
        {/* Top Mahogany Header Bar */}
        <div className="bg-[#2b2016] rounded-t-[10px] px-3.5 py-2.5 flex items-center gap-2.5 relative">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c98a3a] inline-block shadow-sm"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#8a6b3a] inline-block shadow-sm"></span>
          
          <span className="vp-ser text-[#e9dcc0] text-[15px] flex-1 tracking-wide font-normal truncate">
            {activeTab === 'analysis' 
              ? 'दस्तऐवज विश्लेषण · Document analysis' 
              : activeTab === 'interlinear'
              ? 'मोडी-देवनागरी अन्वय · Interlinear Glyph Alignment'
              : activeTab === 'scholarly'
              ? 'ऐतिहासिक संदर्भ व पुराभिलेख · Archival Provenance'
              : 'मोडी लिपी · Modi Lipi Extraction'}
          </span>

          {/* Export Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setExportMenuOpen(!exportMenuOpen)}
              className="vp-ser text-[#2b2016] bg-[#d9c38d] hover:bg-[#ebdfbd] text-[13px] px-2.5 py-1 rounded-[5px] flex items-center gap-1 cursor-pointer transition-colors font-medium shadow-sm"
              aria-expanded={exportMenuOpen}
              aria-label="Export document options"
            >
              <span>Export ▾ Word .docx</span>
            </button>

            {/* Dropdown Menu */}
            {exportMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-1.5 w-48 bg-[#2b2016] border border-[#523d29] rounded-lg shadow-2xl py-1.5 z-50 vp-ser text-xs text-[#e9dcc0]"
                onMouseLeave={() => setExportMenuOpen(false)}
              >
                <button
                  onClick={() => {
                    setExportMenuOpen(false);
                    onOpenExportModal('docx');
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#3d2e1f] flex items-center gap-2 text-[#d9c38d] cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Microsoft Word (.docx)</span>
                </button>
                <button
                  onClick={() => {
                    setExportMenuOpen(false);
                    onOpenExportModal('xml');
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#3d2e1f] flex items-center gap-2 text-[#e9dcc0] cursor-pointer"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>TEI-XML Archival Record</span>
                </button>
                <button
                  onClick={() => {
                    setExportMenuOpen(false);
                    onOpenExportModal('txt');
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#3d2e1f] flex items-center gap-2 text-[#e9dcc0] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Plain Transcription (.txt)</span>
                </button>
                <div className="border-t border-[#443322] my-1"></div>
                <button
                  onClick={() => {
                    setExportMenuOpen(false);
                    window.print();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#3d2e1f] flex items-center gap-2 text-[#a89070] cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Scholarly Folio</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Parchment Document Body */}
        <div className="bg-[#f3e8cf] dark:bg-[#1f1811] border border-[#d8c69a] dark:border-[#382b1c] border-t-0 rounded-b-[10px] p-5 sm:p-7 transition-colors">
          
          {/* Top Fleuron */}
          <div className="vp-ser text-center text-[#9c7a3c] dark:text-[#b89552] text-lg tracking-[2px] select-none">
            {document.fleuronSymbol}
          </div>

          {/* 1. EXTRACTION RESULT TAB (Slide 1 view) */}
          {activeTab === 'extraction' && (
            <div>
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 border-b-2 border-double border-[#c6b082] dark:border-[#4a3a27] pb-3 mb-1.5">
                <div>
                  <div className="vp-ser text-[#6b5637] dark:text-[#a89070] text-[13px] tracking-[1px] uppercase">
                    ARCHIVE REF · {document.id}
                  </div>
                  <div className="vp-ser text-[#3a2c1a] dark:text-[#f0e3cc] text-xl font-normal mt-0.5">
                    Extraction result
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="vp-ser inline-block bg-[#8a3324] text-[#f6ead0] text-xs px-2.5 py-1 rounded mb-1 font-medium">
                    {document.genreLabelMarathi}
                  </span>
                  <br />
                  <span className="vp-ser inline-block bg-[#f3e8cf] dark:bg-[#251d14] text-[#6b5637] dark:text-[#baaa93] border border-[#b89b63] dark:border-[#4d3b28] text-xs px-2.5 py-0.5 rounded">
                    {document.period}
                  </span>
                </div>
              </div>

              {/* Transliteration Label */}
              <div className="vp-ser text-[#8a6b3a] dark:text-[#c98a3a] text-xs tracking-[1px] my-3.5 uppercase font-medium flex items-center justify-between">
                <span>TRANSLITERATED · DEVANAGARI (segmented)</span>
                <span className="text-[11px] font-mono text-[#6b5637] dark:text-[#9c8466]">
                  Click words for lexicon definition
                </span>
              </div>

              {/* Segmented Transliterated Paragraph with OOV highlight */}
              <div className="vp-dev text-[#2e2213] dark:text-[#ede0c8] text-lg sm:text-[19px] leading-[2.1] m-0 bg-[#faefe0]/60 dark:bg-[#18120c]/60 p-3 sm:p-4 rounded-lg border border-[#e4d6b5] dark:border-[#35281a]">
                {normalisationPolicy === 'archival' ? (
                  // Word-by-word interactive segmented view
                  document.transliteration.words.map((w, idx) => {
                    const isSelected = selectedWord?.id === w.id;
                    return (
                      <span key={w.id}>
                        <button
                          onClick={() => setSelectedWord(isSelected ? null : w)}
                          className={`inline cursor-pointer rounded px-0.5 transition-colors ${
                            w.isOov
                              ? 'vp-oov text-[#8a3324] font-medium'
                              : isSelected
                              ? 'bg-[#c98a3a]/30 font-medium'
                              : 'hover:bg-[#ebd9b2] dark:hover:bg-[#342718]'
                          }`}
                          title={`Confidence: ${w.confidence}% | Meaning: ${w.meaningEnglish || 'Standard term'}`}
                        >
                          {w.devanagari}
                        </button>
                        {idx < document.transliteration.words.length - 1 ? ' ' : ''}
                      </span>
                    );
                  })
                ) : (
                  // Policy modified text
                  <span>{renderedText}</span>
                )}
              </div>

              {/* Interactive Word Inspector Drawer (if word clicked) */}
              {selectedWord && (
                <div className="mt-3.5 p-3 rounded-md bg-[#ebd9b2] dark:bg-[#281f15] border border-[#c6b082] dark:border-[#4a3926] text-xs vp-ser text-[#2b2016] dark:text-[#e8dac2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="vp-dev text-base font-semibold text-[#8a3324] dark:text-[#d96a55]">
                        {selectedWord.devanagari}
                      </span>
                      <span className="font-mono text-[11px] bg-[#d9c38d] dark:bg-[#382b1d] px-1.5 py-0.5 rounded">
                        Modi: {selectedWord.modiGlyph}
                      </span>
                      {selectedWord.isOov && (
                        <span className="bg-[#8a3324] text-white text-[10px] px-1.5 py-0.5 rounded">
                          Flagged OOV
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-[#5c4930] dark:text-[#b09e86]">
                      <span className="font-medium">Category:</span> {selectedWord.grammaticalCategory || 'General'} · <span className="font-medium">English:</span> {selectedWord.meaningEnglish}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[#8a6b3a] dark:text-[#c98a3a]">
                      Confidence: {selectedWord.confidence}%
                    </span>
                    <button
                      onClick={() => setSelectedWord(null)}
                      className="px-2 py-0.5 bg-[#d9c38d] dark:bg-[#382b1d] rounded text-[11px] cursor-pointer hover:bg-[#c9b177]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* Metrics Tiles (From Slide 1) */}
              <div className="flex gap-4 sm:gap-6 flex-wrap border-t border-[#d8c69a] dark:border-[#423423] mt-4.5 pt-3">
                <div>
                  <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-xs">Character error rate</div>
                  <div className="vp-ser text-[#3a2c1a] dark:text-[#f4ebd9] text-xl font-medium tabular-nums">
                    {document.metrics.cer}%
                  </div>
                </div>
                <div>
                  <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-xs">Word error rate</div>
                  <div className="vp-ser text-[#3a2c1a] dark:text-[#f4ebd9] text-xl font-medium tabular-nums">
                    {document.metrics.wer}%
                  </div>
                </div>
                <div>
                  <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-xs">Words segmented</div>
                  <div className="vp-ser text-[#3a2c1a] dark:text-[#f4ebd9] text-xl font-medium tabular-nums">
                    {document.metrics.wordsSegmented}
                  </div>
                </div>
                <div>
                  <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-xs">Flagged OOV</div>
                  <div className="vp-ser text-[#8a3324] dark:text-[#e06550] text-xl font-medium tabular-nums">
                    {document.metrics.flaggedOov}
                  </div>
                </div>
                <div className="sm:ml-auto">
                  <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-xs">Scribe & Seal</div>
                  <div className="vp-ser text-[#3a2c1a] dark:text-[#f4ebd9] text-sm mt-1 truncate max-w-[200px]">
                    {document.scribeOrOfficer.split('(')[0]}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. DOCUMENT ANALYSIS TAB (Slide 2 view) */}
          {activeTab === 'analysis' && (
            <div>
              <div className="vp-ser text-[#8a6b3a] dark:text-[#c98a3a] text-xs tracking-[1px] mb-2 font-medium">
                CLASSIFICATION
              </div>

              <div className="flex gap-2.5 flex-wrap mb-2">
                <span className="vp-ser bg-[#8a3324] text-[#f6ead0] text-[13px] px-3 py-1 rounded font-medium">
                  Type · {document.genreLabelEnglish} ({document.genreLabelMarathi.split('·')[0].trim()})
                </span>
                <span className="vp-ser bg-[#f3e8cf] dark:bg-[#281f15] text-[#5a4428] dark:text-[#d4c1a5] border border-[#b89b63] dark:border-[#4d3b28] text-[13px] px-3 py-1 rounded font-medium">
                  Period · {document.eraYears} ({document.eraTag})
                </span>
              </div>

              <div className="vp-ser text-[#6b5637] dark:text-[#a08a68] text-[13px] italic mb-4.5">
                {document.datedByMethod}
              </div>

              {/* Double line divider */}
              <div className="vp-ser text-[#8a6b3a] dark:text-[#c98a3a] text-xs tracking-[1px] border-t-2 border-double border-[#c6b082] dark:border-[#4a3926] pt-3.5 mb-2.5 font-medium flex items-center justify-between">
                <span>SHABDAKOSH NORMALISATION</span>
                <span className="text-[11px] font-normal text-[#6b5637] dark:text-[#a08a68]">
                  Historical legal terms & rules
                </span>
              </div>

              {/* Shabdakosh Table exactly like Slide 2 */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse vp-ser">
                  <thead>
                    <tr className="text-[#6b5637] dark:text-[#9e8768] text-xs text-left border-b border-[#d8c69a] dark:border-[#423423]">
                      <th className="py-1.5 font-medium">Term (दस्तऐवज संज्ञा)</th>
                      <th className="py-1.5 font-medium">Result (प्रमाणित रूप)</th>
                      <th className="py-1.5 font-medium text-right">Rule (नियम)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.shabdakoshEntries.map((entry, idx) => (
                      <tr 
                        key={idx}
                        className="border-t border-[#d8c69a] dark:border-[#382a1b] hover:bg-[#ede0be]/40 dark:hover:bg-[#2a2016]/40 transition-colors"
                      >
                        <td className="vp-dev py-2 text-[17px] text-[#2e2213] dark:text-[#f0e3cc]">
                          {entry.term}
                          {entry.etymology && (
                            <span className="block vp-ser text-[11px] text-[#6b5637] dark:text-[#9c8466]">
                              {entry.etymology}
                            </span>
                          )}
                        </td>
                        <td className={`vp-dev py-2 text-[17px] ${
                          entry.rule === 'modernised' 
                            ? 'text-[#8a3324] dark:text-[#e06550] font-medium' 
                            : 'text-[#2e2213] dark:text-[#f0e3cc]'
                        }`}>
                          {entry.result}
                        </td>
                        <td className="text-right text-xs py-2">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-mono ${
                            entry.rule === 'preserved'
                              ? 'text-[#48632e] bg-[#e1ecd6] dark:text-[#88b560] dark:bg-[#1a2612]'
                              : 'text-[#8a3324] bg-[#f7e4e1] dark:text-[#e06550] dark:bg-[#331512]'
                          }`}>
                            {entry.rule}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Paleographic Observation Features */}
              <div className="mt-5 pt-3.5 border-t border-[#d8c69a] dark:border-[#423423]">
                <div className="vp-ser text-[#8a6b3a] dark:text-[#c98a3a] text-xs tracking-wider mb-2 uppercase font-medium">
                  Paleographic Characteristics & Scribe Notes:
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs vp-ser text-[#523f27] dark:text-[#c4b39b]">
                  {document.paleographicFeatures.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3. INTERLINEAR GLYPH ALIGNMENT TAB */}
          {activeTab === 'interlinear' && (
            <div>
              <div className="flex items-center justify-between border-b border-[#c6b082] dark:border-[#4a3926] pb-2.5 mb-3">
                <div className="vp-ser text-xs text-[#8a6b3a] dark:text-[#c98a3a] uppercase font-medium">
                  Word-by-Word Modi & Devanagari Interlinear Alignment
                </div>
                <button
                  onClick={onOpenAlphabet}
                  className="text-xs vp-ser text-[#8a3324] dark:text-[#c98a3a] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Modi Alphabet Reference
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {document.transliteration.words.map((w) => (
                  <div
                    key={w.id}
                    onClick={() => setSelectedWord(selectedWord?.id === w.id ? null : w)}
                    className={`p-2 rounded border cursor-pointer transition-all ${
                      selectedWord?.id === w.id
                        ? 'bg-[#e2d0a8] dark:bg-[#342718] border-[#8a3324] ring-1 ring-[#8a3324]'
                        : 'bg-[#faf0dc] dark:bg-[#1c150e] border-[#d8c69a] dark:border-[#382a1a] hover:border-[#b89b63]'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl text-[#6b3e1b] dark:text-[#dca052] font-mono leading-none tracking-wide text-center py-1">
                      {w.modiGlyph}
                    </div>
                    <div className="vp-dev text-center text-sm font-medium text-[#2b2016] dark:text-[#f4ebd9] mt-1">
                      {w.devanagari}
                    </div>
                    <div className="text-[10px] vp-ser text-center text-[#7a6448] dark:text-[#9e886b] truncate mt-0.5">
                      {w.meaningEnglish || w.grammaticalCategory}
                    </div>
                    <div className="text-[9px] font-mono text-center text-[#9c8466] mt-0.5">
                      {w.confidence}% conf
                    </div>
                  </div>
                ))}
              </div>

              {/* English Translation Card */}
              <div className="mt-5 p-3.5 rounded-lg bg-[#faeed9] dark:bg-[#1a140d] border border-[#d8c69a] dark:border-[#3a2c1c]">
                <div className="vp-ser text-xs font-semibold text-[#8a3324] dark:text-[#c98a3a] uppercase tracking-wider mb-1">
                  Full English Scholarly Translation:
                </div>
                <p className="vp-ser text-sm text-[#3a2c1a] dark:text-[#d9ccb6] leading-relaxed italic">
                  "{document.transliteration.englishTranslation}"
                </p>
              </div>
            </div>
          )}

          {/* 4. SCHOLARLY PROVENANCE TAB */}
          {activeTab === 'scholarly' && (
            <div className="vp-ser text-xs text-[#3a2c1a] dark:text-[#d9cbba] space-y-4">
              <div className="border-b border-[#c6b082] dark:border-[#4a3926] pb-2.5">
                <h4 className="text-base font-semibold text-[#2b2016] dark:text-[#f4ebd9]">
                  {document.titleMarathi}
                </h4>
                <div className="text-xs text-[#705b3e] dark:text-[#a08a68] mt-0.5">
                  {document.titleEnglish} · Accession {document.accessionNumber}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded bg-[#faedd8] dark:bg-[#1e1710] border border-[#dfd0b2] dark:border-[#382b1b]">
                  <span className="font-semibold text-[#8a3324] dark:text-[#c98a3a] block mb-1">
                    Archival Origin & Physical Carrier:
                  </span>
                  <div className="space-y-1">
                    <div><strong>Repository:</strong> {document.archiveLocation}</div>
                    <div><strong>Rumal / Bundle Ref:</strong> {document.rumalOrDaftarRef}</div>
                    <div><strong>Carrier Material:</strong> {document.materialDetails}</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#faedd8] dark:bg-[#1e1710] border border-[#dfd0b2] dark:border-[#382b1b]">
                  <span className="font-semibold text-[#8a3324] dark:text-[#c98a3a] block mb-1">
                    Seal & Authentication:
                  </span>
                  <div className="space-y-1">
                    <div><strong>Seal Type:</strong> {document.sealDescription}</div>
                    <div><strong>Responsible Scribe:</strong> {document.scribeOrOfficer}</div>
                    <div><strong>Confidence Index:</strong> F1 {document.f1Score} (High historical validity)</div>
                  </div>
                </div>
              </div>

              {/* Named Entity Extraction */}
              <div className="p-3 rounded bg-[#faedd8] dark:bg-[#1e1710] border border-[#dfd0b2] dark:border-[#382b1b]">
                <span className="font-semibold text-[#8a3324] dark:text-[#c98a3a] block mb-1.5">
                  Extracted Historical Entities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-[#6b5637] dark:text-[#a89070] block font-medium">Places / Toponyms:</span>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                      {document.keyEntities.places.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[#6b5637] dark:text-[#a89070] block font-medium">Figures & Officers:</span>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                      {document.keyEntities.persons.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[#6b5637] dark:text-[#a89070] block font-medium">Fiscal / Land Units:</span>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                      {document.keyEntities.fiscalUnits.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-end pt-2">
                <button
                  onClick={onOpenSimulation}
                  className="px-3 py-1.5 bg-[#8a3324] text-[#f6ead0] rounded hover:bg-[#72271a] cursor-pointer text-xs flex items-center gap-1.5 font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Simulate Pipeline on this Manuscript
                </button>
              </div>
            </div>
          )}

          {/* Bottom Fleuron */}
          <div className="vp-ser text-center text-[#9c7a3c] dark:text-[#b89552] text-base mt-3.5 select-none">
            ❦
          </div>

        </div>
      </div>
    </div>
  );
};
