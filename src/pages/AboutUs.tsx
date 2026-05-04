import React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Mail, Star, ExternalLink, BookOpen } from 'lucide-react';
import vaasImg from '../resources/VAAS.jpg';
import dilshanImg from '../resources/DILSHAN.jpg';
import supeshalaImg from '../resources/SUPESHALA.jpg';
import chathuraImg from '../resources/CHATHURA.png';
import supervisorImg from '../resources/supervisor.jpeg';
import coSupervisorImg from '../resources/co-supervisor.jpeg';

interface Researcher {
  id: string;
  name: string;
  indexNo: string;
  email: string;
  role: string;
  isLeader: boolean;
  image: string;
  gradient: string;
}

interface Supervisor {
  id: string;
  name: string;
  role: string;
  email: string;
  scholarUrl: string;
  gradient: string;
  image: string;
}

const supervisors: Supervisor[] = [
  {
    id: 'supervisor-1',
    name: 'Sadeepa Kuruppu',
    role: 'Supervisor',
    email: 'dushanthi.k@sliit.lk',
    scholarUrl: 'https://scholar.google.com/citations?user=zKa8Wx0AAAAJ&hl=en',
    gradient: 'from-emerald-500 to-teal-700',
    image: supervisorImg,
  },
  {
    id: 'supervisor-2',
    name: 'Prof. Nuwan Kodagoda',
    role: 'Co-Supervisor',
    email: 'nuwan.k@sliit.lk',
    scholarUrl: 'https://scholar.google.com/citations?user=kemkqNgAAAAJ&hl=en',
    gradient: 'from-cyan-500 to-blue-700',
    image: coSupervisorImg,
  },
];

const researchers: Researcher[] = [
  {
    id: 'member-1',
    name: 'De Vaas Gunawardana A. P. C. T',
    indexNo: 'IT22334138',
    email: 'IT22334138@my.sliit.lk',
    role: 'Team Leader',
    isLeader: true,
    image: vaasImg,
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    id: 'member-2',
    name: 'Gamage D. P.',
    indexNo: 'IT22345714',
    email: 'IT22345714@my.sliit.lk',
    role: 'Researcher',
    isLeader: false,
    image: dilshanImg,
    gradient: 'from-fuchsia-500 to-pink-700',
  },
  {
    id: 'member-3',
    name: 'Gunasekara R. P. U. S.',
    indexNo: 'IT22335128',
    email: 'IT22335128@my.sliit.lk',
    role: 'Researcher',
    isLeader: false,
    image: supeshalaImg,
    gradient: 'from-purple-500 to-indigo-700',
  },
  {
    id: 'member-4',
    name: 'Dayananda G. A. C. T',
    indexNo: 'IT22314338',
    email: 'IT22314338@my.sliit.lk',
    role: 'Researcher',
    isLeader: false,
    image: chathuraImg,
    gradient: 'from-indigo-500 to-blue-700',
  },
];

interface SupervisorCardProps {
  supervisor: Supervisor;
  idx: number;
}

function SupervisorCard({ supervisor, idx }: SupervisorCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / rect.width) * 8);
    rotateX.set(-((e.clientY - cy) / rect.height) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.12, duration: 0.55, ease: 'easeOut' }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center text-center p-10 glass rounded-[3rem] shadow-sm border-white/40 relative overflow-hidden group cursor-default"
    >
      {/* Top gradient strip */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${supervisor.gradient} opacity-80`} />
      <div className={`absolute top-0 left-0 w-full h-28 bg-gradient-to-b ${supervisor.gradient} opacity-[0.06]`} />

      {/* Glowing blob on hover */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${supervisor.gradient} opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-opacity duration-700`} />

      {/* Photo */}
      <div className="relative mb-7 mt-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${supervisor.gradient} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
        <img
          src={supervisor.image}
          alt={supervisor.name}
          className="relative w-36 h-36 object-cover rounded-[2rem] border-4 border-white shadow-2xl"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight leading-snug">{supervisor.name}</h3>

      <div className={`mt-1 mb-5 px-4 py-1.5 rounded-full bg-gradient-to-r ${supervisor.gradient} shadow-sm`}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">
          {supervisor.role}
        </span>
      </div>

      <a
        href={`mailto:${supervisor.email}`}
        className="flex items-center text-slate-500 text-xs font-medium hover:text-purple-600 transition-colors bg-slate-50 hover:bg-purple-50 px-4 py-2.5 rounded-full border border-slate-100 hover:border-purple-200 group/mail mb-3"
      >
        <Mail className="h-3.5 w-3.5 mr-2 group-hover/mail:text-purple-600 transition-colors" />
        {supervisor.email}
      </a>

      <a
        href={supervisor.scholarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-slate-400 text-xs font-medium hover:text-emerald-600 transition-colors bg-slate-50 hover:bg-emerald-50 px-4 py-2.5 rounded-full border border-slate-100 hover:border-emerald-200 group/scholar"
      >
        <BookOpen className="h-3.5 w-3.5 mr-2 group-hover/scholar:text-emerald-600 transition-colors" />
        Google Scholar
        <ExternalLink className="h-3 w-3 ml-1.5 opacity-60" />
      </a>
    </motion.div>
  );
}

interface ResearcherCardProps {
  member: Researcher;
  idx: number;
}

function ResearcherCard({ member, idx }: ResearcherCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / rect.width) * 10);
    rotateX.set(-((e.clientY - cy) / rect.height) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.12, duration: 0.55, ease: 'easeOut' }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center text-center p-10 glass rounded-[3rem] shadow-sm border-white/40 relative overflow-hidden group cursor-default"
    >
      {/* Top gradient strip */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${member.gradient} opacity-80`} />
      <div className={`absolute top-0 left-0 w-full h-28 bg-gradient-to-b ${member.gradient} opacity-[0.06]`} />

      {/* Glowing blob on hover */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-opacity duration-700`} />

      {/* Leader crown badge */}
      {member.isLeader && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: idx * 0.12 + 0.3, type: 'spring', stiffness: 300 }}
          className={`absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${member.gradient} rounded-full shadow-lg`}
        >
          <Star className="h-3 w-3 text-white fill-white" />
          <span className="text-[9px] font-bold text-white uppercase tracking-widest">Team Leader</span>
        </motion.div>
      )}

      {/* Photo */}
      <div className="relative mb-7 mt-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-40 h-40 object-cover rounded-[2rem] border-4 border-white shadow-2xl"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight leading-snug">{member.name}</h3>

      <div className="mt-1 mb-2 px-4 py-1.5 rounded-full bg-white/70 border border-white shadow-sm">
        <span className={`text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
          {member.role}
        </span>
      </div>

      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">
        {member.indexNo}
      </span>

      <a
        href={`mailto:${member.email}`}
        className="flex items-center text-slate-500 text-xs font-medium hover:text-purple-600 transition-colors bg-slate-50 hover:bg-purple-50 px-4 py-2.5 rounded-full border border-slate-100 hover:border-purple-200 group/mail"
      >
        <Mail className="h-3.5 w-3.5 mr-2 group-hover/mail:text-purple-600 transition-colors" />
        {member.email}
      </a>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <div className="space-y-16 pb-12">
      <header className="text-center max-w-2xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40"
        >
          The Research Group
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-slate-900 tracking-tight"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 font-medium"
        >
          A dedicated team of undergraduate scholars focused on bridging the complexity gap between human behavior and AI systems.
        </motion.p>
      </header>

      {/* Supervisors Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-4 max-w-4xl mx-auto"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Academic Supervision</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {supervisors.map((supervisor, idx) => (
            <SupervisorCard key={supervisor.id} supervisor={supervisor} idx={idx} />
          ))}
        </div>
      </section>

      {/* Researchers Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center gap-4 max-w-4xl mx-auto"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Research Team</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {researchers.map((member, idx) => (
            <ResearcherCard key={member.id} member={member} idx={idx} />
          ))}
        </div>
      </section>

      <section className="purple-gradient text-white rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-900/20">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Philosophy</h2>
          <p className="text-lg text-purple-100/80 leading-relaxed font-medium italic">
            "Artificial Intelligence should not just compute, it should understand. By modeling the subtle nuances of user behavior, we build bridges between human intent and machine logic."
          </p>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
}
