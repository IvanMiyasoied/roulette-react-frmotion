import React from "react";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";

function RouletteHistory({ cards }:{cards:RouletteItem[]}) {
         const lastTenCards = cards.slice(-10);
  return (
    <>
      
      <ul className="flex">
        {lastTenCards .map((card,index) => {
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
    </>
  );
}

export default RouletteHistory;
