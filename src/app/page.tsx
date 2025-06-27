import WinnerTableCard from "./components/card/WinnerTableCard";
import { Roulette } from "./components/roulette/Roulette";


export default function Home() {
  return (
    <>
      < Roulette />
      <div className="flex place-content-center">
      < WinnerTableCard />
      < WinnerTableCard />
      < WinnerTableCard />
      < WinnerTableCard />
      </div>
    </>
  );
}
