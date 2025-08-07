import React, { useMemo } from "react";
import { ROULETTE_ITEMS } from "../roulette/data";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";

function countStat(cards: RouletteItem[]) {
  return cards.reduce((counts, card) => {
    const typeCard = card.type;
    counts[typeCard] = (counts[typeCard] || 0) + 1;
    return counts;
  }, {} as Record<RouletteItem["type"], number>);
}
function CardStatistic({ cards }: { cards: RouletteItem[] }) {
  const last100Cards = cards.slice(-100);

  const typeStat = useMemo(() => countStat(last100Cards), [last100Cards]);

  return (
    <div className="flex w-[700px] ">
      <p className="text-white">LAST 100</p>
      <ul className="flex w-[500px] space-between">
        {Object.entries(typeStat).map(([type, count], index) => {
          const currentElem = ROULETTE_ITEMS.find((item) => item.type === type);

          return (
            <li
              key={index}
              style={{
                background: currentElem?.background,
                width: "auto",
                minWidth: 30,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: 5
              }}
            >
              <span>
                <Image
                  src={currentElem?.icon || ""}
                  alt="icon"
                  width={16}
                  height={16}
                  className="ml-0"
                />{" "}
              </span>
              <span className="ml-5 text-white">{count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardStatistic;
