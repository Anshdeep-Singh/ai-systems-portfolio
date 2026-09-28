import { useState } from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  Mail,
  Database,
  Network,
  Activity,
  Copy,
  Check,
  Building2,
  Boxes,
  Briefcase,
  Zap,
  MapPin
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('anshdeepsaini@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans antialiased">
      {/* Background Subtle Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-[800px] -left-40 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-8 md:py-16">
        
        {/* Navigation Bar */}
        <header className="flex items-center justify-between border-b border-zinc-800/80 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center font-mono font-bold text-emerald-400 shadow-inner">
              AS
            </div>
            <div>
              <div className="font-semibold text-zinc-100 tracking-tight text-base flex items-center gap-2">
                Anshdeep Singh
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-zinc-400 font-mono">AI Systems & Automation Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:anshdeepsaini@gmail.com"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
              aria-label="Send Email"
              title="Email: anshdeepsaini@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Anshdeep-Singh"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/anshdeeps"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Available for Full-time Roles · Vancouver & Remote
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Building reliable AI workflows, practical automations, and internal tools.
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            I'm an AI systems and automation engineer based in Vancouver. My background spans hands-on machine learning research, hardware reliability testing for aerospace ICs, and warehouse operations at Walmart. I build systems that make AI dependable in daily work—clean data validation, robust agent pipelines, and practical automations that save teams real hours.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">-38% Audit Time</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Cut daily logistics KPI verification from 4 hours to 2.5 hours at Walmart's distribution centre.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">Valid JSON Always</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Strict Pydantic and Zod schema validation so AI agent responses never break downstream apps.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-purple-400 mb-1">Silent Watchdogs</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Scheduled background monitoring scripts that stay quiet unless an issue actually needs attention.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Cpu className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="mailto:anshdeepsaini@gmail.com"
              className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium transition inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://github.com/Anshdeep-Singh"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium transition inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </section>

        {/* Flagship Projects */}
        <section id="projects" className="mb-20 scroll-mt-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Boxes className="w-6 h-6 text-emerald-400" />
                Featured Projects
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Working systems built for real-world reliability and measurable time savings
              </p>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* Project 1: IntelSpider */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">IntelSpider</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE DEMO
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Multi-agent research tool for competitive intelligence and automated company dossiers
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://intelspider.anshdeepsingh.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono transition"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/Anshdeep-Singh/PoW_1"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                    title="Source Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python / FastAPI', 'Multi-Agent Pipeline', 'Pydantic Schemas', 'Docker', 'Web Scraping'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    The Problem
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Sales and strategy teams spend hours checking competitor websites, pricing pages, and public filings by hand. Raw LLMs trying to do this often make up numbers and return messy text.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    How It Works
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Split into focused workers: one runs reconnaissance, another scrapes web pages, another extracts SEC filings, and an aggregator organizes the findings. Pydantic schemas validate each output so data stays consistent.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    The Result
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Turns messy company web data into verified company dossiers, SWOT breakdowns, and sales battlecards in seconds, with caching to keep API costs minimal.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2: CorpGraph 3D */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">CorpGraph 3D</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      LIVE DEMO
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Interactive 3D visualization of corporate ownership networks and parent-subsidiary relationships
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://corpgraph.anshdeepsingh.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/Anshdeep-Singh/corpgraph-3d"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                    title="Source Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Next.js', 'Three.js / WebGL', '3d-force-graph', 'Wikidata SPARQL API', 'jsPDF Vector Export', 'TypeScript'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    The Problem
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Tracing corporate ownership across multiple tiers of subsidiaries and investment stakes usually requires expensive enterprise graph databases or slow server pipelines.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    How It Works
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Directly queries live Wikidata SPARQL endpoints from the browser, builds the graph structure in memory, and renders the 3D network with Three.js—no backend servers or database hosting needed.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    The Result
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Smooth 3D navigation across corporate connections with node search, relationship details, and clean one-click PDF export for research and due diligence reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3: Enterprise Supply Chain Automation */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Enterprise Supply Chain & QA Automation</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      INTERNAL TOOLING
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Walmart Distribution Centre (Surrey, BC) · Warehouse operations automation
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-mono">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    Internal Enterprise Tooling
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Excel VBA Automation', 'WMS Data Pipeline', 'Data Reconciliation', 'Process Automation', 'Reporting'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    The Problem
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Verifying daily cross-departmental KPI summaries and auditing outbound shipment files took over 4 hours every shift, done manually across messy spreadsheets with high risk of human error.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    How It Works
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Built modular VBA automation tools that ingest raw Warehouse Management System transaction records, reconcile discrepancies against shipment logs, and highlight issues automatically.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    The Result
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Cut daily KPI verification by 38% (from 4 hours to 2.5 hours), reduced outbound audit reconciliation from 20 minutes to 5 minutes, and saved hours of manual work every week.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Background & Experience */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Briefcase className="w-6 h-6 text-emerald-400" />
                Background & Experience
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Practical roots in machine learning research, aerospace hardware testing, and data analytics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SCAAI */}
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-base">AI Researcher</h3>
                  <p className="text-xs text-zinc-400 font-mono">Symbiosis Centre for AI (SCAAI)</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">2020 – 2021</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Researched generative models using Conditional Generative Adversarial Networks (CGANs). Built automated dataset preparation pipelines and multi-modal models for sequential image generation in PyTorch.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['CGANs', 'PyTorch', 'Data Pipelines', 'Computer Vision'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] font-mono text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Semi-Conductor Laboratory */}
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-base">Reliability Engineer</h3>
                  <p className="text-xs text-zinc-400 font-mono">Semi-Conductor Laboratory (Govt Dept of Space / ISRO)</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">2020 – 2021</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Tested integrated circuits under extreme electrical and environmental conditions for aerospace applications. Wrote Python tools to analyze telemetry data, determine voltage thresholds, and diagnose failure causes.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['Python', 'Hardware Stress Testing', 'Telemetry Data', 'Failure Analysis'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] font-mono text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tekolutions */}
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-base">Machine Learning Engineer</h3>
                  <p className="text-xs text-zinc-400 font-mono">Tekolutions</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">2021</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Built multimodal evaluation pipelines combining CNN computer vision for facial expression tracking with Librosa audio feature extraction for speech and sentiment evaluation.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['CNNs', 'Audio Extraction', 'TensorFlow', 'Emotion Analysis'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] font-mono text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-base">Education & Credentials</h3>
                  <p className="text-xs text-zinc-400 font-mono">Degrees & Certifications</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Vancouver & India</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-zinc-100">Post-Baccalaureate Diploma in Data Analytics:</strong> Douglas College (Vancouver, BC)
                </li>
                <li>
                  <strong className="text-zinc-100">B.Tech in Electronics & Telecommunication:</strong> Symbiosis Institute of Technology
                </li>
                <li>
                  <strong className="text-zinc-100">Diploma in Business Management:</strong> SIBM Pune
                </li>
                <li>
                  <strong className="text-zinc-100">Junior Data Analyst Professional Certificate:</strong> NPower Canada
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Terminal className="w-6 h-6 text-emerald-400" />
                Skills & Technologies
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Tools and frameworks I use to build reliable software and automated workflows
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Agentic & AI
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 font-mono">
                <li>• Multi-agent workflows</li>
                <li>• Pydantic & Zod schemas</li>
                <li>• Prompt design & evals</li>
                <li>• Cost & token budgeting</li>
                <li>• Automated validation</li>
                <li>• Background watchdogs</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                <Database className="w-4 h-4" />
                Backend & APIs
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 font-mono">
                <li>• Python (FastAPI, Flask)</li>
                <li>• TypeScript / Node.js</li>
                <li>• REST APIs & WebSockets</li>
                <li>• PostgreSQL & SQLite</li>
                <li>• Docker & Linux Bash</li>
                <li>• SPARQL & GraphQL</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-purple-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Frontend & Viz
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 font-mono">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Three.js / WebGL</li>
                <li>• Canvas & SVG graphs</li>
                <li>• Responsive UI/UX</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                Operations & Tooling
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 font-mono">
                <li>• Excel VBA Automation</li>
                <li>• Warehouse logistics (WMS)</li>
                <li>• Data reconciliation</li>
                <li>• n8n workflows</li>
                <li>• Root-cause analysis</li>
                <li>• Process documentation</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Contact / Call To Action */}
        <section id="contact" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's connect.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              I'm open to full-time roles in AI automation, solutions engineering, and backend systems. Based in Greater Vancouver, open to local, hybrid, or remote roles across Canada.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 text-sm font-mono transition inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedEmail ? 'Email Copied' : 'Copy Address'}
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Vancouver, BC
              </span>
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                anshdeepsaini@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/anshdeeps"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" />
                linkedin.com/in/anshdeeps
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} Anshdeep Singh. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
