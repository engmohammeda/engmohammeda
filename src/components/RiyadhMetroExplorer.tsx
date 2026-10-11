import React, { useState, useMemo } from 'react';
import { 
  METRO_LINES, 
  METRO_STATIONS, 
  findOptimalRoute, 
  MetroStation, 
  MetroLine,
  DEVELOPER_PROFILE 
} from '../data/portfolioData';
import { 
  Train, 
  ArrowRight, 
  ArrowRightLeft, 
  Clock, 
  Navigation, 
  Info, 
  CheckCircle2, 
  ExternalLink, 
  Compass, 
  Sparkles,
  MapPin,
  Search,
  Wifi,
  Car,
  Plane,
  Building
} from 'lucide-react';

export const RiyadhMetroExplorer: React.FC = () => {
  const [originId, setOriginId] = useState<string>('st-airport-t12');
  const [destinationId, setDestinationId] = useState<string>('st-olaya');
  const [selectedLineId, setSelectedLineId] = useState<string>('all');
  const [selectedStation, setSelectedStation] = useState<MetroStation | null>(METRO_STATIONS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate route
  const routeResult = useMemo(() => {
    return findOptimalRoute(originId, destinationId);
  }, [originId, destinationId]);

  const handleSwap = () => {
    const temp = originId;
    setOriginId(destinationId);
    setDestinationId(temp);
  };

  const filteredStations = useMemo(() => {
    return METRO_STATIONS.filter(st => {
      const matchesSearch = 
        st.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.nameAr.includes(searchQuery) ||
        st.district.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLine = 
        selectedLineId === 'all' || st.lines.includes(selectedLineId);

      return matchesSearch && matchesLine;
    });
  }, [searchQuery, selectedLineId]);

  const activeLine = useMemo(() => {
    return METRO_LINES.find(l => l.id === selectedLineId) || null;
  }, [selectedLineId]);

  const originStation = METRO_STATIONS.find(s => s.id === originId);
  const destStation = METRO_STATIONS.find(s => s.id === destinationId);

  return (
    <div className="space-y-8">
      {/* Header banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-sky-950/40 border border-emerald-800/40 p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Train className="w-64 h-64 text-emerald-400" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Train className="w-3.5 h-3.5" />
            <span>Project Spotlight &bull; Riyadh Metro Transit Navigator</span>
          </div>

          <h2 className="text-3xl font-bold text-white tracking-tight">
            Riyadh Metro Interactive Navigator &amp; Pathfinding Engine
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            Designed and built by <span className="text-white font-medium">{DEVELOPER_PROFILE.name}</span>. Explore Riyadh’s rapid transit rail network spanning 6 lines and 176 km. Calculate optimal station routes with transfers, inspect terminal connections, and view station amenities.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={DEVELOPER_PROFILE.metroDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>Original Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/engmohammeda/RiyadhMetro-"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Route Planner & Station Inspector (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Journey Planner Card */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-white text-sm">Trip Pathfinding Engine</h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                BFS Algorithm
              </span>
            </div>

            {/* Origin & Destination Selectors */}
            <div className="space-y-3">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                  Origin Station (نقطة الانطلاق)
                </label>
                <select
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  {METRO_STATIONS.map((station) => (
                    <option key={station.id} value={station.id}>
                      {station.nameEn} - {station.nameAr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-1">
                <button
                  onClick={handleSwap}
                  className="p-1.5 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white transition-all hover:rotate-180"
                  title="Swap Origin and Destination"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                  Destination Station (محطة الوصول)
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  {METRO_STATIONS.map((station) => (
                    <option key={station.id} value={station.id}>
                      {station.nameEn} - {station.nameAr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Trip Presets */}
            <div className="pt-1">
              <span className="text-[10px] text-slate-400 block mb-1.5 uppercase tracking-wider">Quick Presets:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => { setOriginId('st-airport-t12'); setDestinationId('st-olaya'); }}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 cursor-pointer"
                >
                  ✈️ Airport &rarr; Olaya
                </button>
                <button
                  onClick={() => { setOriginId('st-ksu'); setDestinationId('st-qasr-hokm'); }}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 cursor-pointer"
                >
                  🎓 KSU &rarr; Qasr Al Hokm
                </button>
                <button
                  onClick={() => { setOriginId('st-kafd'); setDestinationId('st-national-museum'); }}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 cursor-pointer"
                >
                  💼 KAFD &rarr; National Museum
                </button>
              </div>
            </div>

            {/* Journey Summary Box */}
            {routeResult && (
              <div className="rounded-xl bg-slate-950/80 border border-emerald-500/30 p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Travel Time</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">
                      ~{routeResult.estimatedMinutes} min
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Total Stops</span>
                    <span className="text-base font-bold text-white font-mono">
                      {routeResult.totalStops}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Transfers</span>
                    <span className="text-base font-bold text-amber-400 font-mono">
                      {routeResult.transfers}
                    </span>
                  </div>
                </div>

                {/* Step Itinerary */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    Navigation Steps:
                  </span>
                  {routeResult.steps.map((step, idx) => {
                    const st = METRO_STATIONS.find(s => s.id === step.stationId);
                    const lineInfo = METRO_LINES.find(l => l.id === step.line);
                    return (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="flex flex-col items-center mt-0.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: lineInfo?.color || '#10b981' }}
                          />
                          {idx < routeResult.steps.length - 1 && (
                            <div className="w-0.5 h-5 bg-slate-800" />
                          )}
                        </div>
                        <div className="flex-1 pb-1">
                          <p className="font-medium text-white">{step.instruction}</p>
                          {st && (
                            <p className="text-[10px] text-slate-400 font-mono">
                              District: {st.district} &bull; {st.lines.map(l => l.toUpperCase()).join('/')}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Selected Station Details Card */}
          {selectedStation && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Station Inspector
                </span>
                {selectedStation.isInterchange && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    Major Interchange
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">{selectedStation.nameEn}</h4>
                <p className="text-sm font-medium text-emerald-400">{selectedStation.nameAr}</p>
                <p className="text-xs text-slate-400 mt-0.5">District: {selectedStation.district}</p>
              </div>

              {/* Lines passing through */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Connecting Lines:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStation.lines.map((lId) => {
                    const lObj = METRO_LINES.find(l => l.id === lId);
                    return (
                      <span
                        key={lId}
                        className="px-2 py-0.5 rounded text-[11px] font-medium border"
                        style={{
                          backgroundColor: `${lObj?.color}20`,
                          borderColor: `${lObj?.color}60`,
                          color: lObj?.color || '#fff',
                        }}
                      >
                        {lObj?.nameEn.split(' - ')[0]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Station Facilities */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Amenities &amp; Access:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStation.facilities.map((fac, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[11px] flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {fac}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Set Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <button
                  onClick={() => setOriginId(selectedStation.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
                >
                  Set as Origin
                </button>
                <button
                  onClick={() => setDestinationId(selectedStation.id)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-xs font-medium text-white transition-colors cursor-pointer"
                >
                  Set as Destination
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Line Explorer & Visual Network (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Line Filter Tabs */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-white text-base">Network Lines &amp; Stations</h3>
                <p className="text-xs text-slate-400">Select a line to filter or click a station to inspect</p>
              </div>

              {/* Search station */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter station name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-600 w-full sm:w-48"
                />
              </div>
            </div>

            {/* Line Pill Buttons */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedLineId('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedLineId === 'all'
                    ? 'bg-slate-100 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                All Lines (6)
              </button>

              {METRO_LINES.map((line) => {
                const isActive = selectedLineId === line.id;
                return (
                  <button
                    key={line.id}
                    onClick={() => setSelectedLineId(line.id)}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border"
                    style={{
                      backgroundColor: isActive ? line.color : 'rgba(2, 6, 23, 0.7)',
                      borderColor: line.color,
                      color: isActive ? '#ffffff' : line.color,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: isActive ? '#ffffff' : line.color }}
                    />
                    <span>{line.nameEn.split(' - ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Line Meta if specific line selected */}
            {activeLine && (
              <div 
                className="p-3 rounded-xl border flex items-center justify-between text-xs"
                style={{
                  backgroundColor: `${activeLine.color}15`,
                  borderColor: `${activeLine.color}40`,
                }}
              >
                <div>
                  <span className="font-bold text-white block">{activeLine.nameEn}</span>
                  <span className="text-slate-300">{activeLine.nameAr}</span>
                </div>
                <div className="text-right font-mono text-slate-300">
                  <span className="block font-semibold text-white">{activeLine.lengthKm} km</span>
                  <span>{activeLine.totalStations} Stations</span>
                </div>
              </div>
            )}

            {/* Station List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-1">
              {filteredStations.map((station) => {
                const isSelected = selectedStation?.id === station.id;
                const isOrigin = originId === station.id;
                const isDest = destinationId === station.id;

                return (
                  <div
                    key={station.id}
                    onClick={() => setSelectedStation(station)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="font-semibold text-white text-xs leading-tight">
                        {station.nameEn}
                      </span>
                      <div className="flex gap-1 shrink-0">
                        {isOrigin && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500 text-slate-950 font-bold">
                            ORIGIN
                          </span>
                        )}
                        {isDest && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-sky-500 text-slate-950 font-bold">
                            DEST
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 font-medium mb-2">
                      {station.nameAr}
                    </p>

                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-400">{station.district}</span>
                      <div className="flex gap-1">
                        {station.lines.map((l) => {
                          const lObj = METRO_LINES.find(line => line.id === l);
                          return (
                            <span
                              key={l}
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: lObj?.color || '#fff' }}
                              title={lObj?.nameEn}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Riyadh Metro System Technical Highlights */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Engineering &amp; System Specifications
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Total Network</span>
                <span className="text-sm font-bold text-white font-mono">176 km</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Lines</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">6 Lines</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Stations</span>
                <span className="text-sm font-bold text-cyan-400 font-mono">85 Total</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block">Automated</span>
                <span className="text-sm font-bold text-purple-400 font-mono">GoA4 Driverless</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              The Riyadh Metro is one of the world's largest turnkey transit infrastructure undertakings. This web app brings real-world algorithmic pathfinding, graph models, and intuitive interactive user interfaces to everyday passengers and urban explorers.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
