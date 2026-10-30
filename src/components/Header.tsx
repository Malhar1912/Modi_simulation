import React from 'react';
import { ViewMode } from '../types/modi';
import { Sparkles, Sun, Moon, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenSimulation: () => void;
  onOpenAlphabet: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onSelectView,
  onOpenSimulation,
  onOpenAlphabet,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="w-full bg-[#231a12] text-[#f4ebd9] border-b border-[#423223] sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded border border-[#c98a3a]/40 bg-[#322316] flex items-center justify-center text-[#c98a3a] font-serif font-bold text-lg select-none">
            मो
          </div>
          <button 
            onClick={() => onSelectView('overview')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="vp-ser text-lg sm:text-xl tracking-wide font-medium text-[#f4ebd9] group-hover:text-[#c98a3a] transition-colors whitespace-nowrap">
              मोडी लिपी अभिलेखागार
            </div>
            <div className="text-[10px] tracking-widest text-[#a89377] uppercase font-mono hidden sm:block">
              Modi Lipi Paleography & Extraction Studio
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm vp-ser">
          <button
            onClick={() => onSelectView('transliteration')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              activeView === 'transliteration'
                ? 'text-[#c98a3a] border-b-2 border-[#c98a3a]'
                : 'text-[#d9cbba] hover:text-[#f4ebd9]'
            }`}
          >
            Extraction Result
          </button>
          <button
            onClick={() => onSelectView('analysis')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              activeView === 'analysis'
                ? 'text-[#c98a3a] border-b-2 border-[#c98a3a]'
                : 'text-[#d9cbba] hover:text-[#f4ebd9]'
            }`}
          >
            Paleographic Analysis
          </button>
          <button
            onClick={() => onSelectView('manuscript')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              activeView === 'manuscript'
                ? 'text-[#c98a3a] border-b-2 border-[#c98a3a]'
                : 'text-[#d9cbba] hover:text-[#f4ebd9]'
            }`}
          >
            Manuscript Canvas
          </button>
          <button
            onClick={() => onSelectView('shabdakosh')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
              activeView === 'shabdakosh'
                ? 'text-[#c98a3a] border-b-2 border-[#c98a3a]'
                : 'text-[#d9cbba] hover:text-[#f4ebd9]'
            }`}
          >
            Shabdakosh Lexicon
          </button>
          <button
            onClick={onOpenAlphabet}
            className="whitespace-nowrap transition-colors py-1 cursor-pointer text-[#d9cbba] hover:text-[#c98a3a] flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#c98a3a]" />
            Modi Alphabet
          </button>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle conservation lab theme"
            className="w-8 h-8 rounded-md border border-[#4a3a2a] bg-[#2d2218] flex items-center justify-center text-[#c98a3a] hover:bg-[#3a2c1e] transition-colors cursor-pointer"
            title={isDark ? "Switch to Royal Archive Light Parchment" : "Switch to Infrared Lab Dark Theme"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenSimulation}
            className="px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm vp-ser font-medium text-[#231a12] bg-[#d9c38d] hover:bg-[#ebd5a0] active:scale-[0.98] rounded-md transition-all shadow-sm flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8a3324] shrink-0" />
            <span><span className="hidden sm:inline">Run </span>Simulation</span>
          </button>
        </div>

      </div>
    </header>
  );
};
