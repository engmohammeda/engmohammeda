import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, Project } from '../data/portfolioData';
import { 
  Code2, 
  ExternalLink, 
  Train, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  onSelectMetroDemo: () => void;
  onSelectReadmeDemo: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectMetroDemo,
  onSelectReadmeDemo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Key Projects &amp; Software Solutions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Production web applications, transit pathfinding algorithms, and developer tooling.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'transit', label: 'Transit & Maps' },
            { id: 'web', label: 'Web Applications' },
            { id: 'algorithms', label: 'Algorithms' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:translate-y-[-2px] shadow-xl group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:text-cyan-300">
                    {project.category === 'transit' ? (
                      <Train className="w-5 h-5 text-emerald-400" />
                    ) : project.category === 'algorithms' ? (
                      <Cpu className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Layers className="w-5 h-5 text-purple-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {project.featured && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    FEATURED
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.longDescription}
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {project.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-center"
                  >
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                      {st.label}
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800/80 text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              {project.id === 'riyadh-metro' ? (
                <button
                  onClick={onSelectMetroDemo}
                  className="font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Route Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : project.id === 'profile-readme-studio' ? (
                <button
                  onClick={onSelectReadmeDemo}
                  className="font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Open README Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="text-slate-500 font-mono text-[11px]">Core Architecture</span>
              )}

              <div className="flex items-center gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Live App"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
