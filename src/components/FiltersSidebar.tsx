export default function FiltersSidebar() {
    return (
      <aside className="bg-white min-h-screen p-6">
        {/* This heading scrolls away normally */}
        <h2 className="text-3xl font-serif mb-8">All brands</h2>
        
        {/* Only this part sticks */}
        <div className="sticky top-24 bg-white z-20 pb-4"> {/* Adjust top-24 as needed for navbar height */}
          <h2 className="text-2xl font-serif font-normal mb-8">Filters</h2>
          {/* Brand Values */}
          <div className="mb-8">
            <div className="font-medium mb-2">Brand values</div>
            <div className="flex flex-col gap-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Eco-friendly <span className="text-gray-400 text-sm">100+</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Gives back <span className="text-gray-400 text-sm">100+</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Handmade <span className="text-gray-400 text-sm">100+</span>
              </label>
              <a href="#" className="text-gray-700 underline text-sm mt-1">Show more</a>
            </div>
          </div>
          <hr className="my-5" />
          {/* Lead Time */}
          <div>
            <div className="font-medium mb-2">Lead time</div>
            <div className="flex flex-col gap-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="radio" name="leadtime" className="w-4 h-4" /> 3 days or less <span className="text-gray-400 text-sm">100+</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="leadtime" className="w-4 h-4" /> 6 days or less <span className="text-gray-400 text-sm">100+</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="leadtime" className="w-4 h-4" /> 9 days or less <span className="text-gray-400 text-sm">1,000+</span>
              </label>
              <a href="#" className="text-gray-700 underline text-sm mt-1">Show more</a>
            </div>
          </div>
          <hr className="my-5" />
          {/* Add more filter sections as needed */}
        </div>
      </aside>
    );
  }
  