"use client";

import InfoCard from "../components/InfoCard";
import { mockDb } from "../data/mockDb";
import SearchForm from "../components/SearchForm";
import { useState } from "react";

export default function Home() {
  const [currentOrigin, setCurrentOrigin] = useState("US");
  const [currentDestination, setCurrentDestination] = useState("IS");

  const searchHandle = (origin: string, destination: string) => {
    console.log("Searching for trips from", origin, "to", destination);
    setCurrentOrigin(origin);
    setCurrentDestination(destination);
  };

  const tripData = mockDb[currentOrigin]?.[currentDestination];
  const cardsArray = tripData ? Object.values(tripData.cards) : [];
  return (
    <main className="bg-canvas min-h-screen text-text-main px-4 py-12 flex flex-col items-center">
      {/* Container to mimic the mobile screen width */}
      <div className="w-full max-w-md flex flex-col gap-6">
        {/* The Search Section */}
        <div className="text-center mb-6 flex flex-col gap-4 w-full">
          <h1 className="text-3xl font-bold text-text-main">Where to next?</h1>
          <SearchForm onSearch={searchHandle} />
        </div>

        {tripData && (
          <h2 className="text-2xl font-bold mt-4 mb-2">
            Your {tripData.destinationName} Quick Sheet
          </h2>
        )}
        {/* The Quick-Sheet */}
        <div className="flex flex-col gap-4">
          {cardsArray.length > 0 ? (
            cardsArray.map((card, index) =>
              // If the card is undefined for some reason, don't render it
              card ? <InfoCard key={index} card={card} /> : null,
            )
          ) : (
            <p className="text-center text-text-main/70 mt-8">
              No data available for this route yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
