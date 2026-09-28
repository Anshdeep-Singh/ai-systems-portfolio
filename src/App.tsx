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
  ShieldCheck,
  Zap,
  Phone,
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

          <div className="flex items-center gap-3">
            <button
              onClick={copyEmail}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? 'Copied!' : 'anshdeepsaini@gmail.com'}
            </button>
            <a
              href="https://github.com/Anshdeep-Singh"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sanshdeep"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
              aria-label="LinkedIn Profile"
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
            Engineering deterministic AI pipelines & high-impact workflow automation.
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            I specialize in building reliable multi-agent systems, internal automation tools, and data infrastructure. 
            Rooted in classical ML research (GANs at SCAAI), mission-critical hardware reliability testing (Semi-Conductor Laboratory / ISRO-affiliated), 
            and enterprise supply chain optimization (Walmart DC), I tame non-deterministic LLMs with rigorous software guardrails.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">-38% Verification Time</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Collapsed daily enterprise logistics KPI verification from 4 hrs to 2.5 hrs via custom automated pipelines.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">0% Schema Drift</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Enforcing strict Pydantic/Zod deterministic contracts over non-deterministic multi-agent LLM outputs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-purple-400 mb-1">Zero-Token Watchdogs</div>
              <p className="text-xs text-zinc-400 leading-snug">
                Engineered script-driven telemetry watchdogs running on schedule with 100% silence on unchanged state.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#systems"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Cpu className="w-4 h-4" />
              View Featured Systems
            </a>
            <a
              href="mailto:anshdeepsaini@gmail.com"
              className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium transition inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Directly
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

        {/* Flagship Systems (Proof of Work) */}
        <section id="systems" className="mb-20 scroll-mt-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Boxes className="w-6 h-6 text-emerald-400" />
                Featured Systems & Architecture
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Engineered for reliability, latency optimization, and measurable operational impact
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
                      LIVE PRODUCTION
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Multi-Agent B2B Competitive Intelligence & Strategic Battlecard Engine
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
                {['Python / FastAPI', 'Multi-Agent Orchestration', 'Pydantic Schemas', 'Docker', 'Web Reconnaissance'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Deep Dive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    The Bottleneck
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    B2B sales and strategy teams waste hours manually piecing together competitor website changes, pricing updates, and SEC filings. LLMs asked to synthesize this naively hallucinate metrics and lack structured formatting.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    System Architecture
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Decomposed pipeline into specialized agent nodes (Domain Recon, Scraper, SEC Parser, Synthesis Engine) coupled with deterministic Pydantic schema validation to ensure zero malformed JSON reaches downstream views.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    The Output
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Generates verified board-level dossiers, SWOT analyses, and actionable sales objection-handling battlecards in seconds, backed by caching to reduce token spend.
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
                      LIVE PRODUCTION
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Client-Side 3D Corporate Ownership Network & Telemetry Visualizer
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
                {['Next.js 16', 'Three.js / WebGL', '3d-force-graph', 'Wikidata SPARQL API', 'jsPDF Vector Export', 'TypeScript'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Deep Dive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    The Bottleneck
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Analyzing multi-tier corporate hierarchies, subsidiaries, and cross-holdings usually requires heavy enterprise graph databases (Neo4j) or sluggish backend microservices that add hosting bloat.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    System Architecture
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Direct client-side federated querying against live Wikidata SPARQL endpoints, dynamically constructing cyclic entity graphs rendered in real-time WebGL space with zero backend compute overhead.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    The Output
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Interactive 3D graph exploration with automated nodal centrality calculation and one-click formatted vector PDF generation for equity research and compliance teams.
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
                      OPERATIONAL IMPACT
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">
                    Walmart Distribution Centre (Surrey, BC) · High-Throughput Logistics Automation
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
                {['Excel VBA Automation', 'WMS Data Pipeline', 'ETL Verification', 'Audit Stream Compression', 'Incident Escalation'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-mono border border-zinc-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Deep Dive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Operational Friction
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Manual verification of daily cross-departmental KPI summaries and outbound shipment audit files in high-volume warehouse environments consumed 4+ hours every shift with substantial human error risk.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    Automation Solution
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Engineered modular macro automation pipelines that ingested raw WMS transactional records, standardized data structures, and cross-reconciled discrepancies automatically.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    Measurable Result
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Cut daily KPI verification time by 38% (4.0 hrs → 2.5 hrs), reduced outbound audit reconciliation from 20 min to 5 min, and compressed daily reporting prep from 15 min to 5 min.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Foundational Pedigree / Why Not a Vibe Coder */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                Technical Foundations & Reliability Moat
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Classical machine learning and hardware reliability experience before the LLM era
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SCAAI */}
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-base">AI Research Scientist</h3>
                  <p className="text-xs text-zinc-400 font-mono">Symbiosis Centre for AI (SCAAI)</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">2020 – 2021</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Led research on generative pipelines using Conditional Generative Adversarial Networks (CGANs). Engineered automated dataset curation pipelines and multi-modal sequential generation models, understanding latent space dynamics long before modern LLM prompt engineering.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['CGANs', 'PyTorch', 'Data Pipelines', 'GPU Optimization'].map((t) => (
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
                Subjected integrated chips to extreme environmental and electrical stress testing for aerospace telemetry. Developed Python analytical tools to calculate theoretical voltage spike thresholds and interpret failure-point root causes.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['Telemetry Analysis', 'Python', 'Stress Testing', 'Root-Cause Analysis'].map((t) => (
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
                Engineered multi-modal interview evaluation pipelines combining CNN computer vision for facial expression analysis with Librosa audio feature extraction and sentiment classification models.
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
                  <p className="text-xs text-zinc-400 font-mono">Formal Analytics & Engineering Rigor</p>
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
                  <strong className="text-zinc-100">Junior Data Analyst Professional Certificate:</strong> Npower Canada
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Terminal className="w-6 h-6 text-emerald-400" />
                Technical Capabilities Matrix
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Full-stack autonomy: from high-level orchestration to bare-metal data flows
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
                <li>• Multi-Agent Systems</li>
                <li>• Pydantic Strict Schemas</li>
                <li>• Prompt Engineering</li>
                <li>• Evaluation Loops</li>
                <li>• Token & Cost Budgeting</li>
                <li>• Zero-Token Watchdogs</li>
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
                <li>• REST & WebSockets</li>
                <li>• SPARQL & GraphQL</li>
                <li>• Docker & Linux Bash</li>
                <li>• SQLite / PostgreSQL</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-purple-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Frontend & Viz
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 font-mono">
                <li>• React & Next.js 16</li>
                <li>• Three.js / WebGL</li>
                <li>• Tailwind CSS</li>
                <li>• jsPDF & Canvas API</li>
                <li>• Force-Directed Graphs</li>
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
                <li>• WMS Systems (Walmart)</li>
                <li>• Incident Management</li>
                <li>• Root-Cause Analysis</li>
                <li>• n8n Orchestration</li>
                <li>• SOP Standardization</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Contact / Call To Action */}
        <section id="contact" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's build high-leverage systems together.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              I am actively interviewing for full-time <strong>AI Automation Engineer</strong>, <strong>Solutions Architect</strong>, and <strong>Forward-Deployed Engineering</strong> positions in Greater Vancouver and remote across Canada.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                anshdeepsaini@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 text-sm font-mono transition inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Vancouver, BC
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                +1 (604) 518-0694
              </span>
              <a
                href="https://linkedin.com/in/sanshdeep"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" />
                linkedin.com/in/sanshdeep
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} Anshdeep Singh. Built for speed, clarity, and zero fluff.</p>
        </footer>

      </div>
    </div>
  );
}
