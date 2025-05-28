import FiltersSidebar from "./FiltersSidebar";
import BrandsList from "./BrandsList";

export default function MainContent() {
  return (
    <div className="bg-white ...">
    <div className="max-w-7xl mx-auto px-8 py-10 flex gap-10">
      {/* Sidebar */}
      <div className="w-64 shrink-0 sticky top-24 h-fit">
  <FiltersSidebar />
</div>

      {/* Brands List */}
      <div className="flex-1">
        <BrandsList />
      </div>
    </div>
    </div>
  );
}
