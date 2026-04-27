import React from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Search, BookOpen, Target, Zap, Cpu, GraduationCap, AlertTriangle, Server, Shield, Layers, Brain, Fingerprint, Activity, Database, MessageSquare, Users, ChevronDown, X } from 'lucide-react';
import { useState, useRef } from 'react';



const sections = [
  {
    id: 'literature-survey',
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Literature Survey',
    description: 'Current research highlights the pressing need for dynamic personalization in conversational AI, revealing critical limitations across profiling, memory management, and privacy.',
    details: [
      {
        heading: 'Dynamic Profiling',
        text: 'Liu et al. emphasize that static profiles fundamentally fail to represent evolving user needs, making dynamic profiling critical for large-scale personalization. Zhang et al. further demonstrate the necessity of balancing short-term behavioral signals with long-term patterns.',
      },
      {
        heading: 'Concept Drift & Memory',
        text: 'Widmer and Kubat document how undetected behavioral changes degrade model accuracy. Wang et al. show that LLM memory systems must implement "forgetting" strategies to remain effective, as unfiltered accumulation reduces retrieval precision.',
      },
      {
        heading: 'Privacy & Anonymization',
        text: 'Staab et al. highlight LLMs\' dual role as anonymizers and inadvertent de-anonymizers. Ngong et al. document the risks of sensitive disclosures in conversational agents, motivating the need for sensitivity-aware input sanitization.',
      },
    ],
  },
  {
    id: 'research-gap',
    icon: <AlertTriangle className="h-6 w-6" />,
    title: 'Research Gap',
    description: 'Despite advances in conversational AI, a systematic analysis reveals four critical unaddressed gaps in existing LLM personalization systems.',
    details: [
      {
        heading: 'No Cross-Platform Persistence',
        text: 'No existing system provides unified user profiles that persist simultaneously across multiple LLM platforms such as GPT, Claude, and Gemini.',
      },
      {
        heading: 'No Autonomous Drift Detection',
        text: 'Systems cannot distinguish whether a change in user behavior represents a genuine preference shift or transient noise.',
      },
      {
        heading: 'No Credibility-Based Temporal Decay',
        text: 'Existing approaches record behaviors without evaluating their continued validity, allowing outdated preferences to persist indefinitely.',
      },
      {
        heading: 'Insufficient Privacy Mechanisms',
        text: 'Current anonymization approaches apply uniform redaction without sensitivity-aware tiering, causing either over-redaction or the exposure of critical health information.',
      },
    ],
  },
  {
    id: 'problem-statement',
    icon: <Target className="h-6 w-6" />,
    title: 'Problem Statement',
    description: 'Current LLM-based applications face a fundamental tripartite problem: they are stateless, platform-fragmented, and privacy-blind.',
    details: [
      {
        heading: 'Stateless',
        text: 'Forgetting user context between sessions, causing conversations to restart without prior context and user preferences to be lost at context-window overflow.',
      },
      {
        heading: 'Platform-Fragmented',
        text: 'Requiring users to re-establish their identity and preferences across different AI providers, with no continuity between GPT, Claude, Gemini, or other platforms.',
      },
      {
        heading: 'Privacy-Blind',
        text: 'Potentially storing sensitive personal and health information without adequate protection or sensitivity-aware classification.',
      },
      {
        heading: 'The Core Challenge',
        text: 'Creating a modular middleware layer that provides LLMs with consistently accurate, current, credible, and privacy-protected behavioral context across sessions and platforms.',
      },
    ],
  },
  {
    id: 'objectives',
    icon: <Zap className="h-6 w-6" />,
    title: 'Research Objectives',
    description: 'Five targeted objectives designed to address each identified gap through specialized engine implementations.',
    details: [
      {
        heading: 'Prompt Filter Engine',
        text: 'Design a multi-stage Prompt Filter Engine using Small Language Models (SLMs) for tiered Protected Health Information (PHI) classification and Personally Identifiable Information (PII) redaction.',
      },
      {
        heading: 'Behaviour Extraction Engine',
        text: 'Implement a real-time Behaviour Extraction Engine to extract structured signals using the Adaptive Credibility Scoring with Semantic Reinforcement (ACSSR) algorithm.',
      },
      {
        heading: 'Core Behaviour Identification Engine',
        text: 'Develop an offline Core Behaviour Identification Engine to distill high-fidelity profiles via Zero-Shot classification and Adaptive DBSCAN clustering.',
      },
      {
        heading: 'Drift Detection Service',
        text: 'Implement a Drift Detection Service to autonomously monitor five categories of behavioral change over 30-day temporal windows.',
      },
      {
        heading: 'Prompt Enrichment Service',
        text: 'Design a Prompt Enrichment Service powered by the Adaptive Tiered Context Enrichment (ATCE) algorithm for budget-aware, cross-platform context assembly.',
      },
    ],
  },
  {
    id: 'methodology',
    icon: <Cpu className="h-6 w-6" />,
    title: 'Methodology & Architecture',
    description: 'The framework comprises nine containerized microservices communicating via synchronous HTTP REST and asynchronous Redis Streams, following a CQRS pattern with strict database isolation.',
    details: [
      {
        heading: 'Dual Operational Modes',
        text: '"MCP Mode" where external LLMs call the server as a tool, and "Web Client Mode" for direct Product UI integration — supporting both autonomous and interactive workflows.',
      },
      {
        heading: 'CQRS Architecture',
        text: 'Command Query Responsibility Segregation (CQRS) pattern prevents analytical batch writes from contending with real-time operations, ensuring consistent low-latency responses.',
      },
      {
        heading: '9 Containerized Services',
        text: 'MCP Server (3001), Prompt Filter Engine (3003), Prompt Enrichment Service (3004), Behaviour Extraction Engine (8001), Core Behaviour ID Engine (6009), Drift Detection Service (8000), User Manager (8080), Predefined Profile Service (8002), Chat Logger (3005).',
      },
      {
        heading: 'Event-Driven Pipeline',
        text: 'Asynchronous pipeline with Redis Streams for event-driven drift detection and profile update propagation, enabling real-time reactive architecture.',
      },
    ],
  },
  {
    id: 'technologies',
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Technologies Used',
    description: 'A cutting-edge technology stack combining Python microservices, vector databases, and state-of-the-art AI models for production-grade deployment.',
    details: [
      {
        heading: 'Languages & Frameworks',
        text: 'Python (3.10–3.11), FastAPI + Uvicorn for high-performance async APIs, Next.js + Recharts for the Admin UI dashboard.',
      },
      {
        heading: 'Databases & Storage',
        text: 'PostgreSQL + pgvector for vector similarity search, Supabase for managed infrastructure, MongoDB for chat log persistence, Redis for session memory and event streams.',
      },
      {
        heading: 'AI & Machine Learning',
        text: 'Azure OpenAI (GPT-4.1-mini, gpt-4o-mini), Qwen2.5-0.5B-Instruct + LoRA adapters, GLINER for NER, facebook/bart-large-mnli for Zero-Shot classification, sentence-transformers (all-MiniLM-L6-v2), scikit-learn DBSCAN.',
      },
      {
        heading: 'Infrastructure',
        text: 'Docker & Docker Compose for containerized deployment, Celery + APScheduler for distributed task queues and cron-based scheduling.',
      },
    ],
  },
];

const microservicesDirectory = [
  { port: '3001', name: 'MCP Server', desc: 'API Gateway — sole external entry point receiving prompts from LLMs or Product UI.', icon: <Server className="h-5 w-5" /> },
  { port: '3003', name: 'Prompt Filter Engine', desc: 'Anonymization service sanitizing PII and PHI via tiered pipeline.', icon: <Shield className="h-5 w-5" /> },
  { port: '3004', name: 'Prompt Enrichment Service', desc: 'Central orchestrator assembling the final enriched payload.', icon: <Layers className="h-5 w-5" /> },
  { port: '8001', name: 'Behaviour Extraction Engine', desc: 'Real-time behavioral signal extraction, scoring, and storage.', icon: <Brain className="h-5 w-5" /> },
  { port: '6009', name: 'Core Behaviour ID Engine', desc: 'Offline batch processor stabilizing long-term user profiles.', icon: <Fingerprint className="h-5 w-5" /> },
  { port: '8000', name: 'Drift Detection Service', desc: 'Background monitor flagging statistical behavioral changes.', icon: <Activity className="h-5 w-5" /> },
  { port: '8080', name: 'User Manager', desc: 'Session resolution and user profile ID retrieval.', icon: <Users className="h-5 w-5" /> },
  { port: '8002', name: 'Predefined Profile Service', desc: 'Static behavioral profile context, updating on drift events.', icon: <Database className="h-5 w-5" /> },
  { port: '3005', name: 'Chat Logger Backend', desc: 'MongoDB chat log management and cross-platform sync.', icon: <MessageSquare className="h-5 w-5" /> },
];

type SectionData = typeof sections[number];

const ExpandableCard: React.FC<{ section: SectionData; idx: number }> = ({ section, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      layout
      className={`group glass rounded-[2rem] border-white/40 shadow-sm transition-shadow duration-300 overflow-hidden ${
        isExpanded
          ? 'shadow-xl shadow-purple-500/10 ring-1 ring-purple-200/50'
          : 'hover:shadow-lg hover:shadow-purple-500/5'
      }`}
    >
      {/* Card Header — always visible */}
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className={`h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
            isExpanded
              ? 'purple-gradient text-white shadow-lg shadow-purple-600/30'
              : 'bg-purple-50 text-purple-600 border border-purple-100/50 group-hover:purple-gradient group-hover:text-white'
          }`}>
            {section.icon}
          </div>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mt-2">
            {String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
          {section.title}
        </h2>
        <p className="text-base text-slate-500 leading-relaxed font-medium">
          {section.description}
        </p>

        {/* Expand / Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
            isExpanded
              ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              : 'bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-100 hover:border-purple-200'
          }`}
        >
          <span>{isExpanded ? 'Collapse Details' : 'Explore Details'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
      </div>

      {/* Expandable Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-10">
              <div className="pt-6 border-t border-purple-100/40 space-y-5">
                {section.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors border border-transparent hover:border-purple-100/30"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-sm shadow-purple-400/30" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-1.5">
                        {detail.heading}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {detail.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Domain() {
  const [search, setSearch] = useState('');
  const directoryRef = useRef<HTMLDivElement>(null);
  const directoryInView = useInView(directoryRef, { once: true, margin: '-50px' });

  const filteredSections = sections.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase()) ||
    s.details.some(d =>
      d.heading.toLowerCase().includes(search.toLowerCase()) ||
      d.text.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 text-purple-600 font-bold tracking-widest text-[10px] uppercase mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Research Spectrum</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Domain Exploration</h1>
          <p className="text-slate-500 font-medium leading-relaxed text-base">
            Systematic breakdown of the academic literature, core research gaps, problem statement, objectives, methodology, and technology stack for the Centralized Behavior-Aware AI Context Management Framework.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search research details..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all text-sm font-medium shadow-sm"
          />
        </div>
      </header>

      {/* Expandable Research Tiles — 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredSections.map((section, idx) => (
          <ExpandableCard key={section.id} section={section} idx={idx} />
        ))}
      </div>

      {filteredSections.length === 0 && (
        <div className="text-center py-32 glass rounded-[3rem]">
          <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 font-medium">No results found for "{search}"</p>
        </div>
      )}

      {/* Microservices Directory */}
      {!search && (
        <section ref={directoryRef} className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={directoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40">
              <Server className="h-3 w-3 mr-2" />
              Full Architecture
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">All 9 Microservices</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-base">
              Comprehensive directory of every containerized service in the framework, with assigned ports and responsibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {microservicesDirectory.map((service, idx) => (
              <motion.div
                key={service.port}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={directoryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="group flex items-start gap-4 p-6 glass rounded-2xl border-white/40 shadow-sm hover:shadow-lg hover:shadow-purple-500/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100/50 group-hover:purple-gradient group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{service.name}</h4>
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold rounded-md border border-purple-100/50 flex-shrink-0">
                      :{service.port}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
