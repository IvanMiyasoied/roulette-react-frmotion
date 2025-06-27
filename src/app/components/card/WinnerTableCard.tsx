import React from 'react'
import { WINNER_CARD_ITEMS } from '../roulette/data'

function WinnerTableCard() {
  return (
    <div className='border border-solid w-[300px] h-[300px] ml-[100px] mt-[100px]'>
        <button className='ml-[100px] border border-solid'>{WINNER_CARD_ITEMS[0].name}</button>
        <p className='ml-[100px] border w-[100px]'>`4 bets total`</p>
        <ul className='ml-[100px]'>
            <li>User</li>
            <li>User</li>
            <li>User</li>
            <li>User</li>
        </ul>
    </div>
  )
}

export default WinnerTableCard