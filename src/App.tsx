/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MODI_DOCUMENTS } from './data/modiDocuments';
import { ModiDocument, ViewMode } from './types/modi';
import { Header } from './components/Header';
import { DocumentSelector } from './components/DocumentSelector';
import { DocumentResultCard } from './components/DocumentResultCard';
import { ManuscriptCanvasViewer } from './components/ManuscriptCanvasViewer';
import { ShabdakoshExplorer } from './components/ShabdakoshExplorer';
import { AlphabetPrimerModal } from './components/AlphabetPrimerModal';
import { PipelineSimulatorModal } from './components/PipelineSimulatorModal';
import { ExportModal } from './components/ExportModal';
import { 
  ScrollText, 
  Sparkles, 
  BookOpen, 
  Layers, 
  FileCheck, 
  Compass, 
  History, 
  ShieldCheck,
  Search
} from 'lucide-react';

export default function App() {
  const [selectedDoc, setSelectedDoc] = useState<ModiDocument>(MODI_DOCUMENTS[0]);
  const [activeView, setActiveView] = useState<ViewMode>('overview');
  const [genreFilter, setGenreFilter] = useState<string>('all');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isAlphabetOpen, setIsAlphabetOpen] = useState<boolean>(false);
  const [isSimulationOpen, setIsSimulationOpen] = useState<boolean>(false);
  const [exportModalState, setExportModalState] = useState<{ isOpen: boolean; format: 'docx' | 'xml' | 'txt' }>({
    isOpen: false,
    format: 'docx',
  });

  // Handle dark mode toggle on root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#f5ede0] dark:bg-[#140f09] text-[#2b2016] dark:text-[#ede2cf] flex flex-col transition-colors selection:bg-[#c98a3a]/30">
      
      {/* 1. Header (Top Bar Contract) */}
      <Header
        activeView={activeView}
        onSelectView={(view) => setActiveView(view)}
        onOpenSimulation={() => setIsSimulationOpen(true)}
        onOpenAlphabet={() => setIsAlphabetOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* 2. Archival Document Strip & Genre Filters */}
      <DocumentSelector
        documents={MODI_DOCUMENTS}
        selectedDocumentId={selectedDoc.id}
        onSelectDocument={(doc) => setSelectedDoc(doc)}
        genreFilter={genreFilter}
        onGenreFilterChange={(genre) => setGenreFilter(genre)}
      />

      {/* 3. Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Curatorial Header & Historical Context Banner */}
        <section className="mb-6 p-4 sm:p-5 rounded-xl bg-[#ede3cc] dark:bg-[#1c150e] border border-[#d8c69a] dark:border-[#382b1c] shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs vp-ser text-[#8a6b3a] dark:text-[#c98a3a] uppercase tracking-wider font-semibold">
                <History className="w-3.5 h-3.5" />
                <span>पुणे पेशवे दफ्तर पुराभिलेखागार · Digital Paleography Workbench</span>
              </div>
              <h1 className="vp-ser text-xl sm:text-2xl font-normal text-[#2b2016] dark:text-[#f4ebd9] mt-1">
                {selectedDoc.titleMarathi}
              </h1>
              <div className="text-xs vp-ser text-[#614d33] dark:text-[#a08a68] mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{selectedDoc.titleEnglish}</span>
                <span>·</span>
                <span>Accession: <strong>{selectedDoc.accessionNumber}</strong></span>
                <span>·</span>
                <span>Origin: {selectedDoc.archiveLocation.split('(')[0]}</span>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsSimulationOpen(true)}
                className="px-3 py-1.5 rounded-md bg-[#2b2016] text-[#e9dcc0] hover:bg-[#3d2e1f] text-xs vp-ser flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c98a3a]" />
                Simulate OCR Extraction
              </button>
              <button
                onClick={() => setExportModalState({ isOpen: true, format: 'docx' })}
                className="px-3 py-1.5 rounded-md bg-[#d9c38d] text-[#2b2016] hover:bg-[#ebd9a9] text-xs vp-ser font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <ScrollText className="w-3.5 h-3.5 text-[#8a3324]" />
                Export Word .docx
              </button>
            </div>
          </div>
        </section>

        {/* View Switcher Content Routing */}
        {(activeView === 'overview' || activeView === 'transliteration' || activeView === 'analysis') && (
          <div className="space-y-8">
            {/* Centerpiece Result Card (Faithful to Slide 1 & Slide 2) */}
            <DocumentResultCard
              document={selectedDoc}
              onOpenExportModal={(fmt) => setExportModalState({ isOpen: true, format: fmt })}
              onOpenSimulation={() => setIsSimulationOpen(true)}
              onOpenAlphabet={() => setIsAlphabetOpen(true)}
            />

            {/* Physical Manuscript Canvas Inspector */}
            <ManuscriptCanvasViewer document={selectedDoc} />
          </div>
        )}

        {activeView === 'manuscript' && (
          <ManuscriptCanvasViewer document={selectedDoc} />
        )}

        {activeView === 'shabdakosh' && (
          <ShabdakoshExplorer documents={MODI_DOCUMENTS} />
        )}

        {/* Informational Curatorial Grid at base */}
        <section className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-[#ebd9b2]/60 dark:bg-[#1a130b] border border-[#d8caa6] dark:border-[#382b1a] vp-ser text-xs">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8a3324] dark:text-[#c98a3a] mb-2">
              <ScrollText className="w-4 h-4" />
              <span>मोडी लिपीचा इतिहास (Script History)</span>
            </div>
            <p className="text-[#4f3e28] dark:text-[#b8a68e] leading-relaxed">
              Modi script was developed as an unbroken cursive chancery hand in 13th-century Maharashtra. Scribes wrote rapidly without lifting their pen from the parchment, making it the administrative engine of Chhatrapati Shivaji Maharaj and the Peshwa Empire.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#ebd9b2]/60 dark:bg-[#1a130b] border border-[#d8caa6] dark:border-[#382b1a] vp-ser text-xs">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8a3324] dark:text-[#c98a3a] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>अभिलेख प्रमाणिकरण (Archival Verification)</span>
            </div>
            <p className="text-[#4f3e28] dark:text-[#b8a68e] leading-relaxed">
              Every document is validated by paleographic stroke loops, watermark analysis, vocabulary era markers, and royal seals (Shivaji Maharaj’s octagonal Rajmudra or the Peshwa Mortab).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#ebd9b2]/60 dark:bg-[#1a130b] border border-[#d8caa6] dark:border-[#382b1a] vp-ser text-xs">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8a3324] dark:text-[#c98a3a] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>शब्दकोश नियम (Normalisation Rules)</span>
            </div>
            <p className="text-[#4f3e28] dark:text-[#b8a68e] leading-relaxed">
              Historic Maratha revenue and court terminology (जमाबंदी, मौजे, कसबे, हुजूर, इनाम) is cross-referenced with Molesworth & Peshwe Daftar dictionaries, offering preserved and modernized readings.
            </p>
          </div>
        </section>

      </main>

      {/* 4. Archival Footer */}
      <footer className="w-full bg-[#231a12] text-[#baa58a] border-t border-[#423223] py-6 px-4 sm:px-6 lg:px-8 mt-auto vp-ser text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-medium text-[#f4ebd9]">
              मोडी लिपी पुराभिलेखागार · Modi Lipi Historical Extraction Platform
            </div>
            <div className="text-[11px] text-[#8a7256] mt-0.5">
              Preserving and deciphering 40 million historic Maratha documents across Pune, Satara & Thanjavur archives.
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setIsAlphabetOpen(true)}
              className="text-[#d9cbba] hover:text-[#c98a3a] transition-colors cursor-pointer"
            >
              Modi Alphabet Chart
            </button>
            <span className="text-[#423223]">·</span>
            <button
              onClick={() => setActiveView('shabdakosh')}
              className="text-[#d9cbba] hover:text-[#c98a3a] transition-colors cursor-pointer"
            >
              Shabdakosh Dictionary
            </button>
            <span className="text-[#423223]">·</span>
            <button
              onClick={() => setIsSimulationOpen(true)}
              className="text-[#d9cbba] hover:text-[#c98a3a] transition-colors cursor-pointer"
            >
              Pipeline Simulation
            </button>
          </div>
        </div>
      </footer>

      {/* 5. Modals */}
      <AlphabetPrimerModal
        isOpen={isAlphabetOpen}
        onClose={() => setIsAlphabetOpen(false)}
      />

      <PipelineSimulatorModal
        isOpen={isSimulationOpen}
        onClose={() => setIsSimulationOpen(false)}
        initialDocument={selectedDoc}
        documents={MODI_DOCUMENTS}
        onApplyResultToView={(doc) => {
          setSelectedDoc(doc);
          setActiveView('transliteration');
        }}
      />

      <ExportModal
        isOpen={exportModalState.isOpen}
        onClose={() => setExportModalState({ ...exportModalState, isOpen: false })}
        document={selectedDoc}
        initialFormat={exportModalState.format}
      />

    </div>
  );
}
