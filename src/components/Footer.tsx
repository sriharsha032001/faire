import { Lock, Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 border-t">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:justify-between">
        {/* Left: Heading and button */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl font-serif text-gray-900 mb-8 leading-snug">
            The best selection of brands for your<br />store, all in one place
          </h2>
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-800 text-gray-900 rounded bg-transparent font-medium hover:bg-gray-50 transition">
            <Lock className="w-5 h-5" />
            Unlock wholesale pricing
          </button>
        </div>
        {/* Right: Links and Social */}
        <div className="flex flex-col md:flex-row gap-12 w-full md:w-auto">
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="text-gray-700 space-y-1">
              <li><a href="#">About us</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Explore</div>
            <ul className="text-gray-700 space-y-1">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Faire Markets</a></li>
              <li><a href="#">Sell on Faire</a></li>
              <li><a href="#">POS integration</a></li>
            </ul>
          </div>
          <div className="flex gap-5 items-start pt-6 md:pt-0 md:ml-8">
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="X"><X className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      {/* Legal */}
      <div className="max-w-7xl mx-auto px-8 py-7 border-t mt-10 text-gray-700 text-sm flex flex-col gap-1">
        <div>
          <span className="font-semibold">&copy;2025 Faire Wholesale, Inc.</span>
          {" "}
          <a href="#" className="hover:underline">Terms of Service</a> ·
          <a href="#" className="hover:underline ml-1">Privacy Policy</a> ·
          <a href="#" className="hover:underline ml-1">Cookie Policy</a> ·
          <a href="#" className="hover:underline ml-1">IP Policy</a> ·
          <a href="#" className="hover:underline ml-1">Accessibility Policy</a> ·
          <a href="#" className="hover:underline ml-1">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
