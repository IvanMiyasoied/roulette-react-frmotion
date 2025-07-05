import React from "react";


function WinnerTableCard({ background,value,name }) {
  return (
    <div className="border border-solid w-[300px] h-[200px] ml-[100px] mt-[100px]">
      <button
        className="w-full h-[50px] border border-solid rounded-lg"
        style={{ background: background }}
      >
        {name} {value}
      </button>
      <p className="w-full h-[50px] pl-1 bg-black text-white content-center">4 bets total</p>
      <ul className="w-full h-full grid grid-cols-1 gap-1 rounded-lg">
        <li className="bg-[#343843] text-white h-[50px] pl-1 content-center">User</li>
        <li className="bg-[#343843] text-white h-[50px] pl-1 content-center">User</li>
        <li className="bg-[#343843] text-white h-[50px] pl-1 content-center">User</li>
        <li className="bg-[#343843] text-white h-[50px] pl-1 content-center">User</li>
      </ul>
    </div>
  );
}

export default WinnerTableCard;
