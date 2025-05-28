"use client";

import Image from "next/image";
import React, { useState } from "react";
import { householdItems } from "./items";

export default function Home() {
  const randomFacts = [
    "Did you know that honey never spoils?",
    "Bananas are berries, but strawberries aren't!",
    "Octopuses have three hearts and blue blood.",
    "Wombat poop is cube-shaped!",
    "A group of flamingos is called a 'flamboyance.'",
  ];

  const randomSongs = [
    "🎵 Bohemian Rhapsody - Queen",
    "🎵 Blinding Lights - The Weeknd",
    "🎵 Shape of You - Ed Sheeran",
    "🎵 Billie Jean - Michael Jackson",
    "🎵 Rolling in the Deep - Adele",
  ];

  const randomQuotes = [
    "💬 “The only limit to our realization of tomorrow is our doubts of today.” – FDR",
    "💬 “In the middle of difficulty lies opportunity.” – Albert Einstein",
    "💬 “It always seems impossible until it’s done.” – Nelson Mandela",
    "💬 “Be yourself; everyone else is already taken.” – Oscar Wilde",
    "💬 “Happiness depends upon ourselves.” – Aristotle",
  ];

  const [fact, setFact] = useState("");
  const [song, setSong] = useState("");
  const [quote, setQuote] = useState("");

  const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];



  const [item, setItem] = useState("");


  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * householdItems.length);
    const item = householdItems[randomIndex];
    setItem(`${item.name}: ${item.fact}`);
  }



  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
        {/* Button Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
          <button
            onClick={() => setFact(getRandom(randomFacts))}
            className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get a random fact
          </button>
          <button
            onClick={() => setSong(getRandom(randomSongs))}
            className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Suggest a song
          </button>
          <button
            onClick={() => setQuote(getRandom(randomQuotes))}
            className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Play a quote
          </button>
          <button
            onClick={() => {
              setFact("");
              setSong("");
              setQuote("");
            }}
            className=""
          >
            x Clear 
            
          </button>

          <button
            onClick={getRandomItem}
            className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get a random household item
          </button>
        </div>

        {/* Display Results */}
        <div className="flex flex-col items-center gap-4 text-center max-w-xl">
          {fact && <p className="text-lg text-gray-700">{fact}</p>}
          {song && <p className="text-lg text-gray-700">{song}</p>}
          {quote && <p className="text-lg text-gray-700">{quote}</p>}
          {item && <p className="text-lg text-gray-700">{item}</p>}
        </div>



      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer links */}
      </footer>
    </div>
  );
}
