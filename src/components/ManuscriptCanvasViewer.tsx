import React, { useState } from 'react';
import { ModiDocument } from '../types/modi';
import { ZoomIn, ZoomOut, Eye, Sun, Sparkles, Sliders, Maximize2 } from 'lucide-react';

interface ManuscriptCanvasViewerProps {
  document: ModiDocument;
}

export const ManuscriptCanvasViewer: React.FC<ManuscriptCanvasViewerProps> = ({ document }) => {
  const [zoom, setZoom] = useState(1);
  const [contrast, setContrast] = useState(100);
  const [filterMode, setFilterMode] = useState<'standard' | 'high-contrast' | 'infrared' | 'binary'>('standard');
  const [showBoxes, setShowBoxes] = useState(true);
  const [activeWordBox, setActiveWordBox] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-3 sm:px-4">
      <div className="bg-[#e9dec5] dark:bg-[#1a140d] rounded-xl p-3 sm:p-3.5 shadow-xl border border-[#d8caa6] dark:border-[#352718]">
        
        {/* Mahogany Header */}
        <div className="bg-[#2b2016] rounded-t-[10px] px-3.5 py-2.5 flex items-center justify-between gap-2.5 text-[#e9dcc0]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c98a3a]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#8a6b3a]"></span>
            <span className="vp-ser text-[15px] tracking-wide font-normal">
              हस्तलिखित तपासणी कक्ष · Manuscript Inspection Canvas ({document.id})
            </span>
          </div>

          {/* Inspection Mode Controls */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterMode('standard')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                filterMode === 'standard' ? 'bg-[#d9c38d] text-[#2b2016] font-medium' : 'text-[#d9cbba] hover:bg-[#3d2e1f]'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setFilterMode('infrared')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                filterMode === 'infrared' ? 'bg-[#8a3324] text-[#f6ead0] font-medium' : 'text-[#d9cbba] hover:bg-[#3d2e1f]'
              }`}
              title="Infrared spectrum simulation to reveal faded carbon soot ink"
            >
              Infrared (अवरक्त)
            </button>
            <button
              onClick={() => setFilterMode('binary')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                filterMode === 'binary' ? 'bg-[#2b2016] text-[#c98a3a] border border-[#c98a3a] font-medium' : 'text-[#d9cbba] hover:bg-[#3d2e1f]'
              }`}
              title="Otsu binarization filter"
            >
              Binarized
            </button>
          </div>
        </div>

        {/* Canvas Toolbar */}
        <div className="bg-[#f0e4cc] dark:bg-[#231a11] px-4 py-2 border-x border-[#d8c69a] dark:border-[#382b1c] flex flex-wrap items-center justify-between gap-3 text-xs vp-ser text-[#5e4b33] dark:text-[#c4b39b]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-[#8a6b3a]" />
              <span>Contrast:</span>
              <input
                type="range"
                min="80"
                max="160"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-20 cursor-pointer"
              />
              <span className="font-mono text-[11px]">{contrast}%</span>
            </span>

            <label className="flex items-center gap-1.5 cursor-pointer ml-2">
              <input
                type="checkbox"
                checked={showBoxes}
                onChange={(e) => setShowBoxes(e.target.checked)}
                className="rounded border-[#c6b082] text-[#8a3324] focus:ring-0 cursor-pointer"
              />
              <span>Bounding Boxes (शब्द सीमा)</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(Math.max(0.8, zoom - 0.1))}
              className="p-1 rounded bg-[#e5d6b3] dark:bg-[#2d2217] hover:bg-[#d8c69f] cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] w-12 text-center">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom(Math.min(1.6, zoom + 0.1))}
              className="p-1 rounded bg-[#e5d6b3] dark:bg-[#2d2217] hover:bg-[#d8c69f] cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setZoom(1); setContrast(100); setFilterMode('standard'); }}
              className="px-2 py-1 rounded bg-[#e5d6b3] dark:bg-[#2d2217] hover:bg-[#d8c69f] text-[11px] cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Simulated Vintage Manuscript Surface */}
        <div 
          className="bg-[#d2c39d] dark:bg-[#120d08] p-4 sm:p-6 overflow-x-auto border border-[#d8c69a] dark:border-[#382b1c] rounded-b-[10px] min-h-[380px] flex items-center justify-center relative select-none"
        >
          {/* Physical Manuscript Sheet */}
          <div 
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
              filter: filterMode === 'infrared' 
                ? 'invert(0.9) hue-rotate(180deg) contrast(1.4)' 
                : filterMode === 'binary'
                ? 'grayscale(1) contrast(3.5)'
                : `contrast(${contrast}%)`,
              transition: 'transform 0.15s ease-out, filter 0.2s ease',
            }}
            className="w-full max-w-[700px] min-h-[460px] bg-[#f2e6cb] shadow-2xl rounded-sm border border-[#ba9d65] p-8 sm:p-10 relative overflow-hidden text-[#22180e]"
          >
            {/* Watermark and Paper Grain Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(#dfcaa0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none"></div>
            
            {/* Aging stain corner effects */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#b89456]/40 via-[#d1b37c]/20 to-transparent pointer-events-none rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-tr from-[#9c783c]/30 via-transparent to-transparent pointer-events-none"></div>

            {/* Vertical Fold Line in Center */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#997a4a]/25 pointer-events-none"></div>
            
            {/* Horizontal Fold Creases */}
            <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#997a4a]/20 pointer-events-none"></div>
            <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-[#997a4a]/20 pointer-events-none"></div>

            {/* Top Vermilion Royal Seal ( शिक्का / मुद्रा ) */}
            <div className="flex justify-center mb-6">
              {document.sealSvgType === 'octagonal_rajmudra' ? (
                // Chhatrapati Shivaji Maharaj Octagonal Sanskrit Rajmudra
                <div className="w-24 h-24 border-2 border-[#8a2418] bg-[#f8e5dc]/90 text-[#8a2418] p-1 flex flex-col items-center justify-center text-center shadow-inner rotate-1" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <div className="text-[8px] font-serif font-bold leading-tight">
                    प्रतिपच्चंद्र-
                  </div>
                  <div className="text-[8px] font-serif font-bold leading-tight">
                    लेखेव वर्धिष्णुर्विश्व-
                  </div>
                  <div className="text-[8px] font-serif font-bold leading-tight">
                    वंदिता शाहसूनोः
                  </div>
                  <div className="text-[7px] font-serif leading-tight">
                    शिवस्यैषा मुद्रा
                  </div>
                </div>
              ) : (
                // Peshwa Mortab (अंडाकृती मोर्तब) Oval Seal
                <div className="w-28 h-16 rounded-[50%] border-2 border-[#8a2418] bg-[#f6dfd7]/90 text-[#8a2418] p-1 flex flex-col items-center justify-center text-center shadow-sm -rotate-2">
                  <div className="text-[10px] font-serif font-bold uppercase tracking-wider">
                    ॥ श्री मोर्तब ॥
                  </div>
                  <div className="text-[8px] font-mono tracking-tighter">
                    {document.rumalOrDaftarRef.split('·')[0]}
                  </div>
                </div>
              )}
            </div>

            {/* Invocatory Top Line */}
            <div className="text-center font-serif text-[#4a341b] text-sm mb-4 tracking-widest">
              ॥ श्री ॥
            </div>

            {/* Original Modi Script Lines with Bounding Boxes */}
            <div className="space-y-4 font-mono text-[#26190e] text-lg sm:text-xl leading-relaxed relative">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {document.transliteration.words.map((w, idx) => (
                  <div
                    key={w.id}
                    onMouseEnter={() => setActiveWordBox(w.id)}
                    onMouseLeave={() => setActiveWordBox(null)}
                    className={`relative inline-block transition-all cursor-pointer ${
                      showBoxes
                        ? 'border border-[#9c723d]/60 bg-[#eedbb3]/40 px-1.5 py-0.5 rounded'
                        : ''
                    } ${
                      activeWordBox === w.id
                        ? 'bg-[#c98a3a]/40 ring-1 ring-[#8a3324]'
                        : ''
                    } ${
                      w.isOov ? 'border-dashed border-[#8a3324]' : ''
                    }`}
                  >
                    <span className="text-xl sm:text-2xl text-[#2e1d0f] font-normal tracking-wide">
                      {w.modiGlyph}
                    </span>

                    {/* Hover Bounding Box Popover */}
                    {activeWordBox === w.id && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2b2016] text-[#f4ebd9] px-2 py-1 rounded text-xs vp-dev whitespace-nowrap z-30 shadow-lg pointer-events-none">
                        <span className="text-[#c98a3a] mr-1">{w.devanagari}</span>
                        <span className="font-mono text-[10px] text-[#baa489]">({w.confidence}%)</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Archival Catalog Stamp Bottom Left */}
            <div className="mt-12 flex justify-between items-end border-t border-[#c6b082] pt-4 text-[10px] font-mono text-[#7a6242]">
              <div>
                <div className="uppercase tracking-widest font-serif font-bold text-[#5e4526]">
                  {document.archiveLocation.split('(')[0]}
                </div>
                <div>DOC REF: {document.accessionNumber}</div>
                <div>SCRIBE: {document.scribeOrOfficer.split('(')[0]}</div>
              </div>

              {/* Red Clerk Signature Mark */}
              <div className="text-right">
                <span className="inline-block border border-[#8a2418] text-[#8a2418] px-2 py-0.5 rounded text-[9px] font-serif">
                  सही / खतावणी प्रमाणित
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Inspection Guide Footnote */}
        <div className="px-4 py-3 bg-[#e4d7bd] dark:bg-[#1f170f] rounded-b-[10px] text-xs vp-ser text-[#614d33] dark:text-[#a8957c] flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#d8c69a] dark:border-[#382b1c]">
          <span>
            Hover over any cursive Modi word on the manuscript to see detected bounding box, confidence score, and Devanagari transliteration.
          </span>
          <span className="font-mono text-[11px] shrink-0 text-[#8a6b3a] dark:text-[#c98a3a]">
            Detected Lines: {document.metrics.linesDetected} · Accuracy: {document.metrics.recognitionAccuracy}%
          </span>
        </div>

      </div>
    </div>
  );
};
