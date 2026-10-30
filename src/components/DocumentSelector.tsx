import React from 'react';
import { ModiDocument } from '../types/modi';
import { ScrollText, Filter, CheckCircle2 } from 'lucide-react';

interface DocumentSelectorProps {
  documents: ModiDocument[];
  selectedDocumentId: string;
  onSelectDocument: (doc: ModiDocument) => void;
  genreFilter: string;
  onGenreFilterChange: (genre: string) => void;
}

export const DocumentSelector: React.FC<DocumentSelectorProps> = ({
  documents,
  selectedDocumentId,
  onSelectDocument,
  genreFilter,
  onGenreFilterChange,
}) => {
  const genres = [
    { id: 'all', label: 'All Manuscripts (सर्व दस्तऐवज)' },
    { id: 'revenue', label: 'जमाबंदी (Revenue)' },
    { id: 'charter', label: 'सनद (Charter)' },
    { id: 'ledger', label: 'हिशेब (Ledger)' },
    { id: 'order', label: 'आज्ञापत्र (Order)' },
    { id: 'dispute', label: 'महजर (Judicial Accord)' },
    { id: 'endowment', label: 'दानपत्र (Endowment)' },
  ];

  const filteredDocs = genreFilter === 'all'
    ? documents
    : documents.filter(d => d.genre === genreFilter);

  return (
    <div className="w-full bg-[#f8f3e6] dark:bg-[#1a1510] border-b border-[#dfd4be] dark:border-[#35281a] px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-[#7d6748] dark:text-[#a89070] shrink-0 vp-ser mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Class:</span>
          </div>
          {genres.map(g => (
            <button
              key={g.id}
              onClick={() => onGenreFilterChange(g.id)}
              className={`px-2.5 py-1 text-xs rounded transition-all whitespace-nowrap cursor-pointer vp-ser ${
                genreFilter === g.id
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'bg-[#ede3ce] dark:bg-[#281f16] text-[#5e4b33] dark:text-[#c4b195] hover:bg-[#e2d5bd] dark:hover:bg-[#34281c]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Selected count info */}
        <div className="text-xs vp-ser text-[#8a7252] dark:text-[#9e8768] shrink-0 hidden lg:block">
          {filteredDocs.length} archival specimens available
        </div>
      </div>

      {/* Horizontal Document Strip */}
      <div className="max-w-7xl mx-auto mt-3 overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-3 min-w-max">
          {filteredDocs.map(doc => {
            const isSelected = doc.id === selectedDocumentId;
            return (
              <button
                key={doc.id}
                onClick={() => onSelectDocument(doc)}
                className={`relative text-left p-2.5 rounded-lg border transition-all cursor-pointer min-w-[210px] max-w-[250px] ${
                  isSelected
                    ? 'bg-[#f0e3c5] dark:bg-[#2a2016] border-[#8a3324] shadow-md ring-1 ring-[#8a3324]'
                    : 'bg-[#fcf7ec] dark:bg-[#1e1710] border-[#d8c69a] dark:border-[#3a2d1d] hover:border-[#b89b63] dark:hover:border-[#523f29]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 text-[#8a3324] dark:text-[#c98a3a]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                )}
                
                <div className="flex items-center gap-1.5 text-[11px] vp-ser text-[#8a6b3a] dark:text-[#c98a3a] font-medium tracking-wide">
                  <ScrollText className="w-3.5 h-3.5" />
                  <span>{doc.id}</span>
                  <span className="text-[#a08a68]">·</span>
                  <span className="truncate max-w-[110px]">{doc.eraYears}</span>
                </div>

                <div className="vp-dev text-[13px] text-[#2b2016] dark:text-[#e8dac0] font-medium mt-1 truncate">
                  {doc.titleMarathi}
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#6b5637] dark:text-[#a08a68] mt-2 pt-1.5 border-t border-[#dfd2b2] dark:border-[#35281a]">
                  <span className="truncate max-w-[120px]">{doc.genreLabelMarathi.split('·')[0]}</span>
                  <span className="font-mono tabular-nums">CER: {doc.metrics.cer}%</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
