import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { SimulationProvider } from './context/SimulationContext';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import DigitalTwinMap from './components/DigitalTwinMap';
import RoadClosurePanel from './components/RoadClosurePanel';
import ImpactReportView from './components/ImpactReportView';
import ScenarioComparison from './components/ScenarioComparison';
import AIAgentChat from './components/AIAgentChat';
import TrafficSignalTuner from './components/TrafficSignalTuner';
import TrafficChart from './components/TrafficChart';
import HistoryModal from './components/HistoryModal';

export default function App() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <LanguageProvider>
      <SimulationProvider>
        <div className="app-container">
          <Header onOpenHistory={() => setIsHistoryOpen(true)} />

          <main style={{ padding: '16px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Top Stat Cards */}
            <StatsOverview />

            {/* Main 3-Column Operations Center Layout */}
            <div className="dashboard-grid">
              {/* Left Column: Closure Controls & Signal Optimization */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <RoadClosurePanel />
                <TrafficSignalTuner />
              </div>

              {/* Middle Column: Interactive Digital Twin Map, Analytics Chart & Scenario Comparison */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <DigitalTwinMap />
                <TrafficChart />
                <ScenarioComparison />
              </div>

              {/* Right Column: AI Traffic Impact Report & AI City Agent */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ImpactReportView />
                <AIAgentChat />
              </div>
            </div>
          </main>

          {/* History Modal */}
          <HistoryModal
            isOpen={isHistoryOpen}
            onClose={() => setIsHistoryOpen(false)}
          />
        </div>
      </SimulationProvider>
    </LanguageProvider>
  );
}
