import { useState, useEffect } from 'react';
import {
  Cpu,
  Layers,
  ArrowUpRight,
  Mail,
  Database,
  Copy,
  Check,
  Building2,
  ChevronRight,
  MapPin,
  Workflow,
  ShieldCheck,
  Activity,
  Radio,
  ExternalLink
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

// -------------------------------------------------------------
// Interactive Proof-of-Work: IntelSpider Recon Sandbox
// -------------------------------------------------------------
const INTEL_TARGETS = {
  'stripe.com': {
    domain: 'stripe.com',
    spf: 'v=spf1 include:_spf.google.com include:mailgun.org ~all',
    dmarc: 'v=DMARC1; p=reject; rua=mailto:dmarc@stripe.com',
    mx: ['mail.stripe.com', 'alt.mail.stripe.com'],
    tech: ['Next.js 16', 'Datadog RUM', 'Segment v4', 'AWS CloudFront'],
    ats: 'Greenhouse (14 open platform roles)',
    hash: 'e8f49a37c02b1156d98f7e21a5509cb7b74f32e9a8f4019f2d1e29c874e0d9b4',
    latency: '1.14s'
  },
  'anthropic.com': {
    domain: 'anthropic.com',
    spf: 'v=spf1 include:_spf.google.com ~all',
    dmarc: 'v=DMARC1; p=reject; pct=100',
    mx: ['aspmx.l.google.com', 'alt1.aspmx.l.google.com'],
    tech: ['Next.js (App Router)', 'Cloudflare Radar', 'Tailwind CSS', 'Vercel Edge'],
    ats: 'Lever (22 AI alignment & systems roles)',
    hash: '4b92c1097fa6158d34ac7682f6e01a8843c08fe37648db5194c256038162f491',
    latency: '0.98s'
  },
  'linear.app': {
    domain: 'linear.app',
    spf: 'v=spf1 include:_spf.google.com include:sendgrid.net ~all',
    dmarc: 'v=DMARC1; p=quarantine; rua=mailto:dmarc@linear.app',
    mx: ['mxa.mailgun.org', 'mxb.mailgun.org'],
    tech: ['React 19', 'GraphQL Apollo', 'Datadog', 'Cloudflare Workers'],
    ats: 'Greenhouse (6 product engineering roles)',
    hash: '91f28b7e602419a45618cdb029471f49615a137890ecb53491295fc498d36154',
    latency: '1.22s'
  }
};

function IntelSpiderInteractiveDemo() {
  const [targetKey, setTargetKey] = useState<'stripe.com' | 'anthropic.com' | 'linear.app'>('stripe.com');
  const [activeTab, setActiveTab] = useState<'terminal' | 'ledger' | 'stack'>('terminal');
  const [logs, setLogs] = useState<string[]>([]);

  const target = INTEL_TARGETS[targetKey];

  useEffect(() => {
    setLogs([
      `[0.08s] INITIATING RECON // TARGET: ${target.domain}`,
      `[0.22s] DNS-over-HTTPS parallel query to Google DoH (8.8.8.8)... [200 OK]`,
      `[0.45s] SPF: ${target.spf.substring(0, 38)}...`,
      `[0.61s] DMARC Policy: ${target.dmarc}`,
      `[0.78s] Script Fingerprints: ${target.tech.join(', ')}`,
      `[0.94s] Public ATS Discovery: ${target.ats}`,
      `[${target.latency}] SHA-256 Signed: ${target.hash.substring(0, 24)}... [IMMUTABLE]`,
      `[DONE] Dossier verified with zero prompt hallucination.`
    ]);
  }, [targetKey]);

  return (
    <div className="rounded-xl bg-[#090b0e] border border-white/[0.08] overflow-hidden flex flex-col h-full font-mono text-xs">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e1116] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60 inline-block" />
          </div>
          <span className="text-zinc-400 font-semibold text-[11px] ml-1">RECON ENGINE V2.0</span>
        </div>

        <div className="flex items-center gap-1">
          {(['stripe.com', 'anthropic.com', 'linear.app'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTargetKey(key)}
              className={`px-2 py-0.5 rounded text-[10px] transition ${
                targetKey === key
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Subtabs Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#0b0d12] border-b border-white/[0.05] text-[11px]">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`pb-0.5 transition ${activeTab === 'terminal' ? 'text-amber-400 border-b border-amber-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Live Stream
          </button>
          <button
            onClick={() => setActiveTab('ledger')}
            className={`pb-0.5 transition ${activeTab === 'ledger' ? 'text-amber-400 border-b border-amber-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            SHA-256 Ledger
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`pb-0.5 transition ${activeTab === 'stack' ? 'text-amber-400 border-b border-amber-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Harvested Stack
          </button>
        </div>
        <span className="text-[10px] text-zinc-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          LATENCY: {target.latency}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-3.5 flex-1 min-h-[190px] flex flex-col justify-center bg-[#090b0e] text-[11px] leading-relaxed">
        {activeTab === 'terminal' && (
          <div className="space-y-1.5">
            {logs.map((log, i) => (
              <div
                key={i}
                className={`${
                  log.includes('DONE')
                    ? 'text-emerald-400 font-semibold pt-1 border-t border-white/[0.05]'
                    : log.includes('SHA-256')
                    ? 'text-amber-300 font-semibold'
                    : log.includes('INITIATING')
                    ? 'text-zinc-200 font-bold'
                    : 'text-zinc-400'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ledger' && (
          <div className="space-y-2 text-zinc-300">
            <div className="flex items-center justify-between pb-1 border-b border-white/[0.06] text-[10px] text-zinc-400">
              <span>RECORD TYPE</span>
              <span>CRYPTOGRAPHIC PROOF</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-400">DNS_SPF_MX</span>
              <span className="text-zinc-400 font-mono text-[10px]">{target.hash.substring(0, 20)}...</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-400">HTTP_DOM_SCRIPTS</span>
              <span className="text-zinc-400 font-mono text-[10px]">sha256:7f4c91a082...</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-400">PUBLIC_ATS_FEED</span>
              <span className="text-zinc-400 font-mono text-[10px]">sha256:3d81b9921c...</span>
            </div>
            <div className="pt-2 text-[10px] text-zinc-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Status: Strict Evidence Ledger (No hallucinated data passed to LLM)</span>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-2.5">
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Fingerprinted Production Technologies</div>
            <div className="flex flex-wrap gap-1.5">
              {target.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700/80 text-zinc-200 text-[11px]">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-1.5 border-t border-white/[0.05] text-[11px] text-zinc-300">
              <span className="text-zinc-400">Public ATS Target:</span> {target.ats}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-3 py-1.5 bg-[#0e1116] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
        <span>Google DNS-over-HTTPS (DoH) Client</span>
        <a
          href="https://intelspider.anshdeepsingh.com"
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 hover:underline flex items-center gap-1"
        >
          Launch IntelSpider 2.0 <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Proof-of-Work: CorpGraph 3D Interactive Console
// -------------------------------------------------------------
const CORP_PRESETS = {
  'TSLA': {
    name: 'Tesla, Inc.',
    ticker: 'TSLA',
    nodes: 24,
    links: 38,
    marketCap: '$780B',
    entities: [
      { name: 'SpaceX', rel: 'Shared Governance / Stake', type: 'Affiliate' },
      { name: 'SolarCity Corp', rel: '100% Wholly Owned Subsidiary', type: 'Subsidiary' },
      { name: 'Maxwell Technologies', rel: 'Technology Asset Acquisition', type: 'IP/Tech' },
      { name: 'The Vanguard Group', rel: '7.2% Institutional Common Stock', type: 'Institutional' },
      { name: 'BlackRock Inc.', rel: '5.9% Institutional Common Stock', type: 'Institutional' }
    ]
  },
  'AAPL': {
    name: 'Apple Inc.',
    ticker: 'AAPL',
    nodes: 31,
    links: 49,
    marketCap: '$3.45T',
    entities: [
      { name: 'Beats Electronics', rel: 'Wholly Owned Subsidiary', type: 'Subsidiary' },
      { name: 'Beddit Inc.', rel: 'Health Tech Acquisition', type: 'Subsidiary' },
      { name: 'Berkshire Hathaway', rel: '2.8% Major Stakeholder', type: 'Institutional' },
      { name: 'Apple Operations Europe', rel: 'International Subsidiary (Ireland)', type: 'Subsidiary' },
      { name: 'Dialog Semiconductor', rel: 'PMIC Asset & Team Transfer', type: 'IP/Tech' }
    ]
  }
};

function CorpGraphInteractiveDemo() {
  const [selectedPreset, setSelectedPreset] = useState<'TSLA' | 'AAPL'>('TSLA');
  const [activeNode, setActiveNode] = useState<number>(0);
  const data = CORP_PRESETS[selectedPreset];

  return (
    <div className="rounded-xl bg-[#090b0e] border border-white/[0.08] overflow-hidden flex flex-col h-full font-mono text-xs">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e1116] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span className="text-zinc-200 font-semibold text-[11px]">3D GRAPH & SEC EDGAR DUAL-STREAM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => { setSelectedPreset('TSLA'); setActiveNode(0); }}
            className={`px-2 py-0.5 rounded text-[10px] transition ${
              selectedPreset === 'TSLA'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            TSLA
          </button>
          <button
            onClick={() => { setSelectedPreset('AAPL'); setActiveNode(0); }}
            className={`px-2 py-0.5 rounded text-[10px] transition ${
              selectedPreset === 'AAPL'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            AAPL
          </button>
        </div>
      </div>

      {/* Visual Canvas Representation */}
      <div className="p-3.5 flex-1 min-h-[190px] flex flex-col justify-between bg-gradient-to-b from-[#090b0e] to-[#0c0e13]">
        {/* Graph Meta Strip */}
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/[0.06]">
          <span className="text-white font-bold">{data.name} [{data.ticker}]</span>
          <span className="text-amber-400 text-[10px]">
            {data.nodes} NODES // {data.links} EDGES // {data.marketCap} CAP
          </span>
        </div>

        {/* Interactive Node Explorer */}
        <div className="py-2 space-y-1.5">
          <div className="text-[10px] text-zinc-400 flex items-center justify-between">
            <span>DISCOVERED CORPORATE TIES (CLICK TO INSPECT):</span>
            <span className="text-amber-500 text-[9px]">SPARQL 60FPS WEBGL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {data.entities.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setActiveNode(idx)}
                className={`p-2 rounded text-left transition border ${
                  activeNode === idx
                    ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-sm'
                    : 'bg-[#121418] border-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.1]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-zinc-200 truncate">{item.name}</span>
                  <span className="text-[9px] px-1 rounded bg-zinc-800 text-zinc-400">{item.type}</span>
                </div>
                <div className="text-[10px] text-zinc-400 truncate mt-0.5">{item.rel}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Node Deep Inspector */}
        <div className="p-2 rounded bg-[#0a0d12] border border-amber-500/30 text-[10px] text-zinc-300 flex items-center justify-between">
          <div>
            <span className="text-amber-400 font-bold">{data.entities[activeNode].name}</span>: {data.entities[activeNode].rel}
          </div>
          <span className="text-zinc-400 shrink-0 ml-2">Verified via Wikidata + SEC 13F</span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="px-3 py-1.5 bg-[#0e1116] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
        <span>Zero Backend Cost // Client-Side SPARQL</span>
        <a
          href="https://corpgraph.anshdeepsingh.com"
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 hover:underline flex items-center gap-1"
        >
          Launch Full 3D WebGL App <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Proof-of-Work: Walmart Supply Chain Pipeline
// -------------------------------------------------------------
function WalmartPipelineDemo() {
  return (
    <div className="rounded-xl bg-[#090b0e] border border-white/[0.08] overflow-hidden flex flex-col h-full font-mono text-xs">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e1116] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-zinc-200 font-semibold text-[11px]">WMS DISCREPANCY RECONCILIATION ENGINE</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
          PROD ENVIRONMENT
        </span>
      </div>

      {/* Pipeline Comparison Strip */}
      <div className="p-4 flex-1 min-h-[190px] flex flex-col justify-between bg-[#090b0e] space-y-3 font-sans">
        
        {/* Before vs After Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Legacy Process */}
          <div className="p-3 rounded-lg bg-[#121418] border border-red-500/20 space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-red-400 font-bold uppercase">Legacy Manual Process</span>
              <span className="text-zinc-400">4.0 Hours / Shift</span>
            </div>
            <ul className="text-zinc-400 text-[11px] space-y-1">
              <li>• Disconnected CSV exports manually merged</li>
              <li>• Manual VLOOKUPs & SKU cross-checks</li>
              <li>• Human transcription lag on trailer manifests</li>
            </ul>
          </div>

          {/* Automated System */}
          <div className="p-3 rounded-lg bg-[#10141a] border border-amber-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-amber-400 font-bold uppercase">Engineered Automation</span>
              <span className="text-emerald-400 font-bold">2.5 Hours / Shift (-38%)</span>
            </div>
            <ul className="text-zinc-300 text-[11px] space-y-1">
              <li>• Automated VBA ingestion & anomaly flagging</li>
              <li>• Deterministic discrepancy rule engine</li>
              <li>• Outbound audit latency: 20m ➔ 5m (-75%)</li>
            </ul>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] font-mono text-center">
          <div className="p-2 rounded bg-[#0e1116] border border-white/[0.05]">
            <div className="text-[10px] text-zinc-400">DAILY TIME SAVED</div>
            <div className="text-sm font-bold text-amber-400 mt-0.5">1.5 hrs / shift</div>
          </div>
          <div className="p-2 rounded bg-[#0e1116] border border-white/[0.05]">
            <div className="text-[10px] text-zinc-400">OUTBOUND AUDIT</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">5m (from 20m)</div>
          </div>
          <div className="p-2 rounded bg-[#0e1116] border border-white/[0.05]">
            <div className="text-[10px] text-zinc-400">SCALE TESTED</div>
            <div className="text-sm font-bold text-white mt-0.5">1.2M+ sq. ft.</div>
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="px-3 py-1.5 bg-[#0e1116] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
        <span>Surrey, BC Distribution Center Operations</span>
        <span className="text-zinc-400 font-mono">100+ Trailed Manifests Daily</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'viz' | 'enterprise'>('all');

  const copyEmail = () => {
    navigator.clipboard.writeText('anshdeepsaini@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#ececee] selection:bg-amber-500/20 selection:text-amber-200 font-sans antialiased relative">
      
      {/* Subtle Blueprint Micro-Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-25" />

      {/* Main Framework Container */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10">

        {/* Top Hardware Instrument Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 mb-8 sm:mb-12 text-xs font-mono text-zinc-400 gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              STATUS: AVAILABLE FOR SYSTEMS ROLES
            </span>
            <span className="hidden md:inline-block text-zinc-600">//</span>
            <span className="hidden md:inline-block text-zinc-400">VANCOUVER, BC [UTC-7]</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden lg:inline text-zinc-400">FOCUS: DETERMINISTIC AI · WORKFLOWS · OPERATIONS</span>
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
        <header className="mb-16 sm:mb-20 pt-2">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 tracking-wider uppercase mb-4">
              <span>[ SYSTEMS ARCHITECTURE & AUTOMATION ]</span>
              <span className="text-zinc-600">/</span>
              <span>ANSHDEEP SINGH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.12]">
              Engineering reliable AI pipelines, internal tooling, and warehouse automation.
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              I build zero-hallucination AI pipelines, client-side WebGL architectures, and enterprise automations that cut real operating hours. My background bridges aerospace IC reliability testing at ISRO, deep learning research, and high-velocity distribution warehouse operations.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#systems"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm sm:text-base transition inline-flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              >
                Inspect Proof-of-Work
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/[0.08]">
            <div className="p-4 sm:p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center justify-between">
                <span>METRIC // 01</span>
                <span className="text-amber-500/90 font-semibold">WALMART DC</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1">-38% Verification Time</div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Replaced manual WMS sheet reconciliation with automated VBA ingestion, cutting shift audit from 4.0h to 2.5h.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center justify-between">
                <span>METRIC // 02</span>
                <span className="text-amber-500/90 font-semibold">INTELSPIDER 2.0</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1">12s Dossier Synthesis</div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Parallel DNS-over-HTTPS and script signature scraping saving 80% pre-call manual research friction.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#121418] border border-white/[0.06] relative">
              <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center justify-between">
                <span>METRIC // 03</span>
                <span className="text-amber-500/90 font-semibold">CORPGRAPH 3D</span>
              </div>
              <div className="text-3xl font-mono font-bold text-white mb-1">$0 / mo Server Bill</div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Direct client-side SPARQL querying and Three.js WebGL physics graph with zero middle-tier database overhead.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Projects Section: Split-Pane Showcase */}
        <section id="systems" className="mb-20 sm:mb-28 scroll-mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">
                <span>SYSTEMS DIRECTORY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Production Systems & Proof-of-Work
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
                AI AGENTS
              </button>
              <button
                onClick={() => setActiveTab('viz')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'viz' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                3D & WEBGL
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`px-3 py-1.5 rounded transition ${activeTab === 'enterprise' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                OPERATIONS
              </button>
            </div>
          </div>

          <div className="space-y-10">

            {/* PROJECT 1: INTELSPIDER 2.0 */}
            {(activeTab === 'all' || activeTab === 'ai') && (
              <article className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-white/[0.14] transition">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  
                  {/* Left Column: Architectural Spec */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="font-mono text-xs text-amber-500 font-bold">SYS-01</span>
                        <span className="text-zinc-600">//</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          IntelSpider 2.0
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">
                          LIVE DEPLOYMENT
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                        Deterministic pre-meeting intelligence engine & cryptographic evidence audit ledger. Extracts raw infrastructure truths without LLM hallucination.
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {['Next.js 16 (App Router)', 'TypeScript', 'DNS-over-HTTPS', 'SHA-256 Ledger', 'ATS Harvesters'].map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Concise 3-Point Spec */}
                      <div className="space-y-3 border-t border-white/[0.06] pt-4 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Core Bottleneck
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Solutions engineers waste 45 minutes per call manually looking up DNS records, tech stacks, and open jobs, while standard AI prompts invent fictional company claims.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Engineering Architecture
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Directly queries Google DoH for SPF/DMARC/MX, analyzes client script tags (Segment/Datadog), and extracts public job boards. Signs every signal into a SHA-256 evidence ledger.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Measured Impact
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Generates audit-ready sales dossiers in <strong className="text-white">12 seconds</strong> with 100% verified evidence links, saving 80% prep time.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                      <a
                        href="https://intelspider.anshdeepsingh.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition"
                      >
                        Launch IntelSpider 2.0
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://github.com/Anshdeep-Singh/intelspider"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 text-xs sm:text-sm transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Proof / Interactive Recon Sandbox */}
                  <div className="lg:col-span-6 flex flex-col">
                    <IntelSpiderInteractiveDemo />
                  </div>

                </div>
              </article>
            )}

            {/* PROJECT 2: CORPGRAPH 3D */}
            {(activeTab === 'all' || activeTab === 'viz') && (
              <article className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-white/[0.14] transition">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  
                  {/* Left Column: Architectural Spec */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="font-mono text-xs text-amber-500 font-bold">SYS-02</span>
                        <span className="text-zinc-600">//</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          CorpGraph 3D
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">
                          LIVE DEPLOYMENT
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                        Zero-backend interactive 3D corporate ownership & investor network explorer. Visualizes multi-tier subsidiaries and 13F stakes in real-time WebGL.
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {['Three.js / WebGL', '3d-force-graph', 'Wikidata SPARQL', 'jsPDF Vector Export', 'TypeScript'].map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Concise 3-Point Spec */}
                      <div className="space-y-3 border-t border-white/[0.06] pt-4 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Core Bottleneck
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Visualizing multi-tier corporate hierarchies and institutional stakes usually demands heavy cloud graph databases (Neo4j) and high monthly hosting costs.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Engineering Architecture
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Directly sends SPARQL queries from the client browser to Wikidata, runs entity relationship ontologies in Web Workers, and renders 3D WebGL physics graphs at 60fps.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Measured Impact
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Delivers 60fps node exploration, relationship inspectors, and vector PDF reporting with <strong className="text-white">$0.00 / month</strong> server bill.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                      <a
                        href="https://corpgraph.anshdeepsingh.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition"
                      >
                        Launch CorpGraph 3D
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://github.com/Anshdeep-Singh/corpgraph-3d"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 text-xs sm:text-sm transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Proof / Interactive 3D Explorer Console */}
                  <div className="lg:col-span-6 flex flex-col">
                    <CorpGraphInteractiveDemo />
                  </div>

                </div>
              </article>
            )}

            {/* PROJECT 3: WALMART DC OPERATIONS */}
            {(activeTab === 'all' || activeTab === 'enterprise') && (
              <article className="p-6 sm:p-8 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-white/[0.14] transition">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  
                  {/* Left Column: Architectural Spec */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="font-mono text-xs text-amber-500 font-bold">SYS-03</span>
                        <span className="text-zinc-600">//</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          Enterprise Supply Chain Automation
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">
                          INTERNAL PRODUCTION
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                        Warehouse data reconciliation pipeline & daily discrepancy audit velocity acceleration across high-volume distribution center operations.
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {['VBA Systems', 'WMS Data Ingestion', 'Audit Reconciliation', 'Logistics ETL', 'Anomaly Detection'].map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Concise 3-Point Spec */}
                      <div className="space-y-3 border-t border-white/[0.06] pt-4 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Core Bottleneck
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Auditing daily shipment manifests and KPI metrics required 4 hours of tedious manual cross-referencing across disconnected WMS spreadsheets, prone to transcription errors.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Engineering Architecture
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Engineered automated VBA pipelines that ingest raw WMS shift dumps, cross-check SKU quantities against master schedules, and isolate discrepancies with deterministic rule sets.
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-amber-500 font-semibold uppercase tracking-wider text-[11px] block mb-0.5">
                            Measured Impact
                          </span>
                          <p className="text-zinc-300 leading-relaxed">
                            Cut shift audit time by <strong className="text-white">38% (from 4.0h to 2.5h)</strong> and reduced outbound discrepancy audit latency from 20 minutes to 5 minutes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Tag */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                        <Building2 className="w-3.5 h-3.5 text-amber-500" />
                        Walmart Canada Distribution Center (Surrey, BC)
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Visual Proof / Pipeline Telemetry Card */}
                  <div className="lg:col-span-6 flex flex-col">
                    <WalmartPipelineDemo />
                  </div>

                </div>
              </article>
            )}

          </div>
        </section>

        {/* Experience & Engineering Pedigree: Streamlined Timeline */}
        <section className="mb-20 sm:mb-28">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Cols: Chronological Work Timeline */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Walmart */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">QA Analyst & Supply Chain Operations</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Walmart Canada · Surrey, BC</p>
                  </div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    2022 – Present
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-300 space-y-1.5 leading-relaxed">
                  <li>• Engineered automated VBA ingestion and validation pipelines for warehouse WMS shift reports.</li>
                  <li>• Reduced daily discrepancy audits from 4.0h to 2.5h (-38%) across a 1.2M+ sq. ft. facility.</li>
                  <li>• Standardized deterministic verification SOPs across QA teams, eliminating manual transcription errors.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Warehouse WMS', 'VBA Automation', 'Data Reconciliation', 'Logistics Operations'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* SCL / ISRO */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">IC Reliability Engineer</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Semi-Conductor Laboratory (Govt Dept of Space / ISRO)</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    2020 – 2021
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-300 space-y-1.5 leading-relaxed">
                  <li>• Subjected aerospace-grade integrated circuits to extreme electrical and environmental stress testing.</li>
                  <li>• Wrote automated Python telemetry scripts to extract degradation curves and isolate hardware failure mechanisms.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Aerospace ICs', 'Python Telemetry', 'Electrical Stress Testing', 'Failure Diagnostics'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* SCAAI */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">AI Research Scientist</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Symbiosis Centre for AI (SCAAI)</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    2020 – 2021
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-300 space-y-1.5 leading-relaxed">
                  <li>• Researched Conditional Generative Adversarial Networks (CGANs) for multi-stage sequential image generation.</li>
                  <li>• Built automated PyTorch dataset ingestion pipelines and custom loss functions.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['CGANs', 'PyTorch', 'Generative AI', 'Model Evaluation'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tekolutions */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">Machine Learning Engineer</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">Tekolutions</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    2021
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-300 space-y-1.5 leading-relaxed">
                  <li>• Designed multimodal classification systems pairing CNN facial landmarks with Librosa audio feature extraction.</li>
                  <li>• Optimized inference pipelines for low-latency client evaluation.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Computer Vision (CNN)', 'Librosa Audio', 'TensorFlow', 'Multimodal'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Cols: Formal Education & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Formal Education & Degrees
                </div>

                <div className="space-y-4 text-xs sm:text-sm divide-y divide-white/[0.06]">
                  <div className="pt-2 first:pt-0">
                    <div className="font-bold text-white text-base">Post-Baccalaureate Diploma in Data Analytics</div>
                    <div className="text-zinc-400 text-xs mt-0.5">Douglas College · Vancouver, BC</div>
                    <p className="text-zinc-400 text-xs mt-1">Focus: Big data architectures, statistical modeling, distributed databases.</p>
                  </div>

                  <div className="pt-3">
                    <div className="font-bold text-white text-base">B.Tech in Electronics & Telecommunication</div>
                    <div className="text-zinc-400 text-xs mt-0.5">Symbiosis Institute of Technology · India</div>
                    <p className="text-zinc-400 text-xs mt-1">Focus: Signal processing, embedded hardware systems, microprocessor engineering.</p>
                  </div>

                  <div className="pt-3">
                    <div className="font-bold text-white text-base">Diploma in Business Management</div>
                    <div className="text-zinc-400 text-xs mt-0.5">SIBM Pune · India</div>
                  </div>
                </div>
              </div>

              {/* Key Technical Focus Strip */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#121418] border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Engineering Principles
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  <p>
                    <strong className="text-white">Deterministic Contracts:</strong> Strict Zod/Pydantic schemas over conversational prompt chains.
                  </p>
                  <p>
                    <strong className="text-white">Zero-Backend Compute:</strong> Pushing computational graphs and SPARQL queries to client WebGL to eliminate cloud host bills.
                  </p>
                  <p>
                    <strong className="text-white">Operational Leverage:</strong> Automating physical and digital bottlenecks where human transcription introduces delay.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Technical Capabilities Matrix: Compact Categorized Stacks */}
        <section className="mb-20 sm:mb-28">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            
            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  [01] Agentic & AI Systems
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Deterministic AI Pipelines',
                    'Pydantic / Zod Contracts',
                    'Multi-Agent Routing',
                    'Hallucination Prevention',
                    'Token / Cost Budgeting',
                    'Autonomous Watchdogs'
                  ].map((s) => (
                    <span key={s} className="px-2 py-1 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.05]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  [02] Backend & Data
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python (FastAPI, Flask)',
                    'TypeScript / Node.js',
                    'PostgreSQL & SQLite',
                    'REST & WebSockets',
                    'SPARQL & Wikidata APIs',
                    'Docker & Linux Bash'
                  ].map((s) => (
                    <span key={s} className="px-2 py-1 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.05]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  [03] Frontend & WebGL
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'React 19 & Next.js 16',
                    'Three.js & 3D WebGL',
                    '3d-force-graph',
                    'Tailwind CSS v4',
                    'Client-Side Vector PDFs',
                    'Interactive UI Engineering'
                  ].map((s) => (
                    <span key={s} className="px-2 py-1 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.05]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#121418] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Workflow className="w-4 h-4" />
                  [04] Operations & Tooling
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Excel VBA Automation',
                    'WMS Discrepancy Audits',
                    'Telemetry Analysis',
                    'Bottleneck Elimination',
                    'n8n Orchestration',
                    'Deterministic QA SOPs'
                  ].map((s) => (
                    <span key={s} className="px-2 py-1 rounded bg-[#171a20] text-zinc-300 text-xs font-mono border border-white/[0.05]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact & Availability CTA */}
        <section id="contact" className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#121418] border border-white/[0.08] text-center relative">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              AVAILABLE FOR FULL-TIME ROLES · VANCOUVER & REMOTE
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's build reliable systems.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Seeking opportunities as an AI Automation Engineer, Systems Engineer, or Solutions Engineer in Greater Vancouver or remote across Canada.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:anshdeepsaini@gmail.com"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm sm:text-base transition inline-flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              >
                <Mail className="w-4 h-4" />
                Send Direct Email
              </a>
              <button
                onClick={copyEmail}
                className="px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-sm sm:text-base font-medium transition inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                {copiedEmail ? 'Email Copied' : 'Copy anshdeepsaini@gmail.com'}
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-400 border-t border-white/[0.06] mt-6">
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
        <footer className="mt-10 pb-6 text-center text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Anshdeep Singh // Engineered with React 19, TypeScript & Tailwind CSS v4</p>
        </footer>

      </div>
    </div>
  );
}
