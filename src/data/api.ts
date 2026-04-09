import { DestinationData } from "./mockDb";

export async function fetchCountryData(
  countryCode: string,
): Promise<DestinationData | null> {
  try {
    // 1. Hit the live API using the 2-letter country code
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
    );

    if (!response.ok) throw new Error("Failed to fetch country");

    const [data] = await response.json();

    // 2. Extract the dynamic currency info
    const currencyCode = Object.keys(data.currencies || {})[0] || "Unknown";
    const currencyName = data.currencies?.[currencyCode]?.name || "Unknown";
    const languages = Object.values(data.languages || {}).join(", ");

    // 3. Map the live data into the existing Card format!
    return {
      destinationName: data.name.common,
      cards: {
        basics: {
          title: "🌎 Country Basics",
          dataPoints: [
            { label: "Capital", value: data.capital?.[0] || "N/A" },
            { label: "Languages", value: languages },
          ],
          link: {
            text: `View ${data.name.common} on Google Maps`,
            url: data.maps.googleMaps,
          },
        },
        money: {
          title: "💵 Currency",
          dataPoints: [
            {
              label: "Official Currency",
              value: `${currencyName} (${currencyCode})`,
            },
            { label: "Region", value: data.subregion || data.region },
          ],
          link: {
            text: "Current Exchange Rates ↗",
            url: "https://www.xe.com/currencyconverter/",
          },
        },
      },
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
