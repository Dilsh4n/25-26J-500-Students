import { motion } from 'motion/react';
import { MILESTONES } from '../constants';
import { ChevronDown, Calendar, Award } from 'lucide-react';
import { useState } from 'react';

export default function Milestones() {
  const [selectedId, setSelectedId] = useState(MILESTONES[0].id);
  const selectedMilestone = MILESTONES.find(m => m.id === selectedId)!;

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold uppercase tracking-widest">
          Project Roadmap
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Project Milestones</h1>
        <p className="text-slate-500 font-medium">Tracking our chronological progress through major research assessments.</p>
      </header>

      {/* Custom Dropdown */}
      <div className="relative space-y-3">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-6">Select Assessment Phase</label>
        <div className="relative">
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-100 rounded-[1.5rem] px-8 py-5 pr-14 focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all font-bold text-base text-slate-800 cursor-pointer shadow-sm"
          >
            {MILESTONES.map((m) => (
              <option key={m.id} value={m.id}>
                {m.title}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400 pointer-events-none" />
        </div>
      </div>

      {/* Milestone Card */}
      <motion.div
        key={selectedId}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-[3rem] p-10 md:p-14 shadow-xl border-white/40 overflow-hidden relative"
      >
        <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/10 blur-[40px] rounded-full"
        />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 border-b border-purple-100/50 pb-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{selectedMilestone.title}</h2>
            <div className="flex items-center text-slate-500 font-bold text-xs uppercase tracking-wider">
              <Calendar className="h-4 w-4 mr-2 text-purple-400" /> {selectedMilestone.date}
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/50 border border-white/60 px-6 py-3 rounded-2xl font-bold text-slate-800 shadow-sm">
            <Award className="h-5 w-5 text-purple-500" />
            <span className="text-lg">Marks: <span className="text-purple-600">{selectedMilestone.marks}</span></span>
          </div>
        </div>

        <div className="relative z-10 prose prose-slate">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-purple-500 font-bold mb-6">Phase Objective</h4>
          <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
            "{selectedMilestone.description}"
          </p>
        </div>
      </motion.div>

      {/* Timeline View (Mini) */}
      <div className="flex justify-center flex-wrap items-center px-4 py-4 gap-3">
        {MILESTONES.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => setSelectedId(m.id)}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
              selectedId === m.id 
                ? 'purple-gradient text-white shadow-lg shadow-purple-600/20' 
                : 'bg-white border border-slate-100 text-slate-400 hover:border-purple-200'
            }`}
          >
            Step 0{idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
