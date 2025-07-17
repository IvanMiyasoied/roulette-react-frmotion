import React from "react";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";

function ThreeGreenPrize({ cards }: { cards: RouletteItem[] }) {
  return (
    <div className="flex place-content-center  content-between mt-[50px] gap-[100px]">
      <p className="text-white">
        <Image src={"/poker-chip.svg"} alt="icon" width={16} height={16} />
      </p>
      <ul className="flex border ">
        {cards.map((card, index) => {
          return (
            <li
              key={index}
              style={{ background: card.background }}
              className="min-w-[50px] w-[50px] h-[50px]  flex justify-center items-center z-10"
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
