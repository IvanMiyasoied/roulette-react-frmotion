import React, { useMemo } from "react";
import { ROULETTE_ITEMS, WINNER_CARD_ITEMS } from "../roulette/data";
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
      {Object.entries(typeStat).map(([type,count],index) => (


        <li key={index}
          style={{
            background: WINNER_CARD_ITEMS[0].background,
            width: 30,
            placeContent: "center",
            borderRadius: 5,
          }}
        >
          <Image
            src={ROULETTE_ITEMS[0].icon}
            alt="icon"
            width={16}
            height={16}
            className="ml-1.5"
          /> {type}: {count}
        </li>
      ))}
        {/* <li className="text-white">numb</li>
        <li
          style={{
            background: WINNER_CARD_ITEMS[1].background,
            width: 30,
            placeContent: "center",
            borderRadius: 5,
          }}
        >
          <Image
            src={ROULETTE_ITEMS[1].icon}
            alt="icon"
            width={16}
            height={16}
            className="ml-1.5"
          />
        </li>
        <li className="text-white">numb</li>
        <li
          style={{
            background: WINNER_CARD_ITEMS[2].background,
            width: 30,
            placeContent: "center",
            borderRadius: 5,
          }}
        >
          <Image
            src={ROULETTE_ITEMS[2].icon}
            alt="icon"
            width={16}
            height={16}
            className="ml-1.5"
          />
        </li>
        <li className="text-white">numb</li>
        <li
          style={{
            background: WINNER_CARD_ITEMS[3].background,
            width: 30,
            placeContent: "center",
            borderRadius: 5,
          }}
        >
          <Image
            src={ROULETTE_ITEMS[3].icon}
            alt="icon"
            width={16}
            height={16}
            className="ml-1.5"
          />
        </li>
        <li className="text-white">numb</li> */}
      </ul>
    </div>
  );
}

export default CardStatistic;
