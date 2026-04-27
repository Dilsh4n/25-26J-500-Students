import { motion } from 'motion/react';
import { PRESENTATIONS } from '../constants';
import { Presentation, Download, Calendar, FileDown, MonitorPlay } from 'lucide-react';

export default function Presentations() {
  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 text-purple-600 font-bold tracking-widest text-[10px] uppercase mb-4">
            <Presentation className="h-4 w-4" />
            <span>Visual Archives</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Slide Decks</h1>
          <p className="text-slate-500 font-medium text-base">
            PowerPoint presentations from each project assessment phase. Click download to save the slides directly to your device.
          </p>
        </div>
        <div className="glass px-6 py-3 rounded-full border-white/40 shadow-sm">
          <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">
            {PRESENTATIONS.length} Presentations
          </span>
        </div>
      </header>

      {/* Presentation cards — clean download-focused layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRESENTATIONS.map((pres, idx) => (
          <motion.div
            key={pres.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group glass rounded-[2.5rem] overflow-hidden border-white/40 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all"
          >
            {/* Visual header */}
            <div className="relative aspect-[16/7] bg-slate-900 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/40 to-black/80"
              />

              {/* Slide number */}
              <div className="absolute top-5 left-6 z-20 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 text-xs font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* File type badge */}
              <div className="absolute top-5 right-6 z-20">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/15 text-[9px] font-bold text-white uppercase tracking-widest">
                  {pres.fileType}
                </div>
              </div>

              {/* Center icon */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <MonitorPlay className="h-12 w-12 text-white/30 group-hover:text-white/60 transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-center gap-1.5 z-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-purple-400' : 'bg-white/20'}`} />
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="p-8">
              <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <Calendar className="h-3 w-3 mr-2" /> {pres.date}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors">
                {pres.title}
              </h3>

              {/* Download button */}
              <a
                href={pres.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 purple-gradient text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.97] transition-all"
              >
                <Download className="h-4 w-4" />
                Download Slides
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download all note */}
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 flex items-start gap-4 border-white/40">
          <div className="p-3 bg-purple-50 text-purple-500 rounded-xl flex-shrink-0">
            <FileDown className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">Download Information</h4>
            <p className="text-sm text-slate-500 font-medium">
              All presentations are in <strong>PowerPoint (.pptx)</strong> format. Clicking "Download Slides" will save the file directly to your device from OneDrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
