import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Layers, Shield, Brain, Fingerprint, Activity, Sparkles, Database, Lock, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const coreServices = [
  {
    icon: <Layers className="h-7 w-7" />,
    abbr: 'PES',
    title: 'Prompt Enrichment Service',
    description: 'The central orchestrator that concurrently fetches behavioral intelligence, session memory, and profile data. Powers the ATCE algorithm — a three-tier memory hierarchy (Active Verbatim Buffer, Chunk Summaries, Ultra-Compact Core Memory) enabling seamless cross-platform context transfer.',
    gradient: 'from-violet-500 to-purple-700',
    shadowColor: 'shadow-violet-500/20',
  },
  {
    icon: <Shield className="h-7 w-7" />,
    abbr: 'PFE',
    title: 'Prompt Filter Engine',
    description: 'Multi-stage privacy-preserving anonymization pipeline using GLINER for PII detection and a Qwen2.5-0.5B SLM with dynamically swapped LoRA adapters for tiered PHI classification. Features culturally-aware name replacement with Sri Lankan dictionaries.',
    gradient: 'from-fuchsia-500 to-pink-700',
    shadowColor: 'shadow-fuchsia-500/20',
  },
  {
    icon: <Brain className="h-7 w-7" />,
    abbr: 'BEE',
    title: 'Behaviour Extraction Engine',
    description: 'Real-time intelligent middleware extracting structured behavioral signals (Intent, Target, Context, Polarity) using the ACSSR algorithm — managing behavior lifecycle through Credibility Initialization, Intent-Differentiated Exponential Decay, and Semantic Reinforcement.',
    gradient: 'from-purple-500 to-indigo-700',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: <Fingerprint className="h-7 w-7" />,
    abbr: 'CBIE',
    title: 'Core Behaviour Identification Engine',
    description: 'Offline batch-processing analytical microservice that distills high-fidelity user profiles via Zero-Shot NLP classification and Adaptive DBSCAN clustering. Synthesizes signals through an AHP-weighted confirmation model to produce definitive "Identity Anchor Prompts".',
    gradient: 'from-indigo-500 to-blue-700',
    shadowColor: 'shadow-indigo-500/20',
  },
  {
    icon: <Activity className="h-7 w-7" />,
    abbr: 'DDS',
    title: 'Drift Detection Service',
    description: 'Autonomous background monitor analyzing 30-day sliding windows to detect five categories of behavioral change: Topic Emergence, Topic Abandonment, Preference Reversals, Intensity Shifts, and Context Expansions via statistical drift detection.',
    gradient: 'from-cyan-500 to-teal-700',
    shadowColor: 'shadow-cyan-500/20',
  },
];

const stats = [
  { value: '9', label: 'Containerized Microservices' },
  { value: '5', label: 'Core AI Engines' },
  { value: '3-Tier', label: 'Memory Hierarchy' },
  { value: '30-Day', label: 'Drift Windows' },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const abstractRef = useRef<HTMLDivElement>(null);
  const [currentService, setCurrentService] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const logoX = useTransform(scrollYProgress, [0, 1], ['-20%', '80%']);

  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });
  const abstractInView = useInView(abstractRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % coreServices.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  return (
    <div ref={containerRef} className="relative space-y-24 overflow-hidden">
      {/* Page-specific Parallax Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Parallax Dotted Pattern */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-x-0 -inset-y-1/2 bg-[radial-gradient(#6d28d9_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.07]"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className="absolute w-2 h-2 rounded-full bg-purple-400/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 lg:py-32 flex flex-col items-center text-center">
        {/* Large Scrolling Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden h-full w-full">
          <motion.h2 
            style={{ x: logoX }}
            className="text-[20vw] font-bold text-purple-900/5 whitespace-nowrap tracking-tighter"
          >
            MEMORA MEMORA MEMORA
          </motion.h2>
          {/* Foreground Blur Layer for Logo */}
          <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <div className="flex items-center justify-center space-x-2 text-purple-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-6">
            <span className="w-8 h-[2px] bg-purple-600"></span>
            <span>Research Initiative 2026</span>
            <span className="w-8 h-[2px] bg-purple-600"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-slate-900">
            Centralized <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">Behavior-Aware</span>
            <br className="hidden md:block" /> AI Context Management
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            A microservices-based intelligent middleware framework inspired by the Model Context Protocol — enabling cross-platform LLM personalization through real-time behavior extraction, statistical drift detection, and adaptive context assembly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to="/domain"
              className="inline-flex items-center px-10 py-5 purple-gradient text-white rounded-2xl font-bold shadow-2xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Explore Domain <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <div className="flex space-x-4 items-center px-6 py-3 glass rounded-2xl border-white/40">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-200 to-purple-100 shadow-sm flex items-center justify-center">
                  <Database className="h-4 w-4 text-purple-600" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-fuchsia-200 to-fuchsia-100 shadow-sm flex items-center justify-center">
                  <Lock className="h-4 w-4 text-fuchsia-600" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-indigo-200 to-indigo-100 shadow-sm flex items-center justify-center">
                  <Globe className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col text-[10px] text-left font-bold tracking-tight leading-none">
                <span className="text-slate-900 uppercase">Academic Repository</span>
                <span className="text-purple-600 uppercase mt-1">Research Group 04</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-6 md:p-8 text-center border-white/40 shadow-sm hover:shadow-lg hover:shadow-purple-500/5 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Abstract Section */}
      <section ref={abstractRef} className="relative z-10 glass rounded-[3.5rem] p-12 md:p-24 shadow-sm border-white/20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-purple-400/10 blur-[80px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={abstractInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-10 relative z-10"
        >
          <div className="h-1 w-12 bg-purple-600 mx-auto rounded-full" />
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Abstract</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic font-medium">
            "Large Language Models are stateless by design, causing conversations to restart without prior context, user preferences to be lost at context-window overflow, and cross-platform personalization to be entirely absent. <strong>Memora</strong> presents a centralized, behavior-aware AI context management framework built on a microservices architecture inspired by the Model Context Protocol. The system acts as an intelligent middleware layer addressing these limitations through real-time behavior extraction, statistical drift detection, offline profile consolidation, and adaptive context assembly — leveraging a multi-stage privacy-preserving filter, the <strong>ACSSR</strong> algorithm, and the <strong>ATCE</strong> three-tier memory hierarchy."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest border-white/60">Model Context Protocol</span>
            <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest border-white/60">ACSSR Algorithm</span>
            <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest border-white/60">ATCE Memory</span>
            <span className="px-4 py-2 glass rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest border-white/60">Privacy-Preserving</span>
          </div>
        </motion.div>
      </section>

      {/* Core Microservices Section */}
      <section ref={servicesRef} className="relative z-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40">
            <Sparkles className="h-3 w-3 mr-2" />
            System Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Core Microservices</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Five specialized AI engines working in concert — communicating via synchronous HTTP REST and asynchronous Redis Streams with strict CQRS database isolation.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          {/* Card Stage */}
          <div className="relative overflow-hidden rounded-[3rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className={`relative glass p-10 md:p-16 rounded-[3rem] shadow-sm border-white/40 overflow-hidden min-h-[320px] flex flex-col justify-between`}
              >
                {/* Gradient background accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${coreServices[currentService].gradient} opacity-[0.04] rounded-[3rem]`} />
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${coreServices[currentService].gradient} opacity-10 blur-[80px] rounded-full`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${coreServices[currentService].gradient} flex items-center justify-center text-white shadow-xl ${coreServices[currentService].shadowColor}`}>
                      {coreServices[currentService].icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                        {currentService + 1} / {coreServices.length}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                        {coreServices[currentService].abbr}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                    {coreServices[currentService].title}
                  </h3>
                  <p className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl">
                    {coreServices[currentService].description}
                  </p>
                </div>

                {/* Pause indicator */}
                {isCarouselHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-6 right-8 flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-white/80 shadow-sm"
                  >
                    <div className="flex gap-[3px]">
                      <span className="w-[3px] h-3 bg-purple-500 rounded-full" />
                      <span className="w-[3px] h-3 bg-purple-500 rounded-full" />
                    </div>
                    <span className="text-[9px] font-bold text-purple-600 uppercase tracking-widest">Paused</span>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentService(prev => (prev - 1 + coreServices.length) % coreServices.length)}
              className="w-12 h-12 glass rounded-2xl border-white/40 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-500/10 transition-all active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {coreServices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentService(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentService
                      ? `w-8 h-2.5 bg-gradient-to-r ${coreServices[currentService].gradient}`
                      : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentService(prev => (prev + 1) % coreServices.length)}
              className="w-12 h-12 glass rounded-2xl border-white/40 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-500/10 transition-all active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Additional microservices note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full border-white/40 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-purple-100 to-purple-200 shadow-sm" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500">
              + 4 more supporting services
            </span>
            <Link to="/domain" className="text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors underline decoration-purple-300 underline-offset-2">
              View all 9 →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Research Gap CTA */}
      <section className="relative z-10 pb-20">
        <div className="purple-gradient rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/20">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 3 }}
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/10 blur-[100px] rounded-full"
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Bridging Four Critical Research Gaps
            </h2>
            <p className="text-lg text-purple-100/80 leading-relaxed font-medium">
              From the absence of cross-platform behavioral persistence to insufficient privacy-preserving mechanisms — our framework addresses the fundamental tripartite problem of LLMs being <em>stateless</em>, <em>platform-fragmented</em>, and <em>privacy-blind</em>.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">Cross-Platform Persistence</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">Autonomous Drift Detection</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">Credibility-Based Decay</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">Privacy-Preserving</span>
            </div>
            <Link
              to="/domain"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-700 rounded-2xl font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all mt-4"
            >
              Explore Full Research <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
