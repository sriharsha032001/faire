import { Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#f8f7f4] border-b">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Breadcrumbs */}
        <nav className="text-gray-500 text-sm flex items-center gap-2 mb-3">
          <span>All Brands</span>
          <span className="mx-1">{'>'}</span>
          <span>All European brands</span>
        </nav>
        {/* Heading */}
        <h1 className="text-5xl font-serif font-semibold text-gray-800 mb-3">All European brands</h1>
        {/* Subtitle */}
        <p className="text-xl text-gray-700 mb-6">
          Shop independent brands from around the world at wholesale prices.
        </p>
        {/* Callout link */}
        <div className="flex items-center gap-2 mt-2">
          <Lock className="w-5 h-5 text-gray-600" />
          <a href="#" className="text-base text-gray-700 underline hover:text-blue-800">
            Unlock wholesale pricing
          </a>
        </div>
      </div>
    </section>
  );
}
