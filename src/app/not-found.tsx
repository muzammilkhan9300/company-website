import Link from "next/link";
import { Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pureWhite flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div
          className="w-16 h-16 rounded-2xl text-white mx-auto flex items-center justify-center shadow-brand"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
        >
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
        
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
          ERROR 404
        </span>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-darkText tracking-tight" style={{ fontWeight: 800 }}>
          Page Not Found
        </h1>

        <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist, has been removed, or may have moved to another URL.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-white font-semibold px-8 py-4 rounded-full text-base shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
          >
            <Home className="w-5 h-5 mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
