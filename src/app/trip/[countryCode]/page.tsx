import InfoCard from "../../../components/InfoCard";
import { fetchCountryData } from "../../../data/api";
import Link from "next/link";

interface tripParams {
  params: { countryCode: string };
}
export default async function TripPage({ params }: tripParams) {
  console.log("country code:", params.countryCode);
  // We await the data directly!
  const { countryCode } = await params; // await here is necessary since next.js 15
  const tripData = await fetchCountryData(countryCode);

  if (!tripData) {
    return (
      <main className="bg-canvas min-h-screen text-text-main p-8 flex flex-col items-center justify-center">
        <p>Could not find data for this destination.</p>
        <Link href="/" className="text-accent mt-4 underline">
          Go back home
        </Link>
      </main>
    );
  }

  const cardsArray = Object.values(tripData.cards);

  return (
    <main className="bg-canvas min-h-screen text-text-main px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col gap-6">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            className="text-accent hover:underline text-sm font-bold"
          >
            ← Back to Search
          </Link>
        </div>

        <h1 className="text-3xl font-bold">{tripData.destinationName}</h1>
        <p className="text-text-main/70 -mt-4 mb-2">Essential Quick-Sheet</p>

        {/* The Data Stack */}
        <div className="flex flex-col gap-4">
          {cardsArray.map((card, index) =>
            card ? <InfoCard key={index} card={card} /> : null,
          )}
        </div>
      </div>
    </main>
  );
}
