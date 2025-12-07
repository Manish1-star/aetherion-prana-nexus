import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Search as SearchIcon } from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  return { query };
}

export default function SearchResults() {
  const { query } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-void text-white p-8">
      <Link to="/" className="text-gray-500 hover:text-white mb-8 block">&larr; Return to Oracle</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2">Manifesting Intent: <span className="text-saffron">"{query}"</span></h1>
        <p className="text-gray-400 mb-12">Analyzing 128+ multimodal signals across the Semantic Web...</p>
        
        <div className="grid gap-6">
          {/* Mock Results */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-saffron">
             <h2 className="text-xl font-bold mb-2">Constructed Path: Neural-Symbolic Mentorship</h2>
             <p className="text-gray-300">We have identified 3 "Sherpa" mentors in the Kathmandu Valley matching your vibration.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-lapis">
             <h2 className="text-xl font-bold mb-2">Resource Allocation: Smart Contract Ready</h2>
             <p className="text-gray-300">Deploying liquidity to support this intent via the Ethereum L2 Polygon chain.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
