import { useState, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { Search, Sparkles, Globe } from "lucide-react";
import CosmicBackground from "~/components/scene/CosmicBackground";  // यहाँ नाम CosmicBackground राखेको छ
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => [
  { title: "Aetherion | The Eternal Oracle" },
  { name: "description", content: "मानवीय क्षमताको अनन्त स्रोत" },
];

export default function Homepage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Cosmic Background */}
      <Suspense fallback={null}>
        <CosmicBackground />
      </Suspense>

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
        <div className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-saffron to-gold">
          AETHERION
        </div>
        <div className="flex gap-8 text-gray-300">
          <Link to="/dashboard" className="hover:text-white transition">Nexus</Link>
          <Link to="/archive" className="hover:text-white transition">Archive</Link>
          <Link to="/agora" className="hover:text-white transition">Agora</Link>
          <Button variant="outline">Enter</Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="z-10 text-center space-y-12 max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
            The Eternal Oracle
          </h1>
          <p className="text-2xl text-gray-300 mt-4 italic">
            "अनन्त सम्भावनाको खोजी"
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.form onSubmit={handleSearch} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-lapis to-saffron rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition" />
            <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
              <Search className="w-8 h-8 text-gray-400 ml-4" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="के साकार गर्न चाहनुहुन्छ? / What reality do you wish to manifest?"
                className="flex-1 bg-transparent text-xl px-4 focus:outline-none placeholder-gray-500 text-white"
              />
              <Button variant="himalayan" size="lg" className="px-12">
                Ignite
              </Button>
            </div>
          </div>
        </motion.form>

        <div className="flex gap-8 text-gray-400 text-sm">
          <span className="flex items-center gap-2"><Sparkles className="text-gold" /> AI-Orchestrated</span>
          <span className="flex items-center gap-2"><Globe className="text-lapis" /> Nepali & Global</span>
        </div>
      </main>
    </div>
  );
}
