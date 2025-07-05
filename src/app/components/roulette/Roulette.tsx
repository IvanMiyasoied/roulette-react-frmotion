"use client";

import React, { useEffect, useRef, useState } from "react";
import { ROULETTE_ITEMS } from "./data";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { RouletteItem } from "@/app/types.ts";
import RouletteHistory from "../rouletteHistory/RouletteHistory";
import ThreeGreenPrize from "../card/ThreeGreenPrize";

export function Roulette() {
  const CARD_WIDTH = 100;
  const TOTAL_ITEMS = ROULETTE_ITEMS.length;
  const ROULETTE_WIDTH = 1280;
  const controls = useAnimation();
  const [cardHistory, setCardHistory] = useState<RouletteItem[]>([]);
  const [greenCards, setGreenCards] = useState<RouletteItem[]>([]);

  const duplicatedCards = Array(200)
    .fill(null)
    .flatMap(() => {
      return ROULETTE_ITEMS;
    });
  const currentCardIndexRef = useRef(0);

  async function startSpin() {
    const randomIndexCard =
      Math.floor(Math.random() * TOTAL_ITEMS) +
      currentCardIndexRef.current +
      35;
    currentCardIndexRef.current = randomIndexCard;
    const centrePosition = Math.floor(ROULETTE_WIDTH / 2 - CARD_WIDTH / 2);
    const targetCardDistance = randomIndexCard * CARD_WIDTH - centrePosition;
    await controls.stop();

    await controls.start({
      x: -targetCardDistance,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    });

    setCardHistory((prev) => {
      return [...prev, duplicatedCards[randomIndexCard]];
    });
    if (duplicatedCards[randomIndexCard].isGreen) {
      setGreenCards((prev) => {
        return [...prev, duplicatedCards[randomIndexCard]];
      });
    }
  }

  useEffect(() => {
    startSpin();
    const timerId = setInterval(startSpin, 5000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <RouletteHistory cards={cardHistory} />
      <div className="relative  w-[1280px] overflow-hidden place-self-center mt-[100px]">
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center z-10 bg-[linear-gradient(to_right,#2e2b2a_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%),linear-gradient(to_left,#2e2b2a_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%)] ">
          <div className=" w-[100px] h-[100px] border border-solid content-center ">
            <p className="text-amber-50">{"ROLLING IN:"}</p>
          </div>
        </div>
        <motion.ul className="flex " animate={controls}>
          {duplicatedCards.map((item, index) => {
            return (
              <li
                key={index}
                style={{ background: item.background }}
                className="min-w-[100px] w-[100px] h-[100px]  content-center "
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="place-self-center"
                />
              </li>
            );
          })}
        </motion.ul>
      </div>
      <ThreeGreenPrize cards={greenCards} />
    </>
  );
}
