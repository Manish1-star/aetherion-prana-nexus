import { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Activity, Brain, Mountain, Zap } from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Aetherion | Atman-Prism Nexus" },
];

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg bg-${color}/20 text-${color}`}>
        <Icon size={20} className={color === 'saffron' ? 'text-orange-500' : 'text-blue-400'} />
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-void p-6 md:p-12">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Namaste, Traveler.</h1>
          <p className="text-gray-400">Your Atman-Prism coherence is at 94%.</p>
        </div>
        <Button variant="himalayan">Daily Calibration</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Prana Score" value="98.2" icon={Zap} color="saffron" />
        <StatCard title="Mental Clarity" value="Optimal" icon={Brain} color="lapis" />
        <StatCard title="Community Impact" value="Rank 12" icon={Mountain} color="gold" />
        <StatCard title="Biometrics" value="Syncing..." icon={Activity} color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Oracle Predictions</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lapis to-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Potential Trajectory #{i}</h4>
                    <p className="text-sm text-gray-400">Based on your recent search for "Regenerative Farming in Mustang"...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-lapis/20 to-transparent border border-lapis/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Today's Wisdom</h3>
            <p className="text-gray-300 italic mb-4">"The mind is everything. What you think you become." - Buddha</p>
            <div className="text-xs text-saffron uppercase tracking-widest">Dharma Absolute</div>
          </div>
        </div>
      </div>
    </div>
  );
}
