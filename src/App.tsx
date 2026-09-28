import { useState } from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  Mail,
  Database,
  Copy,
  Check,
  Building2,
  Sliders,
  ChevronRight,
  Zap,
  MapPin,
  Network,
  Workflow
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

interface Project {
  id: string;
  category: 'ai' | 'viz' | 'enterprise';
  code: string;
  title: string;
  badge: string;
  subtitle: string;
  demoUrl?: string;
  githubUrl?: string;
  isInternal?: boolean;
  tags: string[];
  problem: string;
  howItWorks: string;
  result: string;
  metrics: { label: string; value: string };
}

const projects: Project[] = [
  {
    id: 'intelspider',
    category: 'ai',
    code: 'SYS-01',
    title: 'IntelSpider 2.0',
    badge: 'LIVE DEPLOYMENT',
    subtitle: 'Deterministic pre-meeting intelligence engine & cryptographic evidence audit ledger',
    demoUrl: 'https://intelspider.anshdeepsingh.com',
    githubUrl: 'https://github.com/Anshdeep-Singh/intelspider',
    tags: ['Next.js 16 (App Router)', 'TypeScript', 'DNS-over-HTTPS (DoH)', 'HTTP Script Fingerprinting', 'Public ATS Harvesters', 'SHA-256 Ledger'],
    problem: 'Sales & solutions engineers spend 45-60 minutes before calls manually searching SPF/MX records, tag managers, and job openings. Generic AI tools invent plausible-looking company profiles with unverified claims.',
    howItWorks: 'Directly harvests raw infrastructure truth using parallel DNS-over-HTTPS (Google DoH for SPF, DMARC, MX), script tag detection (Segment, Datadog, Next.js), and public unauthenticated ATS APIs (Greenhouse/Lever). Every discovery hook is cryptographically hashed into an audit ledger.',
    result: 'Generates verified pre-call technical battlecards in ~12 seconds. Every insight links directly to verifiable raw evidence, eliminating hallucinations and saving 80% of prep time.',
    metrics: { label: 'RESEARCH TIME', value: '12s (from 45m)' }
  },
  {
    id: 'corpgraph',
    category: 'viz',
    code: 'SYS-02',
    title: 'CorpGraph 3D',
    badge: 'LIVE DEPLOYMENT',
    subtitle: 'Zero-backend interactive 3D corporate ownership & investor network explorer',
    demoUrl: 'https://corpgraph.anshdeepsingh.com',
    githubUrl: 'https://github.com/Anshdeep-Singh/corpgraph-3d',
    tags: ['Three.js / WebGL', '3d-force-graph', 'Wikidata SPARQL API', 'jsPDF Vector Export', 'TypeScript', 'Zero-Backend Architecture'],
    problem: 'Visualizing corporate hierarchies across multi-tier subsidiaries and venture stakes normally requires expensive enterprise graph databases (Neo4j), heavy cloud backends, and slow server rendering.',
    howItWorks: 'Constructs dynamic SPARQL queries directly from the client browser against Wikidata endpoints, parses entity ontologies in Web Workers, and renders an interactive force-directed 3D WebGL physics graph with zero server compute overhead.',
    result: 'Fast 60fps graph exploration with interactive node searching, relationship inspector, and instant vectorized PDF reporting for due diligence and corporate research.',
    metrics: { label: 'SERVER INFRA COST', value: '$0 / mo' }
  },
  {
    id: 'walmart-dc',
    category: 'enterprise',
    code: 'SYS-03',
    title: 'Enterprise Supply Chain & QA Automation',
    badge: 'INTERNAL PRODUCTION',
    subtitle: 'Warehouse operations data reconciliation & daily audit velocity acceleration',
    isInternal: true,
    tags: ['Excel VBA Systems', 'WMS Data Ingestion', 'Audit Reconciliation', 'Logistics Automation', 'Operational Tooling'],
    problem: 'Auditing cross-departmental shipment manifests and daily distribution KPIs required 4 hours of tedious manual cross-referencing across disconnected WMS spreadsheets, prone to transcription errors.',
    howItWorks: 'Engineered automated VBA reconciliation pipelines that parse raw WMS transaction dumps, cross-compare SKU counts and shipment orders against master schedules, and flag anomalies with deterministic rule sets.',
    result: 'Cut daily KPI audit verification time by 38% (from 4 hours to 2.5 hours) and accelerated outbound discrepancy audits from 20 minutes to 5 minutes, saving hours of manual workload every shift.',
    metrics: { label: 'AUDIT VELOCITY', value: '-38% Latency' }
  }
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'viz' | 'enterprise'>('all');
  const [activeSpec, setActiveSpec] = useState<'intelspider' | 'corpgraph' | 'walmart-dc'>('intelspider');

  const copyEmail = () => {
    navigator.clipboard.writeText('anshdeepsaini@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#ececee] selection:bg-amber-500/20 selection:text-amber-200 font-sans antialiased relative">
      
      {/* Subtle Blueprint Micro-Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-30" />

      {/* Main Framework Container */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10">

        {/* Top Hardware Instrument Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 mb-8 sm:mb-12 text-xs font-mono text-zinc-400 gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              STATUS: AVAILABLE FOR SYSTEMS ROLES
            </span>
            <span className="hidden md:inline-block text-zinc-500">//</span>
            <span className="hidden md:inline-block text-zinc-400">VANCOUVER, BC [UTC-7]</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden lg:inline text-zinc-500">FOCUS: DETERMINISTIC AI · WORKFLOWS · OPERATIONS</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Anshdeep-Singh"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded hover:text-white hover:bg-zinc-800 transition"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/anshdeeps"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded hover:text-white hover:bg-zinc-800 transition"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="p-1.5 rounded hover:text-white hover:bg-zinc-800 transition"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-20 sm:mb-28 pt-2">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 tracking-wider uppercase mb-5">
              <span>[ ARCHITECTURAL PROFILE ]</span>
              <span className="text-zinc-600">/</span>
              <span>ANSHDEEP SINGH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
              Engineering reliable AI pipelines, internal tools, and warehouse automation.
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              I'm an AI systems and automation engineer based in Vancouver. My background combines aerospace semiconductor reliability testing, machine learning research, and distribution warehouse operations. I replace ungrounded AI prompts with strict deterministic contracts, client-side WebGL architectures, and practical automations that save real operating hours.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#systems"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm sm:text-base transition inline-flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              >
                Inspect Systems
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="px-5 py-3 rounded-lg bg-[#14161b] hover:bg-[#1a1e24] border border-white/[0.1] text-zinc-200 text-sm sm:text-base font-medium transition inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                {copiedEmail ? 'Email Copied: anshdeepsaini@gmail.com' : 'Copy Email Address'}
              </button>
              <a
                href="https://linkedin.com/in/anshdeeps"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-lg bg-[#14161b] hover:bg-[#1a1e24] border border-white/[0.1] text-zinc-300 text-sm sm:text-base font-medium transition inline-flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Precision Architectural Metrics Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 pt-8 border-t border-white/[0.08]">
            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-500 mb-2 flex items-center justify-between">
                <span>METRIC // 01</span>
                <span className="text-amber-500/80">WALMART DC</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1.5">-38% Verification Time</div>
              <p className="text-sm text-zinc-300">
                Collapsed daily logistics KPI and inventory reconciliation from 4.0 hours to 2.5 hours per shift.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-500 mb-2 flex items-center justify-between">
                <span>METRIC // 02</span>
                <span className="text-amber-500/80">INTELLIGENCE</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1.5">0% Schema Drift</div>
              <p className="text-sm text-zinc-300">
                Strict Pydantic and Zod data contracts guaranteeing every model output adheres to verifiable schemas.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-500 mb-2 flex items-center justify-between">
                <span>METRIC // 03</span>
                <span className="text-amber-500/80">ARCHITECTURE</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1.5">Zero-Server Compute</div>
              <p className="text-sm text-zinc-300">
                Direct client-side SPARQL querying and WebGL graph synthesis eliminating monthly backend host bills.
              </p>
            </div>
          </div>
        </header>

        {/* Interactive Systems Architecture Teardown / Console */}
        <section className="mb-24 lg:mb-32">
          <div className="border border-white/[0.08] rounded-2xl bg-[#111317] overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#0e1014] border-b border-white/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-400">
                <Terminal className="w-4 h-4 text-amber-500" />
                <span className="text-zinc-200 font-semibold">ARCHITECTURE TELEMETRY & PROOF-OF-WORK SPEC</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
                <button
                  onClick={() => setActiveSpec('intelspider')}
                  className={`px-3 py-1 rounded transition text-xs ${activeSpec === 'intelspider' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  SYS-01 // INTELSPIDER
                </button>
                <button
                  onClick={() => setActiveSpec('corpgraph')}
                  className={`px-3 py-1 rounded transition text-xs ${activeSpec === 'corpgraph' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  SYS-02 // CORPGRAPH 3D
                </button>
                <button
                  onClick={() => setActiveSpec('walmart-dc')}
                  className={`px-3 py-1 rounded transition text-xs ${activeSpec === 'walmart-dc' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  SYS-03 // SUPPLY CHAIN
                </button>
              </div>
            </div>

            {/* Console Content */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm">
              {activeSpec === 'intelspider' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-zinc-500 text-xs border-b border-white/[0.06] pb-2">
                    <span>SUBSYSTEM: PARALLEL DNS-OVER-HTTPS & CRYPTOGRAPHIC LEDGER</span>
                    <span className="text-amber-500">LIVE AT INTELSPIDER.ANSHDEEPSINGH.COM</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans">
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Harvesting Layer
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Queries Google DoH for SPF, DMARC, and MX records simultaneously while scanning client DOM for Datadog, Segment, and HubSpot signatures.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Verification Proof
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Every raw signal is signed into a SHA-256 evidence ledger. Agent hooks cannot cite ungrounded assertions; prompt evals verify grounding before return.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Output Latency
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Pre-call sales dossiers generated in 12s with direct links to live DNS and script proof, reducing manual research friction by 80%.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpec === 'corpgraph' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-zinc-500 text-xs border-b border-white/[0.06] pb-2">
                    <span>SUBSYSTEM: CLIENT-SIDE SPARQL ENGINE & WEBGL FORCE GRAPH</span>
                    <span className="text-amber-500">LIVE AT CORPGRAPH.ANSHDEEPSINGH.COM</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans">
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Zero-Backend Querying
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Browser fetches entity relationships directly from live Wikidata SPARQL endpoints, bypassing middle-tier databases and recurring server costs.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        WebGL Simulation
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Computes node links and parent-subsidiary hierarchies dynamically using Three.js and 3d-force-graph at 60fps with smooth orbital cameras.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Vector Reporting
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        One-click client-side export to structured vector PDF reports for investment research and corporate compliance audits.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpec === 'walmart-dc' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-zinc-500 text-xs border-b border-white/[0.06] pb-2">
                    <span>SUBSYSTEM: WMS TRANSACTION INGESTION & DISCREPANCY RECONCILIATION</span>
                    <span className="text-amber-500">PRODUCTION FACILITY (SURREY, BC)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans">
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Disparate Ingestion
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Automated pipelines ingest fragmented WMS shift exports and cross-match pallet quantities against outbound carrier manifests.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Anomaly Detection
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Deterministic reconciliation rules immediately flag SKU mismatches and unverified shipments, cutting out human transcription error.
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Operational Savings
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Slashes daily shift verification time from 4.0 hours to 2.5 hours, freeing supervisors for critical floor logistics operations.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="systems" className="mb-24 lg:mb-32 scroll-mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">
                <span>SYSTEMS DIRECTORY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Featured Implementations
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-[#121418] p-1 rounded-lg border border-white/[0.06] text-xs font-mono self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'all' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                ALL [3]
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'ai' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                AI PIPELINES
              </button>
              <button
                onClick={() => setActiveTab('viz')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'viz' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                CLIENT 3D
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'enterprise' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                OPERATIONS
              </button>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-white/[0.15] transition relative"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-amber-500 font-bold tracking-wider">
                        {project.code}
                      </span>
                      <span className="text-zinc-600">//</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-900 border border-zinc-700/80 text-zinc-300">
                        {project.badge}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-300 mt-2 max-w-4xl">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium transition"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.isInternal && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                        <Building2 className="w-3.5 h-3.5 text-amber-500" />
                        Walmart DC Production
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 3-Column Spec Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.06]">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-amber-500" />
                      Core Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                      <Network className="w-3.5 h-3.5 text-amber-500" />
                      Engineering Architecture
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.howItWorks}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Demonstrated Impact
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Engineering Pedigree */}
        <section className="mb-24 lg:mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">
                <span>BACKGROUND & RECORD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Engineering Pedigree & Research
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* SCAAI */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">AI Research Scientist</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">Symbiosis Centre for AI (SCAAI)</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                  2020 – 2021
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Researched deep generative architectures using Conditional Generative Adversarial Networks (CGANs). Designed automated PyTorch dataset extraction pipelines and loss evaluators for multi-stage sequential image generation.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['CGANs', 'PyTorch', 'Data Pipelines', 'Deep Learning Research'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* SCL / ISRO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">Reliability Engineer</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">Semi-Conductor Laboratory (Govt Dept of Space / ISRO)</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                  2020 – 2021
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Subjected aerospace-grade integrated circuits to extreme electrical and environmental stress testing. Built Python telemetry diagnostic scripts to calculate degradation curves and pinpoint hardware failure mechanisms.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Aerospace ICs', 'Python Telemetry', 'Electrical Stress Testing', 'Failure Diagnostics'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tekolutions */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">Machine Learning Engineer</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">Tekolutions</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                  2021
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Constructed multimodal inference systems synthesizing CNN-based facial landmark detection with Librosa audio feature extraction (MFCCs, spectral roll-off) for real-time speech and sentiment classification.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Computer Vision (CNN)', 'Librosa Audio', 'TensorFlow', 'Multimodal Pipelines'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">Education & Credentials</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">Formal Technical Qualifications</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                  Vancouver & India
                </span>
              </div>
              <ul className="text-sm sm:text-base text-zinc-300 space-y-2.5 leading-relaxed">
                <li>
                  <strong className="text-white font-medium">Post-Baccalaureate Diploma in Data Analytics:</strong> Douglas College (Vancouver, BC)
                </li>
                <li>
                  <strong className="text-white font-medium">B.Tech in Electronics & Telecommunication:</strong> Symbiosis Institute of Technology
                </li>
                <li>
                  <strong className="text-white font-medium">Diploma in Business Management:</strong> SIBM Pune
                </li>
                <li>
                  <strong className="text-white font-medium">Junior Data Analyst Professional Certificate:</strong> NPower Canada
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="mb-24 lg:mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">
                <span>SKILLS INDEX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Technical Capabilities
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-[#121418] border border-white/[0.06]">
              <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                [01] Agentic & AI
              </div>
              <ul className="text-sm sm:text-base text-zinc-300 space-y-2.5">
                <li>• Deterministic AI workflows</li>
                <li>• Strict Pydantic / Zod contracts</li>
                <li>• Multi-agent routing & guardrails</li>
                <li>• Grounding & hallucination prevention</li>
                <li>• Cost & token allocation models</li>
                <li>• Autonomous scheduled watchdogs</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#121418] border border-white/[0.06]">
              <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Database className="w-4 h-4" />
                [02] Backend & Data
              </div>
              <ul className="text-sm sm:text-base text-zinc-300 space-y-2.5">
                <li>• Python (FastAPI, Flask)</li>
                <li>• TypeScript / Node.js</li>
                <li>• REST & WebSockets</li>
                <li>• PostgreSQL & SQLite</li>
                <li>• Docker & Linux Bash</li>
                <li>• SPARQL & Wikidata APIs</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#121418] border border-white/[0.06]">
              <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                [03] Frontend & 3D
              </div>
              <ul className="text-sm sm:text-base text-zinc-300 space-y-2.5">
                <li>• React 19 & Next.js 16</li>
                <li>• Three.js & WebGL rendering</li>
                <li>• 3D force-directed graphs</li>
                <li>• Tailwind CSS v4 styling</li>
                <li>• Client-side vector PDF generation</li>
                <li>• High-performance interactive UI</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#121418] border border-white/[0.06]">
              <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                [04] Operations & Tooling
              </div>
              <ul className="text-sm sm:text-base text-zinc-300 space-y-2.5">
                <li>• Excel VBA enterprise automation</li>
                <li>• Warehouse (WMS) data reconciliation</li>
                <li>• n8n automated orchestrations</li>
                <li>• Telemetry failure diagnosis</li>
                <li>• Process bottleneck elimination</li>
                <li>• Technical documentation & SOPs</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Contact & Availability CTA */}
        <section id="contact" className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[#121418] border border-white/[0.08] text-center relative">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              OPEN FOR FULL-TIME ROLES · VANCOUVER & REMOTE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Let's build reliable systems.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              I'm actively seeking opportunities as an AI Automation Engineer, Systems Engineer, or Solutions Engineer in Greater Vancouver or remote across Canada.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm sm:text-base transition inline-flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              >
                <Mail className="w-4 h-4" />
                Send Email Directly
              </a>
              <button
                onClick={copyEmail}
                className="px-5 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-sm sm:text-base font-medium transition inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                {copiedEmail ? 'Email Copied' : 'Copy anshdeepsaini@gmail.com'}
              </button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400 border-t border-white/[0.06] mt-8">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                Vancouver, BC
              </span>
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                anshdeepsaini@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/anshdeeps"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-500" />
                linkedin.com/in/anshdeeps
              </a>
            </div>
          </div>
        </section>

        {/* Minimalist Engineering Footer */}
        <footer className="mt-12 pb-6 text-center text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Anshdeep Singh // Engineered with React 19, TypeScript & Tailwind CSS v4</p>
        </footer>

      </div>
    </div>
  );
}
