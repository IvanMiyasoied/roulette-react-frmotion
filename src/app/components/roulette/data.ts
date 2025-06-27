import { RouletteItem } from "@/app/types.ts";
import { v4 as uuidv4 } from "uuid";



export const ROULETTE_ITEMS:RouletteItem[] = [
  { icon: "/linesLight.svg", background: "#343843", id: uuidv4(), isGreen: 'false' },
  { icon: "/linesDark.svg", background: " #FF4242", id: uuidv4(), isGreen: 'false' },
  { icon: "/linesLight.svg", background: " #47FF69", id: uuidv4(), isGreen: 'true' },
  { icon: "/jokerHatLight.svg", background: "#343843", id: uuidv4(), isGreen: 'false' },
  { icon: "/jokerHatDark.svg", background: " #FF4242", id: uuidv4(), isGreen: 'false' },
];


export const WINNER_CARD_ITEMS = [
  {name:'BET ON RED', value: 'PAY 2X' , background: '#FF4242'},
  {name:'BET ON GREEN', value: 'PAY 14X' , background: '#47FF69'},
  {name:'BET ON BLACK', value: 'PAY 2X' , background: '#343843'},
  {name:'BET ON JOKER', value: 'PAY 7X' , background: '#7246D9'}
]