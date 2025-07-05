import React from "react";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";

function ThreeGreenPrize({ cards }: { cards: RouletteItem[] }) {
  return (
    <div className="flex place-content-center content-between mt-[50px] gap-[100px]">
      <p className="text-white">
        <Image src={"/poker-chip.svg"} alt="icon" width={16} height={16} />
      </p>
      <ul className="flex">
        {cards.map((card, index) => {
          return (
            <li
              key={index}
              style={{ background: card.background }}
              className="min-w-[50px] w-[50px] h-[50px] border border-[#FFFFFF33] flex justify-center items-center "
            >
              <Image
                src={card.icon}
                alt="icon"
                width={20}
                height={20}
                
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ThreeGreenPrize;
