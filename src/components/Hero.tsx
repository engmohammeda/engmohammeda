import React from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { 
  Terminal, 
  Train, 
  FileCode2, 
  MapPin, 
  ExternalLink, 
  Code2, 
  GitBranch, 
  Star, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface HeroProps {
  onNavigateToTab: (tab: 'overview' | 'metro' | 'readme' | 'terminal') => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToTab, onOpenContact }) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/80">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Full-Stack &amp; Transit Engineering</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  {DEVELOPER_PROFILE.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {DEVELOPER_PROFILE.role}
              </p>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              {DEVELOPER_PROFILE.shortBio}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                React / TypeScript / Node
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-300">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Transit &amp; Spatial Routing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-purple-300">
                <GitBranch className="w-3.5 h-3.5 text-purple-400" />
                GitHub Profile Builder
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateToTab('metro')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-950/40 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Train className="w-4 h-4" />
                <span>Launch Riyadh Metro App</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
              </button>

              <button
                onClick={() => onNavigateToTab('readme')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <FileCode2 className="w-4 h-4 text-purple-400" />
                <span>README Studio</span>
              </button>

              <button
                onClick={() => onNavigateToTab('terminal')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-mono transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>engmohammeda:~$</span>
              </button>
            </div>
          </div>

          {/* Right Column: Featured Project Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-2xl overflow-hidden group">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 rotate-12">
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold py-1 px-8 shadow-sm">
                  FLAGSHIP APP
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                    Riyadh Metro Web Navigator
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    github.com/engmohammeda/RiyadhMetro-
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Interactive real-time transit visualizer for Riyadh's six metro lines (Blue, Red, Orange, Yellow, Green, Purple). Features bilingual station search, pathfinding algorithm with transfer points, and accessibility telemetry.
              </p>

              {/* Transit Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Total Network</span>
                  <span className="text-sm font-bold text-white font-mono">176 km / 6 Lines</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Pathfinding</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">Graph BFS / Dijkstra</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Major Hubs</span>
                  <span className="text-sm font-bold text-sky-400 font-mono">KAFD, Olaya, Qasr Hokm</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Airport Link</span>
                  <span className="text-sm font-bold text-amber-400 font-mono">Line 4 (Terminals 1-5)</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                <button
                  onClick={() => onNavigateToTab('metro')}
                  className="font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Route Planner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={DEVELOPER_PROFILE.metroDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>Live GitHub Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
