import React from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { 
  Terminal, 
  Train, 
  FileCode2, 
  User, 
  ExternalLink, 
  Mail, 
  MapPin,
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface NavbarProps {
  activeTab: 'overview' | 'metro' | 'readme' | 'terminal';
  setActiveTab: (tab: 'overview' | 'metro' | 'readme' | 'terminal') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Profile */}
          <div 
            onClick={() => setActiveTab('overview')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-400 p-[2px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sky-400 text-base">MA</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                  {DEVELOPER_PROFILE.name}
                </span>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                  {DEVELOPER_PROFILE.username}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {DEVELOPER_PROFILE.location}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-medium hidden md:inline">Open to work</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-sky-600/20 text-sky-300 border border-sky-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('metro')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'metro'
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Train className="w-3.5 h-3.5 text-emerald-400" />
              <span>Riyadh Metro</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded font-mono">Live</span>
            </button>

            <button
              onClick={() => setActiveTab('readme')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'readme'
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
              <span>README Studio</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </button>

            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'terminal'
                  ? 'bg-amber-600/20 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>CLI Terminal</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-sky-900/30 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-800/60 no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
              activeTab === 'overview' ? 'bg-sky-600 text-white' : 'text-slate-400'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('metro')}
            className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
              activeTab === 'metro' ? 'bg-emerald-600 text-white' : 'text-slate-400'
            }`}
          >
            Riyadh Metro
          </button>
          <button
            onClick={() => setActiveTab('readme')}
            className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
              activeTab === 'readme' ? 'bg-purple-600 text-white' : 'text-slate-400'
            }`}
          >
            README Studio
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
              activeTab === 'terminal' ? 'bg-amber-600 text-white' : 'text-slate-400'
            }`}
          >
            CLI Terminal
          </button>
        </div>
      </div>
    </header>
  );
};
