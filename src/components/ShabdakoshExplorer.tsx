import React, { useState } from 'react';
import { ModiDocument, ShabdakoshItem } from '../types/modi';
import { Search, Book, CheckCircle, ArrowRight, Filter } from 'lucide-react';

interface ShabdakoshExplorerProps {
  documents: ModiDocument[];
}

export const ShabdakoshExplorer: React.FC<ShabdakoshExplorerProps> = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRule, setSelectedRule] = useState<'all' | 'preserved' | 'modernised'>('all');

  // Aggregate all shabdakosh items across documents, deduplicating by term
  const allEntries: ShabdakoshItem[] = React.useMemo(() => {
    const map = new Map<string, ShabdakoshItem>();
    documents.forEach(doc => {
      doc.shabdakoshEntries.forEach(item => {
        if (!map.has(item.term)) {
          map.set(item.term, item);
        }
      });
    });
    return Array.from(map.values());
  }, [documents]);

  const filteredEntries = allEntries.filter(entry => {
    const matchesSearch = 
      entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (entry.etymology && entry.etymology.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (entry.historicalNotes && entry.historicalNotes.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRule = selectedRule === 'all' || entry.rule === selectedRule;
    return matchesSearch && matchesRule;
  });

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-3 sm:px-4">
      <div className="bg-[#e9dec5] dark:bg-[#1a140d] rounded-xl p-3 sm:p-3.5 shadow-xl border border-[#d8caa6] dark:border-[#352718]">
        
        {/* Mahogany Header */}
        <div className="bg-[#2b2016] rounded-t-[10px] px-3.5 py-2.5 flex items-center gap-2.5 text-[#e9dcc0]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c98a3a]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#8a6b3a]"></span>
          <span className="vp-ser text-[15px] tracking-wide font-normal flex-1">
            ऐतिहासिक शब्दकोश व प्रमाणिकरण · Historical Lexicon & Normalisation Rules
          </span>
          <span className="text-xs vp-ser text-[#d9c38d] hidden sm:block">
            {filteredEntries.length} terms cataloged
          </span>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#f2e6cb] dark:bg-[#201810] p-3 sm:p-4 border-x border-[#d8c69a] dark:border-[#382b1c] flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7d6748] dark:text-[#a89070]" />
            <input
              type="text"
              placeholder="Search historical Maratha terms, etymology, or modern equivalents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#fbf5e8] dark:bg-[#17110a] border border-[#d8c69a] dark:border-[#423220] rounded-md text-sm vp-ser text-[#2b2016] dark:text-[#ede0c8] placeholder-[#9c8567] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-[#7d6748]" />
            <span className="text-xs vp-ser text-[#7d6748] dark:text-[#a89070]">Rule:</span>
            <select
              value={selectedRule}
              onChange={(e) => setSelectedRule(e.target.value as any)}
              className="px-2.5 py-1.5 text-xs bg-[#fbf5e8] dark:bg-[#17110a] border border-[#d8c69a] dark:border-[#423220] rounded text-[#2b2016] dark:text-[#ede0c8] cursor-pointer focus:outline-none vp-ser"
            >
              <option value="all">All Rules (सर्व नियम)</option>
              <option value="preserved">Preserved (अपरिवर्तित)</option>
              <option value="modernised">Modernised (आधुनिक)</option>
            </select>
          </div>
        </div>

        {/* Dictionary Table Content */}
        <div className="bg-[#f3e8cf] dark:bg-[#1c150d] p-4 sm:p-5 border border-[#d8c69a] dark:border-[#382b1c] rounded-b-[10px] overflow-x-auto">
          <table className="w-full border-collapse vp-ser text-left">
            <thead>
              <tr className="text-xs text-[#6b5637] dark:text-[#9e8768] border-b border-[#c6b082] dark:border-[#423423] pb-2">
                <th className="py-2 font-medium">Historical Modi Term</th>
                <th className="py-2 font-medium">Standard / Modern Form</th>
                <th className="py-2 font-medium">Etymology & Origin</th>
                <th className="py-2 font-medium text-right">Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dfd1b3] dark:divide-[#332617]">
              {filteredEntries.map((item, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-[#eae0c6]/50 dark:hover:bg-[#281f14]/50 transition-colors"
                >
                  <td className="py-3 pr-3">
                    <div className="vp-dev text-lg text-[#2e2213] dark:text-[#f4ebd9] font-medium">
                      {item.term}
                    </div>
                    {item.category && (
                      <div className="text-[11px] text-[#7d6849] dark:text-[#9e886b] mt-0.5">
                        {item.category}
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-3">
                    <div className="flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-[#a08a68]" />
                      <span className={`vp-dev text-lg ${
                        item.rule === 'modernised' 
                          ? 'text-[#8a3324] dark:text-[#e06550] font-semibold' 
                          : 'text-[#2e2213] dark:text-[#f4ebd9]'
                      }`}>
                        {item.result}
                      </span>
                    </div>
                    {item.historicalNotes && (
                      <div className="text-xs text-[#614d33] dark:text-[#b09e86] mt-1 max-w-sm">
                        {item.historicalNotes}
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-3 text-xs text-[#523f27] dark:text-[#a8957c]">
                    <span className="font-mono text-[11px] bg-[#e4d4b3] dark:bg-[#2b2116] px-1.5 py-0.5 rounded">
                      {item.etymology || 'Native Marathi'}
                    </span>
                  </td>

                  <td className="py-3 text-right">
                    <span className={`inline-block px-2.5 py-1 rounded text-xs uppercase font-mono tracking-wider ${
                      item.rule === 'preserved'
                        ? 'text-[#48632e] bg-[#e1ecd6] dark:text-[#88b560] dark:bg-[#1a2612]'
                        : 'text-[#8a3324] bg-[#f7e4e1] dark:text-[#e06550] dark:bg-[#331512]'
                    }`}>
                      {item.rule}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEntries.length === 0 && (
            <div className="text-center py-8 text-sm vp-ser text-[#8a7252]">
              No lexicon entries match the search query "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
