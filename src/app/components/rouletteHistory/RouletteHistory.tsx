import React from "react";
import Image from "next/image";

function RouletteHistory({ cards }) {
  return (
    <>
      <ul className="flex">
        {cards.map((card,index) => {
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
