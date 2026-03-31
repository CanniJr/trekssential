// --- TYPESCRIPT INTERFACES --- //

export interface DataPoint {
  label: string;
  value: string;
}

export interface ActionLink {
  text: string;
  url: string;
}

export interface CardData {
  title: string;
  dataPoints: DataPoint[];
  link: ActionLink;
}

export interface DestinationData {
  destinationName: string;
  cards: {
    border?: CardData;
    transit?: CardData;
    money?: CardData;
    tech?: CardData;
    culture?: CardData;
  };
}

// Database is a nested object: Origin -> Destination -> DestinationData
export type DatabaseSchema = Record<string, Record<string, DestinationData>>;

// --- MOCK DATABASE --- //

export const mockDb: DatabaseSchema = {
  US: {
    IS: {
      destinationName: "Iceland",
      cards: {
        border: {
          title: "Border & Entry",
          dataPoints: [
            { label: "Status", value: "Visa-Free 90 days" },
            {
              label: "Passport",
              value: "Must be valid for 3 months beyond departure",
            },
          ],
          link: {
            text: "Official Iceland Customs Portal",
            url: "https://skra.is/english/",
          },
        },
        transit: {
          title: "Airport Transit",
          dataPoints: [
            { label: "Airport", value: "Keflavík International (KEF)" },
            { label: "Best Option", value: "Flybus (45 mins, ~$30)" },
          ],
          link: {
            text: "Book Flybus Tickets",
            url: "https://www.re.is/tour/flybus/",
          },
        },
        money: {
          title: "Money & Tipping",
          dataPoints: [
            { label: "Currency", value: "Icelandic Króna (ISK)" },
            { label: "Tipping", value: "NOT REQUIRED or expected." },
          ],
          link: {
            text: "Current exchange rate",
            url: "https://www.xe.com/currencyconverter/",
          },
        },
        tech: {
          title: "Power & Tech",
          dataPoints: [
            { label: "Sockets", value: "Type C / F (Standard European)" },
            { label: "Data", value: "Recommend eSIM (Airalo, Saily, etc)" },
          ],
          link: {
            text: "eSIM Plans",
            url: "https://www.airalo.com/iceland-esim",
          },
        },
        culture: {
          title: "Cultural & Emergency",
          dataPoints: [
            { label: "Emergency", value: "112 (All services)" },
            {
              label: "Culture",
              value:
                "Never walk on the moss. Always shower naked before entering pools.",
            },
          ],
          link: {
            text: "Local Emergency Guidelines",
            url: "https://safetravel.is/",
          },
        },
      },
    },
    // You can add "DK" and "SE" here later following the same pattern!
  },
};
