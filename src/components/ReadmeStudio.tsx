import React, { useState } from 'react';
import { 
  FileCode2, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Eye, 
  Code, 
  Workflow, 
  Layers, 
  ExternalLink,
  BookOpen,
  Terminal,
  RefreshCw
} from 'lucide-react';

interface ReadmeStudioProps {
  onNotify?: (message: string) => void;
}

export const ReadmeStudio: React.FC<ReadmeStudioProps> = () => {
  const [activeView, setActiveView] = useState<'preview' | 'code' | 'workflows' | 'guide'>('preview');
  const [theme, setTheme] = useState<'tokyonight' | 'radical' | 'dracula' | 'catppuccin_mocha' | 'github_dark'>('tokyonight');
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedWorkflow, setCopiedWorkflow] = useState<string | null>(null);

  // Form customizer states
  const [name, setName] = useState('Mohammed Al-Bukhaiti');
  const [nameAr, setNameAr] = useState('محمد البخيتي');
  const [username, setUsername] = useState('engmohammeda');
  const [role, setRole] = useState('Software Engineer & Full-Stack Developer');
  const [location, setLocation] = useState('Riyadh, Saudi Arabia 🇸🇦');
  const [linkedinUrl, setLinkedinUrl] = useState('https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/');
  const [email, setEmail] = useState('mohammedalbkhyty@gmail.com');
  const [metroUrl, setMetroUrl] = useState('https://engmohammeda.github.io/RiyadhMetro-/web');
  const [primaryFocus, setPrimaryFocus] = useState('Web Applications, Transit Systems & Graph Algorithms');

  // Generate markdown dynamically based on user choices
  const generatedMarkdown = `<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                      HEADER / BANNER                         ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2027,50:203A43,100:2C5364&height=200&section=header&text=Hi%20there,%20I'm%20${encodeURIComponent(name)}&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Software%20Engineer%20%7C%20Full-Stack%20%7C%20Transit%20Systems%20%7C%20Open%20Source&descAlignY=55&descSize=16" />

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=800&color=36BCF7&center=true&vCenter=true&width=650&lines=Building+scalable+systems+%26+modern+web+apps;Creator+of+Riyadh+Metro+Web+Navigator;Clean+Code+%7C+Algorithms+%7C+TypeScript;Always+learning%2C+always+shipping+%F0%9F%9A%80" alt="Typing SVG" />
</a>

<br/>

<!-- Social badges -->
<a href="${linkedinUrl}"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/${username}"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="${metroUrl}"><img src="https://img.shields.io/badge/Riyadh_Metro_App-008080?style=for-the-badge&logo=google-maps&logoColor=white" /></a>
<a href="mailto:${email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=36BCF7&style=flat-square" alt="profile views" />
<img src="https://img.shields.io/github/followers/${username}?label=Followers&style=flat-square&color=36BCF7" alt="followers" />
<img src="https://img.shields.io/github/stars/${username}?label=Total%20Stars&style=flat-square&color=36BCF7" alt="stars" />

</div>

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                        ABOUT ME                              ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

## 🧑‍💻 About Me / نبذة عني

\`\`\`ts
const developer: Engineer = {
  name:         "${name} (${nameAr})",
  role:         "${role}",
  location:     "${location}",
  languages:    ["Arabic (Native)", "English (Fluent)"],
  currentFocus: "${primaryFocus}",
  coreStack:    ["TypeScript", "JavaScript", "React", "Node.js", "Python"],
  askMeAbout:   ["Riyadh Metro Navigator", "Web Architecture", "Algorithms"],
  funFact:      "I turn complex transit systems into smooth interactive web experiences 🚇",
};
\`\`\`

- 🔭 &nbsp;Currently building **[Riyadh Metro Interactive Navigator](${metroUrl})** — interactive routing and transit explorer for Riyadh's 6-line rail network
- 🌱 &nbsp;Deepening expertise in **High-Performance Distributed Systems**, **Cloud-Native Web Apps**, and **Scalable APIs**
- 👯 &nbsp;Open to collaborate on **Impactful Open-Source Projects** & **Modern Engineering Tooling**
- 💬 &nbsp;Ask me about **TypeScript, React, Node.js, Systems Architecture, and Transit Routing**
- ⚡ &nbsp;Fun fact: I love optimizing pathfinding algorithms while enjoying good coffee ☕

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                       TECH STACK                             ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

## 🛠️ Tech Arsenal

<div align="center">

### Languages
<p>
<img src="https://skillicons.dev/icons?i=ts,js,python,html,css,dart&theme=dark" />
</p>

### Frontend
<p>
<img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,vite,bootstrap,redux&theme=dark" />
</p>

### Backend & APIs
<p>
<img src="https://skillicons.dev/icons?i=nodejs,express,fastapi,graphql,prisma&theme=dark" />
</p>

### Databases
<p>
<img src="https://skillicons.dev/icons?i=postgres,mysql,mongodb,redis,sqlite,supabase&theme=dark" />
</p>

### DevOps & Tools
<p>
<img src="https://skillicons.dev/icons?i=git,github,docker,linux,bash,vscode,figma,postman&theme=dark" />
</p>

</div>

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                       GITHUB STATS                           ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

## 📊 GitHub Analytics

<div align="center">

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&include_all_commits=true&count_private=true&hide_border=true&bg_color=0D1117&title_color=36BCF7&icon_color=36BCF7&text_color=c9d1d9" />
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=36BCF7&text_color=c9d1d9" />

<br/><br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=0D1117&stroke=36BCF7&ring=36BCF7&fire=FF6B6B&currStreakLabel=36BCF7" />

<br/><br/>

<!-- Activity Graph -->
<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${theme === 'tokyonight' ? 'tokyo-night' : theme}&hide_border=true&bg_color=0D1117&color=36BCF7&line=36BCF7&point=FFFFFF&area=true" />

<br/>

<!-- Trophies -->
<img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&no-frame=true&no-bg=true&column=7&margin-w=8&margin-h=8" />

</div>

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                    CONTRIBUTION SNAKE                        ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

<div align="center">

### 🐍 Contribution Graph

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg" />
  <img alt="github contribution snake" src="https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg" />
</picture>

</div>

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                    FEATURED PROJECTS                         ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

## 🏆 Featured Projects / أبرز المشاريع

<div align="center">

<a href="https://github.com/${username}/RiyadhMetro-">
  <img width="49%" src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=RiyadhMetro-&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=36BCF7&icon_color=36BCF7" />
</a>
<a href="https://github.com/${username}/${username}">
  <img width="49%" src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${username}&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=36BCF7&icon_color=36BCF7" />
</a>

</div>

| Project | Description | Tech | Live Demo |
|---------|-------------|------|-----------|
| **[Riyadh Metro Explorer](https://github.com/${username}/RiyadhMetro-)** | Interactive route pathfinder & mapping for 6 Riyadh metro lines | \`JavaScript\` \`Transit Data\` \`Maps\` | [🔗 Live Web App](${metroUrl}) |
| **[Profile README Studio](https://github.com/${username}/${username})** | Dynamic GitHub profile generator, stats compiler & developer portfolio | \`React\` \`TypeScript\` \`Tailwind\` | [🔗 Live Studio](https://github.com/${username}) |

---

<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║                        FOOTER                                ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

<div align="center">

### 💭 Dev Quote
<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${theme}" />

<br/>

### 🤝 Let's Connect / تواصل معي

<i>Open to opportunities, collaborations, and engineering discussions.</i>

<br/>

<a href="${linkedinUrl}"><img src="https://img.shields.io/badge/LinkedIn-Mohammed_Al--Bukhaiti-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:${email}"><img src="https://img.shields.io/badge/Email-${encodeURIComponent(email)}-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:2C5364,50:203A43,100:0F2027&height=140&section=footer&text=Thanks%20for%20visiting!&fontSize=22&fontColor=ffffff&animation=fadeIn&fontAlignY=70" />

<sub>⭐️ From <a href="https://github.com/${username}">@${username}</a> — ${name} (${nameAr})</sub>

</div>`;

  const snakeWorkflowYaml = `name: Generate Snake Animation

on:
  schedule:
    - cron: "0 */12 * * *"   # كل 12 ساعة
  workflow_dispatch:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Generate snake
        uses: Platane/snk@v3
        id: snake-gif
        with:
          github_user_name: ${username}
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark
            dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9

      - name: Push to output branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`;

  const blogWorkflowYaml = `name: Update Blog Posts

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "https://dev.to/feed/${username}"
          max_post_count: 5
          template: "- [\$title](\$url) — <sub>\$date</sub>\$newline"`;

  const copyToClipboard = (text: string, label?: string) => {
    navigator.clipboard.writeText(text);
    if (label) {
      setCopiedWorkflow(label);
      setTimeout(() => setCopiedWorkflow(null), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedMarkdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-sky-950/40 border border-purple-800/40 p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Special Repository Studio &bull; engmohammeda/engmohammeda</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              GitHub Profile README Studio &amp; Customizer
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Designed specifically for <span className="text-white font-medium">{name}</span>. Customize your special profile repository README, live-preview badges and widgets, and generate GitHub Actions workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => copyToClipboard(generatedMarkdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy README.md'}</span>
            </button>

            <button
              onClick={downloadReadme}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Customizer Controls (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <h3 className="font-bold text-white text-sm">Profile Customizer</h3>
              </div>
              <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                Live Sync
              </span>
            </div>

            {/* Theme Selector */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5 block">
                Widget Theme (نمط الإحصائيات)
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'tokyonight', label: 'Tokyo Night 🌃' },
                  { id: 'radical', label: 'Radical 💗' },
                  { id: 'dracula', label: 'Dracula 🧛' },
                  { id: 'catppuccin_mocha', label: 'Catppuccin ☕' },
                  { id: 'github_dark', label: 'GitHub Dark ⚫' },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as any)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                      theme === th.id
                        ? 'bg-purple-600 text-white font-bold shadow-sm'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {th.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Full Name (English)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">الاسم بالعربية</label>
                <input
                  type="text"
                  value={nameAr}
                  onChange={(e) => setNameAr(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500 text-right"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">GitHub Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Headline / Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">LinkedIn Profile URL</label>
                <input
                  type="text"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setName('Mohammed Al-Bukhaiti');
                  setNameAr('محمد البخيتي');
                  setUsername('engmohammeda');
                  setRole('Software Engineer & Full-Stack Developer');
                  setLocation('Riyadh, Saudi Arabia 🇸🇦');
                  setLinkedinUrl('https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/');
                  setEmail('mohammedalbkhyty@gmail.com');
                  setTheme('tokyonight');
                }}
                className="w-full py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Mohammed's Official Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Viewport Tabs & Output (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Sub Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveView('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeView === 'preview'
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>GitHub Rendered Preview</span>
              </button>

              <button
                onClick={() => setActiveView('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeView === 'code'
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Raw Markdown (README.md)</span>
              </button>

              <button
                onClick={() => setActiveView('workflows')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeView === 'workflows'
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>Workflows (.github/workflows)</span>
              </button>

              <button
                onClick={() => setActiveView('guide')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeView === 'guide'
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>دليل التفعيل</span>
              </button>
            </div>

            <button
              onClick={() => copyToClipboard(generatedMarkdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* VIEW 1: GitHub Rendered Profile Preview */}
          {activeView === 'preview' && (
            <div className="bg-[#0d1117] rounded-2xl border border-slate-700/80 p-6 shadow-2xl text-slate-200 space-y-6">
              {/* GitHub Header Simulation */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300 font-sans">{username} / README.md</span>
                </div>
                <span>Rendered GitHub Markdown</span>
              </div>

              {/* Dynamic Capsule Waving Banner */}
              <div className="text-center space-y-4">
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-md">
                  <img
                    src={`https://capsule-render.vercel.app/api?type=waving&color=0:0F2027,50:203A43,100:2C5364&height=180&section=header&text=Hi%20there,%20I'm%20${encodeURIComponent(name)}&fontSize=34&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=${encodeURIComponent(role)}&descAlignY=55&descSize=14`}
                    alt="Capsule Header"
                    className="w-full"
                  />
                </div>

                {/* Typing SVG */}
                <div className="flex justify-center py-1">
                  <img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=800&color=36BCF7&center=true&vCenter=true&width=620&lines=Building+scalable+systems+%26+modern+web+apps;Creator+of+Riyadh+Metro+Web+Navigator;Clean+Code+%7C+Algorithms+%7C+TypeScript;Always+learning%2C+always+shipping+%F0%9F%9A%80"
                    alt="Typing Animation"
                    className="max-w-full"
                  />
                </div>

                {/* Social Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                  <img src="https://img.shields.io/badge/Riyadh_Metro_App-008080?style=for-the-badge&logo=google-maps&logoColor=white" alt="Metro" />
                  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
                </div>

                {/* Counters */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <img src={`https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=36BCF7&style=flat-square`} alt="views" />
                  <img src={`https://img.shields.io/github/followers/${username}?label=Followers&style=flat-square&color=36BCF7`} alt="followers" />
                  <img src={`https://img.shields.io/github/stars/${username}?label=Total%20Stars&style=flat-square&color=36BCF7`} alt="stars" />
                </div>
              </div>

              <hr className="border-slate-800" />

              {/* About Me Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>🧑‍💻 About Me / نبذة عني</span>
                </h3>

                <div className="bg-[#161b22] rounded-xl p-4 border border-slate-800 font-mono text-xs text-sky-300 overflow-x-auto">
                  <pre>{`const developer: Engineer = {
  name:         "${name} (${nameAr})",
  role:         "${role}",
  location:     "${location}",
  languages:    ["Arabic (Native)", "English (Fluent)"],
  currentFocus: "${primaryFocus}",
  coreStack:    ["TypeScript", "JavaScript", "React", "Node.js", "Python"],
  askMeAbout:   ["Riyadh Metro Navigator", "Web Architecture", "Algorithms"],
  funFact:      "I turn complex transit systems into smooth interactive web experiences 🚇",
};`}</pre>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>🔭 Currently building <strong><a href={metroUrl} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Riyadh Metro Interactive Navigator</a></strong> — interactive routing and transit explorer for Riyadh's 6-line rail network</li>
                  <li>🌱 Deepening expertise in <strong>High-Performance Distributed Systems</strong> and <strong>Scalable Web APIs</strong></li>
                  <li>👯 Open to collaborate on <strong>Impactful Open-Source Projects</strong></li>
                  <li>💬 Ask me about <strong>TypeScript, React, Node.js, Systems Architecture, and Transit Routing</strong></li>
                  <li>⚡ Fun fact: I love optimizing pathfinding algorithms while enjoying good coffee ☕</li>
                </ul>
              </div>

              <hr className="border-slate-800" />

              {/* Tech Arsenal Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white text-center">
                  🛠️ Tech Arsenal
                </h3>

                <div className="space-y-3 text-center">
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Languages</h5>
                    <img className="mx-auto" src="https://skillicons.dev/icons?i=ts,js,python,html,css,dart&theme=dark" alt="Languages" />
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Frontend</h5>
                    <img className="mx-auto" src="https://skillicons.dev/icons?i=react,nextjs,tailwind,vite,bootstrap,redux&theme=dark" alt="Frontend" />
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Backend &amp; Databases</h5>
                    <img className="mx-auto" src="https://skillicons.dev/icons?i=nodejs,express,fastapi,postgres,mysql,mongodb,redis&theme=dark" alt="Backend & DB" />
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">DevOps &amp; Tools</h5>
                    <img className="mx-auto" src="https://skillicons.dev/icons?i=git,github,docker,linux,bash,vscode,figma,postman&theme=dark" alt="Tools" />
                  </div>
                </div>
              </div>

              <hr className="border-slate-800" />

              {/* Stats Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white text-center">
                  📊 GitHub Analytics
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  <img
                    className="rounded-xl border border-slate-800 max-h-44"
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&include_all_commits=true&count_private=true&hide_border=true&bg_color=0D1117&title_color=36BCF7&icon_color=36BCF7&text_color=c9d1d9`}
                    alt="GitHub Stats"
                  />
                  <img
                    className="rounded-xl border border-slate-800 max-h-44"
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=36BCF7&text_color=c9d1d9`}
                    alt="Top Languages"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    className="rounded-xl border border-slate-800"
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=0D1117&stroke=36BCF7&ring=36BCF7&fire=FF6B6B&currStreakLabel=36BCF7`}
                    alt="GitHub Streak"
                  />
                </div>
              </div>

              <hr className="border-slate-800" />

              {/* Snake Section */}
              <div className="text-center space-y-2">
                <h4 className="text-sm font-bold text-slate-300">🐍 Contribution Snake Animation Preview</h4>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-center">
                  <img
                    src={`https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg`}
                    alt="Snake"
                    className="max-h-24 opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e: any) => {
                      // Fallback demonstration image if branch output has not run workflow yet
                      e.target.src = "https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg";
                    }}
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Runs automatically every 12 hours via GitHub Actions workflow (<code>.github/workflows/snake.yml</code>)
                </p>
              </div>
            </div>
          )}

          {/* VIEW 2: Raw Markdown Source */}
          {activeView === 'code' && (
            <div className="bg-[#0d1117] rounded-2xl border border-slate-800 p-5 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="font-mono">README.md (Generated Markdown)</span>
                <button
                  onClick={() => copyToClipboard(generatedMarkdown)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy Full Markdown'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-sky-300 font-mono text-xs overflow-x-auto max-h-[600px] leading-relaxed">
                {generatedMarkdown}
              </pre>
            </div>
          )}

          {/* VIEW 3: Workflows (.github/workflows) */}
          {activeView === 'workflows' && (
            <div className="space-y-6">
              {/* Snake workflow */}
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      <span>🐍 Snake Animation Workflow</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        .github/workflows/snake.yml
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Creates the animated contribution graph snake that eats your commit squares!
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(snakeWorkflowYaml, 'snake')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedWorkflow === 'snake' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWorkflow === 'snake' ? 'Copied' : 'Copy snake.yml'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto max-h-64">
                  {snakeWorkflowYaml}
                </pre>
              </div>

              {/* Blog workflow */}
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      <span>📝 Auto Blog Posts Workflow</span>
                      <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                        .github/workflows/blog-posts.yml
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Automatically syncs and inserts your latest articles into your README!
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(blogWorkflowYaml, 'blog')}
                    className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedWorkflow === 'blog' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWorkflow === 'blog' ? 'Copied' : 'Copy blog-posts.yml'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-950 text-sky-300 font-mono text-xs overflow-x-auto max-h-64">
                  {blogWorkflowYaml}
                </pre>
              </div>
            </div>
          )}

          {/* VIEW 4: Step-by-Step Arabic Activation Guide */}
          {activeView === 'guide' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6 text-right" dir="rtl">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-white">🚀 دليل تفعيل البروفايل الاحترافي خطوة بخطوة</h3>
                <p className="text-xs text-slate-400 mt-1">
                  كل ما تحتاجه لتفعيل بروفايلك على GitHub بأفضل شكل ممكن لمحمد البخيتي
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-sky-400 text-sm">1. إنشاء المستودع الخاص (Special Repo)</h4>
                  <p>
                    أنشئ مستودعاً جديداً على GitHub بالاسم: <code className="text-sky-300 font-mono">engmohammeda/engmohammeda</code>
                  </p>
                  <p>
                    تأكد من جعله <strong>Public</strong> وتفعيل خيار <strong>Add a README file</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-emerald-400 text-sm">2. وضع ملف الـ README الجاهز</h4>
                  <p>
                    انسخ كود الـ Markdown من التبويب أعلاه (زر "Copy README.md") والصقه مباشرة في ملف <code className="text-emerald-300 font-mono">README.md</code> ثم اضغط <strong>Commit changes</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-purple-400 text-sm">3. تفعيل الأفعى المتحركة (Snake Animation)</h4>
                  <p>
                    أنشئ الملف <code className="text-purple-300 font-mono">.github/workflows/snake.yml</code> من تبويب Workflows.
                  </p>
                  <p>
                    اذهب إلى تبويب <strong>Actions</strong> في GitHub واضغط على <strong>Generate Snake Animation</strong> ثم شغّلها يدويًا (Run workflow) لأول مرة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-amber-400 text-sm">4. تثبيت أهم المشاريع (Pinned Repositories)</h4>
                  <p>
                    ثبّت مستودع <strong>RiyadhMetro-</strong> على واجهة بروفايلك لإبراز تطبيق المترو ومشاريعك الهندسية لزوار بروفايلك وجهات التوظيف.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
