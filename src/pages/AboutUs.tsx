import { motion } from 'motion/react';
import { TEAM } from '../constants';
import { Mail, GraduationCap, Github } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="space-y-16 pb-12">
      <header className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40">
          The Research Group
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Researchers</h1>
        <p className="text-slate-500 font-medium">
          A dedicated team of undergraduate scholars focused on bridging the complexity gap between human behavior and AI systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {TEAM.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center p-12 glass rounded-[3.5rem] shadow-sm border-white/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-24 purple-gradient opacity-10" />
            
            <div className="relative mb-8 mt-4">
              <div className="absolute inset-0 bg-purple-600 rounded-[3rem] blur-xl opacity-20 animate-pulse" />
              <img
                src={member.imageUrl}
                alt={member.name}
                className="relative w-44 h-44 object-cover rounded-[2.5rem] border-4 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
            <p className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
            
            <a 
              href={`mailto:${member.email}`}
              className="flex items-center text-slate-500 text-sm font-medium hover:text-purple-600 transition-colors mb-10 bg-slate-50 px-4 py-2 rounded-full border border-slate-100"
            >
              <Mail className="h-3.5 w-3.5 mr-2" /> {member.email}
            </a>

            <div className="w-full space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <span className="h-[1px] w-8 bg-slate-200"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Academic Merits</span>
                <span className="h-[1px] w-8 bg-slate-200"></span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {member.achievements.map((ach, i) => (
                  <span key={i} className="px-3 py-1.5 glass text-slate-600 text-[10px] font-bold rounded-lg border-white/60">
                    {ach}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="purple-gradient text-white rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-900/20">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Philosophy</h2>
          <p className="text-lg text-purple-100/80 leading-relaxed font-medium italic">
            "Artificial Intelligence should not just compute, it should understand. By modeling the subtle nuances of user behavior, we build bridges between human intent and machine logic."
          </p>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
}
