import { ChevronLeft, ChevronRight } from "lucide-react";

const exploreData = [
  {
    img: "/kp_1.webp",
    caption: "Shop home decor",
    link: "#"
  },
  {
    img: "/kp_2.webp",
    caption: "Brands not on Amazon",
    link: "#"
  },
  {
    img: "/kp_3.webp",
    caption: "Shop women",
    link: "#"
  },
];

// Since there are only 3, arrows are always visible but disabled
export default function KeepExploring() {
  return (
    <div className="bg-white ...">
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-serif font-normal text-gray-800 text-center flex-1">
            Keep exploring
          </h2>
          <a href="#" className="text-gray-700 underline text-sm ml-4">
            All Brands
          </a>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            className="absolute left-[-40px] z-10 p-2 bg-white rounded-full border text-gray-300 cursor-default"
            aria-disabled
            tabIndex={-1}
            style={{ top: "40%" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Cards */}
          <div className="flex gap-6 w-full justify-center">
            {exploreData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-80">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-80 h-80 object-cover rounded"
                />
                <a
                  href={item.link}
                  className="mt-4 text-base text-gray-700 underline underline-offset-2 hover:text-black"
                >
                  {item.caption}
                </a>
              </div>
            ))}
          </div>
          {/* Right arrow */}
          <button
            className="absolute right-[-40px] z-10 p-2 bg-white rounded-full border text-gray-300 cursor-default"
            aria-disabled
            tabIndex={-1}
            style={{ top: "40%" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div> 
    </section>
    </div>
  );
}
