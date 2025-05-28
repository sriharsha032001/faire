// SignupCTA.tsx
import { Check } from "lucide-react";

export default function SignupCTA() {
  return (
    <section className="bg-[#635f48] text-white py-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-serif mb-7 font-normal">
          Ready to start buying<br />wholesale online?
        </h2>
        <ul className="mb-8 space-y-2 text-lg text-left">
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            60-day payment terms
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            Free returns on all opening orders
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            Unique products curated for your store
          </li>
        </ul>
        <button className="bg-white text-[#635f48] px-8 py-3 text-lg font-medium rounded mt-2 hover:bg-gray-100">
          Sign Up to Shop
        </button>
      </div>
    </section>
  );
}
