import { Search, Globe } from "lucide-react";

const navLinks = [
  "Featured",
  "New",
  "Home decor",
  "Food & drink",
  "Women",
  "Beauty & wellness",
  "Jewelry",
  "Paper & novelty",
  "Kids & baby",
  "Pets",
  "Men",
];

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="w-full flex items-center gap-6 pt-3 pb-1 px-8 max-w-7xl mx-auto">
        {/* Faire Logo flush left */}
        <div className="flex-shrink-0 ml-[6px]">
          <img src="/src/assets/logo.svg" alt="Faire Logo" className="w-[90px] h-8" />
        </div>
        {/* Search Bar: grows to fill all space between logo and EN-US */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center w-full border border-[#e6e6e6] rounded-full bg-[#f8f7f4] px-0 py-[4px]">
            <input
              id="top-search"
              placeholder="Search wholesale products or brands"
              aria-label="Search products or brands"
              autoComplete="off"
              data-test-id="searchBarInput"
              className="QKkvk"
              value=""
            />
            <Search className="w-5 h-5 text-gray-400 mx-4" />
          </div>
        </div>
        {/* Right Links (EN-US and others) */}
        <div className="flex items-center gap-6 text-sm flex-shrink-0 ml-3">
          <span className="flex items-center gap-1 text-gray-700">
            <Globe className="w-5 h-5" /> EN-US
          </span>
          <a href="#" className="text-gray-700 hover:underline">Blog</a>
          <a href="#" className="text-gray-700 hover:underline">Sell on Faire</a>
          <a href="#" className="text-gray-700 hover:underline">Sign in</a>
          <button className="bg-black hover:bg-gray-900 text-white font-medium px-5 py-1.5 rounded transition-colors shadow">
            Sign up
          </button>
        </div>
      </div>
      {/* Categories Bar */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-5 pt-1 text-[1.04rem] font-light text-gray-700">
          {navLinks.map((link, idx) => (
            <a
              key={link}
              href="#"
              className={`pb-1 ${idx === 2 ? 'border-b-2 border-gray-800 font-normal' : ''} hover:underline`}
              style={{ textUnderlineOffset: 4 }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
