import { useState, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { Search, Sparkles, Globe } from "lucide-react";
import CosmicCanvas from "~/components/scene/CosmicCanvas";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Aetherion | Begin Your Ascent" },
    { name: "description", content: "The Primordial Threshold of Human Potential." },
  ];
};

export default function Index() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Background */}
      <Suspense fallback={<div className="bg-void absolute inset-0" />}>
        <CosmicCanvas />
      </Suspense>

      {/* Navigation Overlay */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-saffron to-gold">
          AETHERION
        </div>
        <div className="flex gap-4">
          <Link to="/dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">Nexus</Link>
          <Link to="/archive" className="text-sm text-gray-300 hover:text-white transition-colors">Archive</Link>
          <Button variant="outline" size="sm" className="h-8">Login</Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl mb-2">
            The Eternal Oracle
          </h1>
          <p className="text-xl text-gray-400 font-light italic">
            "अनन्त सम्भावनाको खोजी" (Exploring Infinite Possibility)
          </p>
        </motion.div>

        {/* Input Nexus */}
        <motion.form 
          onSubmit={handleSearch}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-2xl relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lapis to-saffron rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-2">
            <Search className="w-6 h-6 text-gray-400 ml-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What reality do you wish to manifest? / तपाई के चाहनुहुन्छ?"
              className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-4 py-3 text-lg"
            />
            <Button variant="himalayan" type="submit">
              Ignite
            </Button>
          </div>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-8"
        >
          <span className="flex items-center gap-1"><Sparkles size={14} className="text-gold"/> AI-Orchestrated</span>
          <span className="flex items-center gap-1"><Globe size={14} className="text-lapis"/> Nepali & Global Support</span>
        </motion.div>
      </main>
    </div>
  );
}
