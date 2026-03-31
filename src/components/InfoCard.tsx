import { CardData } from "../data/mockDb";

interface InfoCardProps {
  card: CardData;
}

export default function InfoCard({ card }: InfoCardProps) {
  return (
    <div className="bg-surface p-5 rounded-2xl flex flex-col gap-3">
      {/* Card Header */}
      <h2 className="text-xl font-bold text-text-main">{card.title}</h2>

      {/* The Core Data */}
      <div className="flex flex-col gap-2 text-text-main">
        {card.dataPoints.map((point, index) => (
          <p key={index} className="text-base leading-snug">
            <span className="font-bold">{point.label}: </span>
            {point.value}
          </p>
        ))}
      </div>

      {/* The Action Link */}
      <a
        href={card.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent text-right mt-1 font-medium hover:underline"
      >
        {card.link.text}
      </a>
    </div>
  );
}
