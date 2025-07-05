import WinnerTableCard from "./components/card/WinnerTableCard";
import { WINNER_CARD_ITEMS } from "./components/roulette/data";
import { Roulette } from "./components/roulette/Roulette";

export default function Home() {
  return (
    <div >
      <Roulette />
      <div className="flex place-content-center">
        <WinnerTableCard
          background={WINNER_CARD_ITEMS[0].background}
          value={WINNER_CARD_ITEMS[0].value}
          name={WINNER_CARD_ITEMS[0].name}
        />
        <WinnerTableCard
          background={WINNER_CARD_ITEMS[1].background}
          value={WINNER_CARD_ITEMS[1].value}
          name={WINNER_CARD_ITEMS[1].name}
        />
        <WinnerTableCard
          background={WINNER_CARD_ITEMS[2].background}
          value={WINNER_CARD_ITEMS[2].value}
          name={WINNER_CARD_ITEMS[2].name}
        />
        <WinnerTableCard
          background={WINNER_CARD_ITEMS[3].background}
          value={WINNER_CARD_ITEMS[3].value}
          name={WINNER_CARD_ITEMS[3].name}
        />
      </div>
    </div>
  );
}
