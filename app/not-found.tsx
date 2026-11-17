import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-7xl font-extrabold text-[#4393b6]">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] text-white font-medium shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
