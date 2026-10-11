import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Server, Wrench, Shield, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>Core Competencies &amp; Technical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Skills &amp; Engineering Disciplines
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Proficiency across frontend UI development, backend microservices, transit data routing, and DevOps tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                {idx === 0 ? <Code className="w-4 h-4" /> : idx === 1 ? <Server className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
              </div>
              <h3 className="font-bold text-white text-sm">{cat.category}</h3>
            </div>

            <div className="space-y-3.5">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-slate-400 text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visual Tech Icon Badges */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
          Integrated Technologies
        </span>
        <div className="flex justify-center flex-wrap gap-2 pt-1">
          <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,nodejs,express,python,postgres,redis,tailwind,docker,git,linux&theme=dark" alt="Tech Stack Icons" className="max-w-full" />
        </div>
      </div>
    </section>
  );
};
