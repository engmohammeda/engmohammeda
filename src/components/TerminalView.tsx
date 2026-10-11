import React, { useState, useRef, useEffect } from 'react';
import { DEVELOPER_PROFILE, METRO_LINES, METRO_STATIONS, findOptimalRoute } from '../data/portfolioData';
import { Terminal, Send, Trash2, CornerDownLeft } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  content: string | React.ReactNode;
}

export const TerminalView: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'output',
      content: `Mohammed Albkhyty Interactive Portfolio OS [Version 2.4.0]
(c) 2026 Mohammed Albkhyty (@engmohammeda). All rights reserved.

Type 'help' to see available commands or 'metro' to explore the transit engine.`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: `in-${Date.now()}`, type: 'input', content: `engmohammeda@dev:~$ ${trimmed}` },
    ];

    const args = trimmed.split(' ');
    const command = args[0].toLowerCase();

    switch (command) {
      case 'help':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Available Commands:
  • whoami       - Display developer information and background
  • projects     - List featured software engineering projects
  • metro        - Overview of Riyadh Metro interactive web project
  • metro -r     - Run transit pathfinding (e.g. 'metro -r airport olaya')
  • skills       - Technical stack and core proficiencies
  • readme       - GitHub profile README information
  • contact      - Official email, LinkedIn, and GitHub links
  • date         - Print current system date and time
  • sudo         - Execute command as superuser
  • clear        - Clear the terminal screen`,
        });
        break;

      case 'whoami':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Name:        ${DEVELOPER_PROFILE.name} (${DEVELOPER_PROFILE.nameAr})
Role:        ${DEVELOPER_PROFILE.role}
Location:    ${DEVELOPER_PROFILE.location}
GitHub:      ${DEVELOPER_PROFILE.githubUrl}
Email:       ${DEVELOPER_PROFILE.email}
Specialty:   Full-Stack Web Development, Transit Systems, Algorithms`,
        });
        break;

      case 'projects':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Featured Engineering Repositories:
  [1] RiyadhMetro-           Interactive 6-line web navigator & shortest path planner
      Live URL: https://engmohammeda.github.io/RiyadhMetro-/web
  [2] engmohammeda           GitHub Profile README Studio & markdown visualizer
  [3] Transit-Pathfinder     BFS & Dijkstra multi-line graph pathfinding engine
  [4] Developer-Registry     Developer community metrics & ranking visualizer`,
        });
        break;

      case 'metro':
        if (args.length > 1 && (args[1] === '-r' || args[1] === '--route')) {
          const originArg = args[2]?.toLowerCase() || 'airport';
          const destArg = args[3]?.toLowerCase() || 'olaya';

          const originStation = METRO_STATIONS.find(s => 
            s.nameEn.toLowerCase().includes(originArg) || s.id.includes(originArg)
          ) || METRO_STATIONS[0];

          const destStation = METRO_STATIONS.find(s => 
            s.nameEn.toLowerCase().includes(destArg) || s.id.includes(destArg)
          ) || METRO_STATIONS[1];

          const route = findOptimalRoute(originStation.id, destStation.id);

          if (route) {
            newHistory.push({
              id: `out-${Date.now()}`,
              type: 'success',
              content: `Transit Route Found:
From: ${originStation.nameEn} (${originStation.nameAr})
To:   ${destStation.nameEn} (${destStation.nameAr})
Time: ~${route.estimatedMinutes} minutes | Stops: ${route.totalStops} | Transfers: ${route.transfers}

Itinerary:
${route.steps.map((st, i) => `  ${i + 1}. ${st.instruction}`).join('\n')}`,
            });
          } else {
            newHistory.push({
              id: `out-${Date.now()}`,
              type: 'error',
              content: `No route found between specified stations.`,
            });
          }
        } else {
          newHistory.push({
            id: `out-${Date.now()}`,
            type: 'output',
            content: `Riyadh Metro Network Facts:
  • Network Size:     176 kilometers across 6 color-coded rapid lines
  • Automation:       Grade of Automation 4 (GoA4 driverless)
  • Major Lines:      Blue (1), Red (2), Orange (3), Yellow (4), Green (5), Purple (6)
  • Interchange Hubs: KAFD, Olaya, Qasr Al Hokm, STC Exhibition
  • Live Web Demo:    https://engmohammeda.github.io/RiyadhMetro-/web

Tip: Run 'metro -r airport olaya' to calculate path in terminal!`,
          });
        }
        break;

      case 'skills':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Skills & Tooling:
  • Frontend:  TypeScript, React, Next.js, Tailwind CSS, Modern Web APIs
  • Backend:   Node.js, Express, Python, REST APIs, GraphQL
  • Databases: PostgreSQL, MongoDB, Redis, SQLite
  • Systems:   Graph Algorithms (BFS/Dijkstra), Data Structures, Git, Docker, Linux`,
        });
        break;

      case 'readme':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Special Profile Repository: engmohammeda/engmohammeda
Configured with Tokyo Night badges, typing animation header, snake contribution workflow, and transit showcase.`,
        });
        break;

      case 'contact':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: `Contact Channels:
  • Email:    ${DEVELOPER_PROFILE.email}
  • LinkedIn: https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/
  • GitHub:   ${DEVELOPER_PROFILE.githubUrl}`,
        });
        break;

      case 'date':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'output',
          content: new Date().toString(),
        });
        break;

      case 'sudo':
        newHistory.push({
          id: `out-${Date.now()}`,
          type: 'success',
          content: `engmohammeda is in the sudoers file. Incident reported to Santa Claus 🎅. Access granted!`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          id: `err-${Date.now()}`,
          type: 'error',
          content: `bash: ${command}: command not found. Type 'help' to see valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Window bar */}
      <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-slate-300 font-sans text-xs">
            engmohammeda@portfolio:~ (zsh)
          </span>
        </div>

        <button
          onClick={() => setHistory([])}
          className="text-slate-500 hover:text-slate-300 transition-colors p-1"
          title="Clear Terminal"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Output Body */}
      <div 
        onClick={() => inputRef.current?.focus()} 
        className="p-5 space-y-3 min-h-[420px] max-h-[550px] overflow-y-auto cursor-text bg-[#0b0f17]"
      >
        {history.map((line) => (
          <div key={line.id}>
            {line.type === 'input' ? (
              <div className="text-cyan-400 font-semibold">{line.content}</div>
            ) : line.type === 'error' ? (
              <div className="text-red-400 whitespace-pre-wrap">{line.content}</div>
            ) : line.type === 'success' ? (
              <div className="text-emerald-400 whitespace-pre-wrap">{line.content}</div>
            ) : (
              <div className="text-slate-300 whitespace-pre-wrap">{line.content}</div>
            )}
          </div>
        ))}

        {/* Input prompt line */}
        <div className="flex items-center gap-2 text-cyan-400 pt-1">
          <span className="shrink-0">engmohammeda@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-slate-100 outline-none caret-cyan-400"
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Terminal Quick Hint Bar */}
      <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span>Quick Commands:</span>
          {['help', 'whoami', 'projects', 'metro -r airport olaya', 'contact'].map((c) => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
