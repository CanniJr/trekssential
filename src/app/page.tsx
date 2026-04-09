"use client";

import { useRouter } from "next/navigation";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const router = useRouter();

  const handleSearch = (origin: string, destination: string) => {
    // This changes the URL in the browser!
    console.log(destination);
    router.push(`/trip/${destination}`);
  };

  return (
    <main className="bg-canvas min-h-screen text-text-main px-4 py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="text-center mb-6 flex flex-col gap-4 w-full">
          <h1 className="text-3xl font-bold text-text-main">Where to next?</h1>
          <p className="text-text-main/80 mb-4">
            Get your minimalist travel necessities quick-sheet.
          </p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
    </main>
  );
}
