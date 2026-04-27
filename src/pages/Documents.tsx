import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCUMENT_GROUPS } from '../constants';
import {
  FileText, CheckCircle2, ExternalLink, Download, ChevronDown,
  ScrollText, ClipboardCheck, Award, Eye,
} from 'lucide-react';
import { useState } from 'react';

// Map icon names from constants to actual components
const iconMap: Record<string, React.ReactNode> = {
  'scroll':          <ScrollText className="h-6 w-6" />,
  'file-text':       <FileText className="h-6 w-6" />,
  'clipboard-check': <ClipboardCheck className="h-6 w-6" />,
  'award':           <Award className="h-6 w-6" />,
};

export default function Documents() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(DOCUMENT_GROUPS[0]?.id ?? null);

  const toggleGroup = (id: string) => {
    setExpandedGroup(prev => (prev === id ? null : id));
  };

  const totalFiles = DOCUMENT_GROUPS.reduce((sum, g) => sum + g.files.length, 0);

  return (
    <div className="space-y-16 pb-12">
      <header className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40">
          Document Library
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Academic Documents</h1>
        <p className="text-slate-500 font-medium text-base">
          Official research documentation — project charter, proposals, checklists, and final research papers. All documents are available as PDFs.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest border-white/60">
            {DOCUMENT_GROUPS.length} Categories
          </span>
          <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border-white/60">
            {totalFiles} Files
          </span>
        </div>
      </header>

      {/* Accordion-style document groups */}
      <div className="max-w-4xl mx-auto space-y-6">
        {DOCUMENT_GROUPS.map((group, groupIdx) => {
          const isExpanded = expandedGroup === group.id;

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              className={`glass rounded-[2rem] border-white/40 overflow-hidden transition-shadow duration-300 ${
                isExpanded
                  ? 'shadow-xl shadow-purple-500/10 ring-1 ring-purple-200/50'
                  : 'shadow-sm hover:shadow-lg hover:shadow-purple-500/5'
              }`}
            >
              {/* Group Header — clickable */}
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center gap-6 p-8 md:p-10 text-left cursor-pointer transition-colors hover:bg-white/30"
              >
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                  isExpanded
                    ? 'purple-gradient text-white shadow-lg shadow-purple-600/30'
                    : 'bg-purple-50 text-purple-600 border border-purple-100/50'
                }`}>
                  {iconMap[group.icon] || <FileText className="h-6 w-6" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">{group.category}</h2>
                    <span className="px-2.5 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-lg border border-purple-100/50">
                      {group.files.length} {group.files.length === 1 ? 'file' : 'files'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">{group.description}</p>
                </div>

                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </motion.div>
              </button>

              {/* Expanded file list */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-8 md:pb-10 space-y-4">
                      <div className="border-t border-purple-100/40 pt-6" />

                      {group.files.map((file, fileIdx) => (
                        <motion.div
                          key={file.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: fileIdx * 0.06, duration: 0.3 }}
                          className="group/file bg-white/60 hover:bg-white/90 rounded-2xl p-6 border border-white/50 hover:border-purple-100/50 transition-all hover:shadow-md"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            {/* File info */}
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                              <div className="p-3 bg-red-50 text-red-500 rounded-xl flex-shrink-0">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-base font-bold text-slate-800 mb-1">{file.title}</h4>
                                {file.description && (
                                  <p className="text-sm text-slate-500 font-medium">{file.description}</p>
                                )}
                                <span className="inline-block mt-2 px-2 py-0.5 bg-red-50 text-red-500 text-[9px] font-bold rounded uppercase tracking-widest">
                                  PDF
                                </span>
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex items-center gap-3 flex-shrink-0 sm:ml-auto">
                              <a
                                href={file.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 purple-gradient text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/20 hover:scale-[1.03] active:scale-[0.97] transition-all"
                              >
                                <Eye className="h-3.5 w-3.5" />
                                Open PDF
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Help note */}
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 flex items-start gap-4 border-white/40">
          <div className="p-3 bg-purple-50 text-purple-500 rounded-xl flex-shrink-0">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">Document Access</h4>
            <p className="text-sm text-slate-500 font-medium">
              Click <strong>"Open PDF"</strong> to view or download the document directly in your browser. All documents are hosted securely on OneDrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
