import { motion } from 'motion/react';
import { PRESENTATIONS } from '../constants';
import { Download, Calendar, Presentation, FileDown, CheckCircle } from 'lucide-react';

const phaseColors: Record<number, { gradient: string; dot: string }> = {
  0: { gradient: 'from-violet-500 to-purple-700', dot: 'bg-violet-500' },
  1: { gradient: 'from-purple-500 to-indigo-700', dot: 'bg-purple-500' },
  2: { gradient: 'from-indigo-500 to-blue-700', dot: 'bg-indigo-500' },
  3: { gradient: 'from-fuchsia-500 to-pink-700', dot: 'bg-fuchsia-500' },
};

export default function Presentations() {
  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 text-purple-600 font-bold tracking-widest text-[10px] uppercase mb-4">
            <Presentation className="h-4 w-4" />
            <span>Visual Archives</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">Slide Decks</h1>
          <p className="text-slate-500 font-medium text-base">
            PowerPoint presentations from each project assessment phase — click any card to download directly.
          </p>
        </div>
        <div className="glass px-6 py-3 rounded-full border-white/40 shadow-sm flex-shrink-0">
          <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">
            {PRESENTATIONS.length} Presentations
          </span>
        </div>
      </header>

      {/* Presentation cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRESENTATIONS.map((pres, idx) => {
          const colors = phaseColors[idx] ?? phaseColors[0];
          const isAvailable = pres.downloadUrl !== '#';

          return (
            <motion.div
              key={pres.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="group glass rounded-[2.5rem] border-white/40 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${colors.gradient}`} />

              <div className="p-8 md:p-10 flex flex-col gap-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Phase icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    <Presentation className="h-6 w-6" />
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    <span className="px-3 py-1 glass rounded-full text-[9px] font-bold text-purple-600 uppercase tracking-widest border-white/60">
                      {pres.fileType}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                      isAvailable
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                    }`}>
                      {isAvailable ? 'Available' : 'Upcoming'}
                    </span>
                  </div>
                </div>

                {/* Title & date */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-purple-700 transition-colors">
                    {pres.title}
                  </h3>
                  <div className="flex items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar className="h-3 w-3 mr-1.5" />
                    {pres.date}
                  </div>
                </div>

                {/* Phase number indicator */}
                <div className="flex items-center gap-3">
                  {PRESENTATIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx
                          ? `flex-1 bg-gradient-to-r ${colors.gradient}`
                          : 'w-4 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Download button */}
                {isAvailable ? (
                  <a
                    href={pres.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r ${colors.gradient} text-white text-sm font-bold rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all`}
                  >
                    <Download className="h-4 w-4" />
                    Download Slides
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-50 text-slate-400 text-sm font-bold rounded-2xl border border-slate-100 cursor-not-allowed">
                    <Calendar className="h-4 w-4" />
                    Available on {pres.date}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Info note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="glass rounded-2xl p-6 flex items-start gap-4 border-white/40"
      >
        <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl flex-shrink-0">
          <FileDown className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-1">Download Information</h4>
          <p className="text-sm text-slate-500 font-medium">
            All presentations are in <strong>PowerPoint (.pptx)</strong> format hosted on OneDrive. Upcoming phase slides will be published after each assessment.
          </p>
        </div>
        <div className="ml-auto flex-shrink-0 flex items-center gap-1.5 text-emerald-600">
          <CheckCircle className="h-4 w-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{PRESENTATIONS.filter(p => p.downloadUrl !== '#').length} Ready</span>
        </div>
      </motion.div>
    </div>
  );
}
