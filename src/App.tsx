import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RiyadhMetroExplorer } from './components/RiyadhMetroExplorer';
import { ReadmeStudio } from './components/ReadmeStudio';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TerminalView } from './components/TerminalView';
import { ContactModal } from './components/ContactModal';
import { DEVELOPER_PROFILE } from './data/portfolioData';
import { 
  Train, 
  FileCode2, 
  Terminal, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';

export function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'metro' | 'readme' | 'terminal'>('overview');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Top sticky navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <Hero
              onNavigateToTab={setActiveTab}
              onOpenContact={() => setIsContactOpen(true)}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* Featured Projects Grid */}
              <ProjectsSection
                onSelectMetroDemo={() => setActiveTab('metro')}
                onSelectReadmeDemo={() => setActiveTab('readme')}
              />

              {/* Riyadh Metro Transit Spotlight Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-sky-950/70 border border-emerald-800/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Flagship Project Spotlight
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Riyadh Metro Interactive Navigator
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Test the route planner, inspect lines (Blue, Red, Orange, Yellow, Green, Purple), and calculate shortest paths with automated transfers across 176 km of rail infrastructure.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('metro')}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all hover:scale-105 shrink-0 cursor-pointer"
                >
                  <Train className="w-4 h-4" />
                  <span>Launch Metro Explorer</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Skills Arsenal */}
              <SkillsSection />

              {/* Terminal Quick View */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-amber-400" />
                      <span>Interactive Developer Console</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Run commands directly inside Mohammed's virtual portfolio CLI environment.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('terminal')}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Terminal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <TerminalView />
              </div>
            </div>
          </div>
        )}

        {/* RIYADH METRO TAB */}
        {activeTab === 'metro' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <RiyadhMetroExplorer />
          </div>
        )}

        {/* README STUDIO TAB */}
        {activeTab === 'readme' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ReadmeStudio />
          </div>
        )}

        {/* CLI TERMINAL TAB */}
        {activeTab === 'terminal' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
                <Terminal className="w-6 h-6 text-amber-400" />
                <span>engmohammeda@portfolio:~$</span>
              </h2>
              <p className="text-xs text-slate-400">
                Type commands like <code className="text-cyan-300 font-mono">help</code>, <code className="text-cyan-300 font-mono">whoami</code>, <code className="text-cyan-300 font-mono">projects</code>, or <code className="text-cyan-300 font-mono">metro -r airport olaya</code>.
              </p>
            </div>
            <TerminalView />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-base tracking-tight">
                {DEVELOPER_PROFILE.name}
              </span>
              <span className="text-xs font-mono text-slate-400">({DEVELOPER_PROFILE.nameAr})</span>
            </div>
            <p className="text-xs text-slate-400">
              {DEVELOPER_PROFILE.role} &bull; Riyadh, Saudi Arabia
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right font-mono">
            <span>Special Profile Repository: engmohammeda/engmohammeda</span>
            <div className="text-[11px] text-slate-600">Built with React, TypeScript &amp; Tailwind CSS</div>
          </div>
        </div>
      </footer>

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
