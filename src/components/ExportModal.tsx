import React, { useState } from 'react';
import { ModiDocument } from '../types/modi';
import { generateTeiXml } from '../utils/paleography';
import { X, Download, Copy, Check, FileText, FileCode } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: ModiDocument;
  initialFormat?: 'docx' | 'xml' | 'txt';
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  document,
  initialFormat = 'docx',
}) => {
  const [format, setFormat] = useState<'docx' | 'xml' | 'txt'>(initialFormat);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const xmlContent = generateTeiXml(
    document.id,
    document.titleMarathi,
    document.period,
    document.rumalOrDaftarRef,
    document.transliteration.fullDevanagari,
    document.transliteration.englishTranslation,
    document.metrics
  );

  const txtContent = `=====================================================
मोडी लिपी अभिलेखागार · MODI LIPI ARCHIVE
=====================================================
ARCHIVE REF: ${document.id} (${document.accessionNumber})
GENRE: ${document.genreLabelMarathi}
PERIOD: ${document.period}
ORIGIN: ${document.archiveLocation} (${document.rumalOrDaftarRef})
SCRIBE: ${document.scribeOrOfficer}
SEAL: ${document.sealDescription}

TRANSLITERATED DEVANAGARI:
${document.transliteration.fullDevanagari}

ENGLISH TRANSLATION:
${document.transliteration.englishTranslation}

METRICS:
- Character Error Rate (CER): ${document.metrics.cer}%
- Word Error Rate (WER): ${document.metrics.wer}%
- Words Segmented: ${document.metrics.wordsSegmented}
- Flagged OOV: ${document.metrics.flaggedOov}
- F1 Dating Index: ${document.f1Score}

SHABDAKOSH NORMALISATION RULES:
${document.shabdakoshEntries.map(e => `* ${e.term} -> ${e.result} (${e.rule})`).join('\n')}
=====================================================`;

  const wordHtmlContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${document.titleMarathi}</title>
  <style>
    body { font-family: 'Georgia', 'Times New Roman', serif; background-color: #f3e8cf; color: #2e2213; padding: 24pt; }
    .header-box { background-color: #2b2016; color: #e9dcc0; padding: 8pt 12pt; font-size: 14pt; }
    .parchment { border: 1pt solid #d8c69a; padding: 18pt; background-color: #fdfaf2; }
    .devanagari-text { font-family: 'Noto Serif Devanagari', 'Mangal', 'Kokila', serif; font-size: 16pt; line-height: 2.0; }
    .meta-table { width: 100%; border-collapse: collapse; margin-top: 14pt; }
    .meta-table td, .meta-table th { border-bottom: 1pt solid #d8c69a; padding: 6pt; }
  </style>
</head>
<body>
  <div class="header-box">मोडी लिपी · Modi Lipi Extraction: ${document.id}</div>
  <div class="parchment">
    <h2>ARCHIVE REF · ${document.id}</h2>
    <p><strong>Genre:</strong> ${document.genreLabelMarathi} | <strong>Period:</strong> ${document.period}</p>
    <hr/>
    <h3>TRANSLITERATED · DEVANAGARI (segmented)</h3>
    <p class="devanagari-text">${document.transliteration.fullDevanagari}</p>
    <hr/>
    <h3>METRICS</h3>
    <p>CER: ${document.metrics.cer}% | WER: ${document.metrics.wer}% | Words: ${document.metrics.wordsSegmented} | OOV: ${document.metrics.flaggedOov}</p>
    <hr/>
    <h3>ENGLISH TRANSLATION</h3>
    <p>${document.transliteration.englishTranslation}</p>
  </div>
</body>
</html>`;

  const handleDownload = () => {
    let content = '';
    let mimeType = '';
    let filename = '';

    if (format === 'docx') {
      content = wordHtmlContent;
      mimeType = 'application/msword';
      filename = `${document.id}_Modi_Extraction.doc`;
    } else if (format === 'xml') {
      content = xmlContent;
      mimeType = 'application/xml';
      filename = `${document.id}_Archival_TEI.xml`;
    } else {
      content = txtContent;
      mimeType = 'text/plain';
      filename = `${document.id}_Transcription.txt`;
    }

    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = filename;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const textToCopy = format === 'xml' ? xmlContent : format === 'txt' ? txtContent : wordHtmlContent;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#f4ebd9] dark:bg-[#1a140d] border border-[#d8c69a] dark:border-[#3d2e1f] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mahogany Header */}
        <div className="bg-[#2b2016] px-4 py-3 flex items-center justify-between text-[#e9dcc0]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c98a3a]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#8a6b3a]"></span>
            <span className="vp-ser text-base font-normal tracking-wide">
              दस्तऐवज निर्यात दालन · Export Folio ({document.id})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#d9cbba] hover:bg-[#3d2e1f] hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-2.5 border-b border-[#d8c69a] dark:border-[#382b1c] flex items-center justify-between">
          <div className="flex items-center gap-2 vp-ser text-xs">
            <button
              onClick={() => setFormat('docx')}
              className={`px-3 py-1.5 rounded cursor-pointer transition-all flex items-center gap-1.5 ${
                format === 'docx'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#d9c38d]" />
              Microsoft Word (.docx)
            </button>
            <button
              onClick={() => setFormat('xml')}
              className={`px-3 py-1.5 rounded cursor-pointer transition-all flex items-center gap-1.5 ${
                format === 'xml'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              TEI-XML Archival
            </button>
            <button
              onClick={() => setFormat('txt')}
              className={`px-3 py-1.5 rounded cursor-pointer transition-all flex items-center gap-1.5 ${
                format === 'txt'
                  ? 'bg-[#2b2016] text-[#e9dcc0] font-medium shadow-sm dark:bg-[#c98a3a] dark:text-[#1a1208]'
                  : 'text-[#614d33] dark:text-[#bcaaa0] hover:bg-[#dfd1b3]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              Plain Text (.txt)
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="text-xs vp-ser text-[#8a3324] dark:text-[#c98a3a] hover:underline flex items-center gap-1 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
          </button>
        </div>

        {/* Preview Container */}
        <div className="p-4 overflow-y-auto flex-1 font-mono text-xs bg-[#fdf8ee] dark:bg-[#15100a] text-[#2b2016] dark:text-[#e0d3be] border-b border-[#d8c69a] dark:border-[#382b1c]">
          <pre className="whitespace-pre-wrap leading-relaxed select-all">
            {format === 'xml' ? xmlContent : format === 'txt' ? txtContent : wordHtmlContent}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#ede1c7] dark:bg-[#231a11] px-4 py-3 flex items-center justify-between">
          <div className="text-xs vp-ser text-[#614d33] dark:text-[#a89070]">
            Export includes Devanagari transliteration, Shabdakosh rules, and CER/WER metrics.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-transparent border border-[#c6b082] dark:border-[#4a3926] text-[#2b2016] dark:text-[#e0d2b8] rounded text-xs vp-ser hover:bg-[#dfcaa0] cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 bg-[#8a3324] text-[#f6ead0] rounded text-xs vp-ser font-medium hover:bg-[#72271a] cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              Download {format.toUpperCase()}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
