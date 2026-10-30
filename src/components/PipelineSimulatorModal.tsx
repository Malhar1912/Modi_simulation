import React, { useState, useEffect } from 'react';
import { ModiDocument } from '../types/modi';
import { calculateCER, calculateWER } from '../utils/paleography';
import { 
  X, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Sliders, 
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface PipelineSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocument: ModiDocument;
  documents: ModiDocument[];
  onApplyResultToView: (doc: ModiDocument) => void;
}

export const PipelineSimulatorModal: React.FC<PipelineSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialDocument,
  documents,
  onApplyResultToView,
}) => {
  const [selectedDoc, setSelectedDoc] = useState<ModiDocument>(initialDocument);
  const [modelType, setModelType] = useState('peshwa-chancery');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Stages of the paleographic document OCR simulation
  const stages = [
    { title: '1. Adaptive Binarization', desc: 'Otsu thresholding and noise reduction on aged rag paper fibers' },
    { title: '2. Baseline & Stroke Tracing', desc: 'Detecting continuous shirorekha and ligature descender branches' },
    { title: '3. Vision Glyph Encoder', desc: 'ResNet-Modi deep cursive feature vector extraction' },
    { title: '4. BiLSTM Sequence Alignment', desc: 'Bidirectional language modeling for Devanagari character mapping' },
    { title: '5. Shabdakosh Normalisation', desc: 'Peshwekalin administrative lexicon dictionary lookup & OOV checks' },
  ];

  useEffect(() => {
    setSelectedDoc(initialDocument);
    setIsCompleted(false);
    setActiveStage(0);
    setStageProgress(0);
  }, [initialDocument, isOpen]);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setIsCompleted(false);
    setActiveStage(0);
    setStageProgress(15);

    // Simulate multi-stage progression with authentic timings
    const timers = [
      setTimeout(() => { setActiveStage(1); setStageProgress(35); }, 600),
      setTimeout(() => { setActiveStage(2); setStageProgress(55); }, 1300),
      setTimeout(() => { setActiveStage(3); setStageProgress(80); }, 2000),
      setTimeout(() => { setActiveStage(4); setStageProgress(95); }, 2700),
      setTimeout(() => {
        setActiveStage(5);
        setStageProgress(100);
        setIsSimulating(false);
        setIsCompleted(true);
      }, 3400),
    ];

    return () => timers.forEach(clearTimeout);
  };

  if (!isOpen) return null;

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
            <span className="vp-ser text-base font-normal tracking-wide flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#c98a3a]" />
              मोडी लिप्यंतरण यंत्रणा सिम्युलेटर · OCR Pipeline Simulator
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

        {/* Configuration Bar */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-3 border-b border-[#d8c69a] dark:border-[#382b1c] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs vp-ser font-medium text-[#523f27] dark:text-[#c4b39b] mb-1">
              Select Historical Manuscript Source:
            </label>
            <select
              value={selectedDoc.id}
              onChange={(e) => {
                const found = documents.find(d => d.id === e.target.value);
                if (found) {
                  setSelectedDoc(found);
                  setIsCompleted(false);
                  setActiveStage(0);
                }
              }}
              disabled={isSimulating}
              className="w-full px-2.5 py-1.5 bg-[#fbf5e8] dark:bg-[#17110a] border border-[#d8c69a] dark:border-[#423220] rounded text-xs vp-ser text-[#2b2016] dark:text-[#ede0c8] cursor-pointer"
            >
              {documents.map(d => (
                <option key={d.id} value={d.id}>
                  {d.id} · {d.titleMarathi} ({d.eraYears})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs vp-ser font-medium text-[#523f27] dark:text-[#c4b39b] mb-1">
              Paleography Model Weights:
            </label>
            <select
              value={modelType}
              onChange={(e) => setModelType(e.target.value)}
              disabled={isSimulating}
              className="w-full px-2.5 py-1.5 bg-[#fbf5e8] dark:bg-[#17110a] border border-[#d8c69a] dark:border-[#423220] rounded text-xs vp-ser text-[#2b2016] dark:text-[#ede0c8] cursor-pointer"
            >
              <option value="peshwa-chancery">Peshwa-Chancery-OCR v2.4 (Pune Daftar Weights)</option>
              <option value="shivakalin-epigraph">Shivakalin-Epigraph-CNN (17th C. Royal Sanads)</option>
              <option value="bilingual-lexicon">Bilingual-Lexicon-HMM (Perso-Arabic Vocabulary)</option>
            </select>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
          
          {/* Pipeline Progress Stages */}
          <div className="p-3.5 bg-[#faeed8] dark:bg-[#1f1710] rounded-lg border border-[#d8c69a] dark:border-[#382b1c]">
            <div className="flex items-center justify-between text-xs vp-ser text-[#6b5637] dark:text-[#a08a68] mb-2 font-medium">
              <span>Pipeline Stage Execution</span>
              <span className="font-mono text-[#8a3324] dark:text-[#c98a3a]">
                {stageProgress}% Completed
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#dfd0b2] dark:bg-[#342718] rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-[#8a3324] dark:bg-[#c98a3a] transition-all duration-300 rounded-full"
                style={{ width: `${stageProgress}%` }}
              ></div>
            </div>

            {/* Stage Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-1.5 text-xs vp-ser">
              {stages.map((stage, idx) => {
                const isPassed = activeStage > idx || isCompleted;
                const isCurrent = activeStage === idx && isSimulating;

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded border transition-colors ${
                      isPassed
                        ? 'bg-[#e2f0d9] dark:bg-[#1a2814] border-[#95c57e] text-[#2c5419] dark:text-[#9cd180]'
                        : isCurrent
                        ? 'bg-[#faeed8] dark:bg-[#2d2215] border-[#c98a3a] text-[#8a5b1c] dark:text-[#c98a3a] animate-pulse'
                        : 'bg-[#faeed8]/40 dark:bg-[#18110a]/40 border-[#e0d2b4] dark:border-[#2e2316] text-[#8a765c]'
                    }`}
                  >
                    <div className="font-semibold flex items-center gap-1">
                      {isPassed && <CheckCircle2 className="w-3 h-3 text-[#3d7a22]" />}
                      <span className="truncate">{stage.title.split('.')[1]}</span>
                    </div>
                    <div className="text-[10px] text-[#705b40] dark:text-[#9e886d] mt-0.5 line-clamp-2">
                      {stage.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Source Modi Excerpt Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs vp-ser">
            <div className="p-3 bg-[#faedd5] dark:bg-[#1c150e] rounded-lg border border-[#d8c69a] dark:border-[#382b1b]">
              <div className="font-semibold text-[#8a6b3a] dark:text-[#c98a3a] mb-1 uppercase tracking-wider">
                Raw Input Modi Glyph Stream:
              </div>
              <div className="font-mono text-base text-[#2e1f12] dark:text-[#e8dac2] bg-[#f2e2be]/60 dark:bg-[#281e13] p-2.5 rounded border border-[#dfcaa0] dark:border-[#382b1a] overflow-x-auto min-h-[70px]">
                {selectedDoc.transliteration.modiExcerpt}
              </div>
              <div className="text-[10px] text-[#7d6748] mt-1">
                Language: Old Marathi (पेशवेकालीन मोडी) · Lines: {selectedDoc.metrics.linesDetected}
              </div>
            </div>

            <div className="p-3 bg-[#faedd5] dark:bg-[#1c150e] rounded-lg border border-[#d8c69a] dark:border-[#382b1b]">
              <div className="font-semibold text-[#8a6b3a] dark:text-[#c98a3a] mb-1 uppercase tracking-wider">
                Model Extraction Output:
              </div>
              <div className="vp-dev text-base text-[#2e1f12] dark:text-[#e8dac2] bg-[#f2e2be]/60 dark:bg-[#281e13] p-2.5 rounded border border-[#dfcaa0] dark:border-[#382b1a] overflow-x-auto min-h-[70px]">
                {isCompleted ? (
                  <span>{selectedDoc.transliteration.fullDevanagari}</span>
                ) : isSimulating ? (
                  <span className="text-[#8a6b3a] italic font-mono text-xs">
                    Running neural beam decoding for line segments...
                  </span>
                ) : (
                  <span className="text-[#998263] italic">
                    Press "Start Pipeline Simulation" to execute extraction
                  </span>
                )}
              </div>
              <div className="text-[10px] text-[#7d6748] mt-1 flex justify-between">
                <span>Output script: Devanagari</span>
                {isCompleted && (
                  <span className="font-mono text-[#48632e] font-semibold">
                    CER: {selectedDoc.metrics.cer}% · WER: {selectedDoc.metrics.wer}%
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Extracted Tokens Summary if Completed */}
          {isCompleted && (
            <div className="p-3.5 bg-[#e8f2df] dark:bg-[#162312] border border-[#a2cb8a] dark:border-[#2f4f22] rounded-lg text-xs vp-ser text-[#274f17] dark:text-[#9fd486] animate-fadeIn">
              <div className="font-semibold text-sm flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3e7a25]" />
                Pipeline Simulation Completed Successfully!
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white/60 dark:bg-black/30 p-2 rounded">
                  <div className="font-mono text-base font-bold text-[#1f4212] dark:text-[#a8e08d]">
                    {selectedDoc.metrics.cer}%
                  </div>
                  <div className="text-[10px]">Character Error</div>
                </div>
                <div className="bg-white/60 dark:bg-black/30 p-2 rounded">
                  <div className="font-mono text-base font-bold text-[#1f4212] dark:text-[#a8e08d]">
                    {selectedDoc.metrics.wordsSegmented}
                  </div>
                  <div className="text-[10px]">Words Segmented</div>
                </div>
                <div className="bg-white/60 dark:bg-black/30 p-2 rounded">
                  <div className="font-mono text-base font-bold text-[#8a3324]">
                    {selectedDoc.metrics.flaggedOov}
                  </div>
                  <div className="text-[10px]">Flagged OOV</div>
                </div>
                <div className="bg-white/60 dark:bg-black/30 p-2 rounded">
                  <div className="font-mono text-base font-bold text-[#1f4212] dark:text-[#a8e08d]">
                    F1 {selectedDoc.f1Score}
                  </div>
                  <div className="text-[10px]">Dating Confidence</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-3 border-t border-[#d8c69a] dark:border-[#382b1c] flex items-center justify-between">
          <button
            onClick={() => {
              setIsCompleted(false);
              setActiveStage(0);
              setStageProgress(0);
            }}
            disabled={isSimulating}
            className="px-3 py-1.5 text-xs vp-ser text-[#5e492e] dark:text-[#b8a48b] hover:bg-[#dfcaa0] rounded cursor-pointer flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          <div className="flex items-center gap-2">
            {isCompleted ? (
              <button
                onClick={() => {
                  onApplyResultToView(selectedDoc);
                  onClose();
                }}
                className="px-4 py-1.5 bg-[#2b2016] text-[#e9dcc0] rounded text-xs vp-ser font-medium hover:bg-[#3d2e1f] cursor-pointer flex items-center gap-1.5 shadow"
              >
                <span>View in Studio Workbench</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleStartSimulation}
                disabled={isSimulating}
                className="px-4 py-1.5 bg-[#8a3324] text-[#f6ead0] rounded text-xs vp-ser font-medium hover:bg-[#72271a] cursor-pointer flex items-center gap-1.5 shadow disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isSimulating ? 'Processing Pipeline...' : 'Start Pipeline Simulation'}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
