"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RouletteItem } from "@/app/types.ts";
import { Box, Modal, Typography } from "@mui/material";

export interface ThreeGreenPrizeProps {
  cards: RouletteItem [];
  clearCards: () => void;
}

function ThreeGreenPrize({ cards, clearCards }: ThreeGreenPrizeProps) {
       const [isOpenModal,setOpenModal] = useState(false)

       const handleClose = () => {
           setOpenModal(false)
           clearCards();
       }

       useEffect(() => {
        if (cards.length === 3) {
          setOpenModal(true)
          
        }
       },[cards])


  return (
    <>
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
                <Image src={card.icon} alt="icon" width={20} height={20} />
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{width: 400, height: 200,background: 'white', justifySelf: 'center', marginTop: 40}} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Jack pot!!
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ThreeGreenPrize;
