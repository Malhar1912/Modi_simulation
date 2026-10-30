import React, { useState } from 'react';
import { MODI_ALPHABET } from '../data/modiAlphabet';
import { ModiAlphabetGlyph } from '../types/modi';
import { X, BookOpen, Sparkles, Volume2 } from 'lucide-react';

interface AlphabetPrimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlphabetPrimerModal: React.FC<AlphabetPrimerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'consonant' | 'vowel' | 'numeral'>('consonant');
  const [selectedGlyph, setSelectedGlyph] = useState<ModiAlphabetGlyph | null>(MODI_ALPHABET[10]); // default 'क'

  if (!isOpen) return null;

  const glyphs = MODI_ALPHABET.filter(g => g.type === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-[#f4ebd9] dark:bg-[#1a140d] border border-[#d8c69a] dark:border-[#3d2e1f] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mahogany Header */}
        <div className="bg-[#2b2016] px-4 py-3 flex items-center justify-between text-[#e9dcc0]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c98a3a]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#8a6b3a]"></span>
            <span className="vp-ser text-base font-normal tracking-wide">
              मोडी अक्षरमाला · Modi Script Paleography Reference Chart
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#d9cbba] hover:bg-[#3d2e1f] hover:text-white cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-2 border-b border-[#d8c69a] dark:border-[#382b1c] flex items-center justify-between">
          <div className="flex items-center gap-1.5 vp-ser text-xs">
            <button
              onClick={() => setActiveTab('consonant')}
              className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                activeTab === 'consonant'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              Consonants (व्यंजने · ३४)
            </button>
            <button
              onClick={() => setActiveTab('vowel')}
              className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                activeTab === 'vowel'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              Vowels (स्वर · १०)
            </button>
            <button
              onClick={() => setActiveTab('numeral')}
              className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                activeTab === 'numeral'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              Numerals (मोडी अंक · ०-९)
            </button>
          </div>

          <div className="text-xs vp-ser text-[#8a6b3a] dark:text-[#c98a3a] hidden sm:block">
            Click any glyph for stroke details
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col md:flex-row gap-5">
          
          {/* Glyphs Grid */}
          <div className="flex-1 grid grid-cols-4 sm:grid-cols-6 gap-2">
            {glyphs.map((item, idx) => {
              const isSelected = selectedGlyph?.modiChar === item.modiChar;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedGlyph(item)}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#d9c38d] dark:bg-[#3d2e1f] border-[#8a3324] ring-1 ring-[#8a3324] shadow-sm'
                      : 'bg-[#faf2e3] dark:bg-[#1a130c] border-[#dfd2b5] dark:border-[#382b1c] hover:border-[#b89b63]'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-mono text-[#2b2016] dark:text-[#f4ebd9] leading-tight">
                    {item.modiChar}
                  </div>
                  <div className="vp-dev text-sm font-semibold text-[#8a3324] dark:text-[#d96a55] mt-1">
                    {item.devanagariChar}
                  </div>
                  <div className="text-[10px] font-mono text-[#8a7252] dark:text-[#9e886b]">
                    /{item.romanChar}/
                  </div>
                </button>
              );
            })}
          </div>

          {/* Glyph Detail Panel */}
          {selectedGlyph && (
            <div className="w-full md:w-64 bg-[#faeed8] dark:bg-[#201811] p-4 rounded-lg border border-[#d8c69a] dark:border-[#3d2e1f] flex flex-col justify-between shrink-0">
              <div>
                <div className="text-xs vp-ser text-[#8a6b3a] dark:text-[#c98a3a] font-semibold uppercase tracking-wider mb-2">
                  Paleographic Anatomy
                </div>

                <div className="bg-[#f2e2be] dark:bg-[#2a2016] p-4 rounded-lg text-center border border-[#c6b082] dark:border-[#423220] my-2">
                  <div className="text-5xl font-mono text-[#2b2016] dark:text-[#f4ebd9]">
                    {selectedGlyph.modiChar}
                  </div>
                  <div className="vp-dev text-xl font-bold text-[#8a3324] dark:text-[#e06550] mt-1.5">
                    देवनागरी: {selectedGlyph.devanagariChar}
                  </div>
                  <div className="text-xs font-mono text-[#6b5637] dark:text-[#baa489]">
                    Roman: {selectedGlyph.romanChar}
                  </div>
                </div>

                <div className="mt-3 text-xs vp-ser text-[#42311c] dark:text-[#d4c1a5]">
                  <div className="font-semibold text-[#8a3324] dark:text-[#c98a3a] mb-1">
                    Cursive Stroke Formation:
                  </div>
                  <p className="leading-relaxed">
                    {selectedGlyph.strokeTips}
                  </p>
                </div>

                {selectedGlyph.exampleWordDevanagari && (
                  <div className="mt-3 text-xs vp-ser text-[#42311c] dark:text-[#d4c1a5] bg-[#ebd8b0] dark:bg-[#2a2016] p-2 rounded">
                    <span className="font-medium text-[#8a3324] dark:text-[#c98a3a]">
                      Manuscript Example:
                    </span>
                    <div className="vp-dev text-sm font-semibold mt-0.5">
                      {selectedGlyph.exampleWordDevanagari}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#d8c69a] dark:border-[#3a2c1c] text-[11px] vp-ser text-[#7d6748] dark:text-[#9e886b] text-center">
                Modi cursive allows scribes to write without lifting the quill (अखंड लेखणी).
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-2.5 border-t border-[#d8c69a] dark:border-[#382b1c] flex items-center justify-between text-xs vp-ser text-[#614d33] dark:text-[#a89070]">
          <span>Hemadpant 13th Century Maratha Chancery Script (हेमाडपंती लिपी)</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#2b2016] text-[#e9dcc0] rounded text-xs hover:bg-[#3d2e1f] cursor-pointer"
          >
            Close Primer
          </button>
        </div>

      </div>
    </div>
  );
};
