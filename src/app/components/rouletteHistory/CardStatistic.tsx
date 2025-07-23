import React, { useMemo } from "react";
import {
  ROULETTE_ITEMS,
} from "../roulette/data";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";

function CardStatistic({ cards }: { cards: RouletteItem[] }) {
  function countStat(cards) {
    return cards.reduce((counts, card) => {
      const typeCard = card.type ?? "undefined";
      counts[typeCard] = (counts[typeCard] || 0) + 1;
      return counts;
    }, {});
  }

  const typeStat = useMemo(() => countStat(cards), [cards]);

  
  

  return (
    <div className="flex w-[700px]">
      <p className="text-white">LAST 100</p>
      <ul className="flex w-[500px] space-between">
        {Object.entries(typeStat).map(([type, count], index) => (
             <li
            key={index}
            style={{
              background: ROULETTE_ITEMS[index].background,
              width: 30,
              placeContent: "center",
              borderRadius: 5,
            }}
          >
            <Image
              src={ROULETTE_ITEMS[index].icon}
              alt="icon"
              width={16}
              height={16}
              className="ml-1.5"
            />{" "}
            {count}
          </li>
        ))}
       
      </ul>
    </div>
  );
}

export default CardStatistic;
