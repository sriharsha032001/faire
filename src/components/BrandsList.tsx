import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Dummy data (example for 16)
const brands = [
  {
    id: 1,
    name: "Mad Beauty USA LLC",
    avatar: "/mad_b.webp",
    rating: 4.9,
    reviews: 120,
    minOrder: 150,
    country: "USA",
    products: ["/1.webp", "/1.1.webp", "/1.2.webp", "/1.3.webp"],
  },
  {
    id: 2,
    name: "Brut Homeware",
    avatar: "/brut_h.webp",
    rating: 4.9,
    reviews: 27,
    minOrder: 218.78,
    country: "Netherlands",
    products: ["/2.webp", "/2.1.webp", "/2.2.webp", "/2.3.webp"],
  },
  {
    id: 3,
    name: "to:from",
    avatar: "/to_From.webp",
    rating: 4.9,
    reviews: 30,
    minOrder: 158.14,
    country: "Spain",
    products: ["/3.webp", "/3.1.webp", "/3.2.webp", "/3.3.webp"],
  },
  {
    id: 4,
    name: "cai & jo",
    avatar: "/cai.webp",
    rating: 5.0,
    reviews: 264,
    minOrder: 150,
    country: "United Kingdom",
    products: ["/4.webp", "/4.1.webp", "/4.2.webp", "/4.3.webp"],
  },
  {
    id: 5,
    name: "Agapée Jewelry",
    avatar: "/agapee.webp",
    rating: 4.9,
    reviews: 179,
    minOrder: 220.74,
    country: "France",
    products: ["/5.webp", "/5.1.webp", "/5.2.webp", "/5.3.webp"],
  },
  {
    id: 6,
    name: "Lisa Angel",
    avatar: "/lisa.webp",
    rating: 4.9,
    reviews: 581,
    minOrder: 127.05,
    country: "United Kingdom",
    products: ["/6.webp", "/6.1.webp", "/6.2.webp", "/6.3.webp"],
  },
  {
    id: 7,
    name: "Zao Makeup",
    avatar: "/zao.webp",
    rating: 5,
    reviews: 12,
    minOrder: 150,
    country: "France",
    products: ["/7.webp", "/7.1.webp", "/7.2.webp", "/7.3.webp"],
  },
  {
    id: 8,
    name: "GINANDGER",
    avatar: "/gina.webp",
    rating: 4.9,
    reviews: 210,
    minOrder: 108.94,
    country: "France",
    products: ["/8.webp", "/8.1.webp", "/8.2.webp", "/8.3.webp"],
  },
  {
    id: 9,
    name: "Hello Ferretti",
    avatar: "/heb.webp",
    rating: 4.8,
    reviews: 80,
    minOrder: 250,
    country: "Spain",
    products: ["/9.webp", "/9.1.webp", "/9.2.webp", "/9.3.webp"],
  },
  {
    id: 10,
    name: "Pink Stories",
    avatar: "/pink.webp",
    rating: 4.8,
    reviews: 181,
    minOrder: 150,
    country: "Germany",
    products: ["/10.webp", "/10.1.webp", "/10.2.webp", "/10.3.webp"],
  },
  {
    id: 11,
    name: "Cocopup London",
    avatar: "/coco.webp",
    rating: 4.9,
    reviews: 112,
    minOrder: 185.99,
    country: "United Kingdom",
    products: ["/11.webp", "/11.1.webp", "/11.2.webp", "/11.3.webp"],
  },
  {
    id: 12,
    name: "Cotton Twist",
    avatar: "/cotton.webp",
    rating: 5,
    reviews: 164,
    minOrder: 126.79,
    country: "United Kingdom",
    products: ["/12.webp", "/12.1.webp", "/12.2.webp", "/12.3.webp"],
  },
  {
    id: 13,
    name: "Bastille",
    avatar: "/bas.webp",
    rating: 5,
    reviews: 22,
    minOrder: 1065.12,
    country: "France",
    products: ["/13.webp", "/13.1.webp", "/13.2.webp", "/13.3.webp"],
  },
  {
    id: 14,
    name: "VIE",
    avatar: "/vie.webp",
    rating: 4.9,
    reviews: 672,
    minOrder: 100,
    country: "United Kingdom",
    products: ["/14.webp", "/14.1.webp", "/14.2.webp", "/14.3.webp"],
  },
  {
    id: 15,
    name: "Omnis Pura",
    avatar: "/omnis.webp",
    rating: 4.9,
    reviews: 74,
    minOrder: 159.3,
    country: "Turkey",
    products: ["/15.webp", "/15.1.webp", "/15.2.webp", "/15.3.webp"],
  },
  {
    id: 16,
    name: "Mad Beauty",
    avatar: "/mad.webp",
    rating: 4.8,
    reviews: 86,
    minOrder: 250,
    country: "Netherlands",
    products: ["/16.webp", "/16.1.webp", "/16.2.webp", "/16.3.webp"],
  },
];

export default function BrandsList() {
  // Each brand's carousel state (keeps track of which images are visible)
  const [startIndexes, setStartIndexes] = useState<number[]>(
    Array(brands.length).fill(0)
  );

  function scrollLeft(brandIdx: number) {
    setStartIndexes((prev) => {
      const copy = [...prev];
      copy[brandIdx] = Math.max(0, copy[brandIdx] - 1);
      return copy;
    });
  }

  function scrollRight(brandIdx: number) {
    setStartIndexes((prev) => {
      const copy = [...prev];
      copy[brandIdx] = Math.min(
        brands[brandIdx].products.length - 3,
        copy[brandIdx] + 1
      );
      return copy;
    });
  }

  return (
    <div className="bg-white ...">
    <div>
      <div className="flex flex-col gap-14">
        {brands.map((brand, idx) => {
          // carousel state for this brand
          const start = startIndexes[idx] || 0;
          const canScrollLeft = start > 0;
          const canScrollRight = start < brand.products.length - 3;

          return (
            <div
              key={brand.id}
              className="flex gap-8 items-start border-b pb-10"
            >
              {/* Brand Info */}
              <div className="w-64 flex flex-col items-start">
                <img
                  src={brand.avatar}
                  alt={brand.name}
                  className="w-14 h-14 rounded-full border mb-2"
                />
                <div className="text-lg font-semibold">{brand.name}</div>
                <div className="flex items-center text-sm text-gray-700 gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400" fill="#facc15" />
                  {brand.rating}
                  <a href="#" className="text-blue-600 underline ml-1">
                    ({brand.reviews})
                  </a>
                  <span className="mx-1">·</span>
                  <span>${brand.minOrder} min</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Ships from {brand.country}
                </div>
              </div>
              {/* Products Carousel */}
              <div className="flex gap-0 flex-1 items-center">
                {/* Left Arrow */}
                {canScrollLeft ? (
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 mr-2"
                    onClick={() => scrollLeft(idx)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="w-8 h-8 mr-2" />
                )}
                {/* Visible Images */}
                <div className="flex gap-6">
                  {brand.products.slice(start, start + 3).map((url, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={url}
                      alt={`Product ${imgIdx + 1}`}
                      className="w-36 h-36 object-cover rounded border"
                    />
                  ))}
                </div>
                {/* Right Arrow */}
                {canScrollRight ? (
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 ml-2"
                    onClick={() => scrollRight(idx)}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="w-8 h-8 ml-2" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
