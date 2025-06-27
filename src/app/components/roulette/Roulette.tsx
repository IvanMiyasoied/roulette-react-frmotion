"use client";

import React, { useEffect, useState } from "react";
import { ROULETTE_ITEMS } from "./data";
import Image from "next/image";
import {
  motion,
  useAnimation,
} from "framer-motion";
import { RouletteItem } from "@/app/types.ts";
import RouletteHistory from "../rouletteHistory/RouletteHistory";

export function Roulette() {
  const CARD_WIDTH = 100;
  const TOTAL_ITEMS = ROULETTE_ITEMS.length;
  const spinLoops = 5;
  const TOTAL_DISTANCE = TOTAL_ITEMS * CARD_WIDTH * spinLoops;
  const STRIP_LENGTH_NEEDED =
    Math.floor(TOTAL_DISTANCE / (TOTAL_ITEMS * CARD_WIDTH)) + 2;
  const ROULETTE_WIDTH = 1280;
  const controls = useAnimation();
  const [cardHistory, setCardHistory] = useState<RouletteItem[]>([]);
  // const [latestX, setLatestX] = useState(0);

  // const x = useMotionValue(0);
  // useMotionValueEvent(x, "change", (latest) => {
  //   setLatestX(latest);
  // });

  async function startSpin() {
    const randomIndexCard = Math.floor(Math.random() * TOTAL_ITEMS);

    const centrePosition = Math.floor(ROULETTE_WIDTH / 2 - CARD_WIDTH / 2);
    const targetCardDistance =
      TOTAL_DISTANCE + randomIndexCard * CARD_WIDTH - centrePosition;
    await controls.stop();
    await controls.set({x:0})

    await controls.start({
      x: -targetCardDistance,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    });

    setCardHistory((prev) => {
      return [...prev, ROULETTE_ITEMS[randomIndexCard]];
    });
  }

  useEffect(() => {
    const timerId = setInterval(startSpin, 5000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <RouletteHistory cards={cardHistory} />
      <div className="relative border border-solid w-[1280px] overflow-hidden place-self-center mt-[100px]">
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center z-10">
          <div className=" w-[100px] h-[100px] border border-solid content-center ">

          <p className="text-amber-50">{"ROLLING IN:"}</p>
          </div>
        </div>
        <motion.ul className="flex" animate={controls}>
          {Array(STRIP_LENGTH_NEEDED)
            .fill(null)
            .flatMap(() => ROULETTE_ITEMS)
            .map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ background: item.background }}
                  className="min-w-[100px] w-[100px] h-[100px] border border-[#FFFFFF33] content-center "
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
    </>
  );
}
