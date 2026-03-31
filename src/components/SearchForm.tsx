"use client";

import { ChangeEvent, useState } from "react";

interface SearchFormProps {
  onSearch: (origin: string, destination: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [origin, setOrigin] = useState("US");
  const [destination, setDestination] = useState("IS");

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    // Log the selection to console just to prove it works!
    onSearch(origin, destination);
    console.log(`Generating Quick-Sheet for: ${origin} to ${destination}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      {/* Origin Dropdown US for now */}
      <select
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="w-full bg-surface text-text-main p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent appearance-none"
      >
        <option value="US">🇺🇸 I hold a passport from... US</option>
      </select>

      {/* Destination Dropdown currently hardcoded. Will add more later*/}
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full bg-surface text-text-main p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent appearance-none"
      >
        <option value="IS">🇮🇸 I am traveling to... Iceland</option>
        <option value="DK">🇩🇰 I am traveling to... Denmark</option>
        <option value="SE">🇸🇪 I am traveling to... Sweden</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-accent text-[#FAF8F5] font-bold text-lg p-4 rounded-2xl hover:opacity-90 transition-opacity mt-1"
      >
        Generate quick sheet
      </button>
    </form>
  );
}
