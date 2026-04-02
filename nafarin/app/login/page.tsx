'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const GLogo = ({ className }: { className?: string }) => (
  <div className={`aspect-square w-16 md:w-20 ${className}`}>
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z"
        fill="none"
        stroke="#0047AB"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 68 50 L 50 50 L 50 72 L 68 72 L 68 50"
        fill="none"
        stroke="#0047AB"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 32 60 L 32 32 L 68 32"
        fill="none"
        stroke="#0047AB"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const KeypadButton = ({
  number,
  onClick,
}: {
  number: string;
  onClick: (num: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onClick(number)}
    className="group flex aspect-square h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-transparent text-xl font-light text-white transition-all duration-150 ease-in-out hover:scale-105 active:scale-95 active:bg-white/10"
  >
    <span className="opacity-80 transition-opacity group-hover:opacity-100">
      {number}
    </span>
  </button>
);

const NafarinLogin: NextPage = () => {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(''));
  const pinLength = 6;

  const handleKeypadClick = (num: string) => {
    // If the PIN is full, do nothing. This prevents overwriting existing digits.
    setPin((prevPin) => {
      const nextPin = [...prevPin];
      const emptyIndex = nextPin.findIndex((val) => val === '');
      if (emptyIndex !== -1) {
        nextPin[emptyIndex] = num;
      }
      return nextPin;
    });
  };

  const handleClear = () => {
    // Clear the entire PIN, unlike a backspace. This is safer for login screens.
    setPin(new Array(pinLength).fill(''));
  };

  const isPinComplete = pin.every((val) => val !== '');

  const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <>
      <Head>
        <title>GrocerIQ - Security Login</title>
      </Head>

      {/* Main Container: Full screen, light gray background */}
      <main
        className={`${inter.className} flex min-h-screen w-full items-center justify-center bg-[#F4F7FB] p-4 md:p-8`}
      >
        {/* The Card: Minimalist, split design */}
        <div className="flex w-full max-w-240 overflow-hidden rounded-lg bg-white shadow-2xl shadow-blue-900/10">
          
          {/* Left Side: Logo (Crisp white) */}
          <div className="flex w-full items-center justify-center bg-white p-12 md:w-1/2 md:p-16">
            {/* The Logo: Using the procedural GLogo component */}
            <GLogo className="max-w-30" />
          </div>

          {/* Right Side: Keypad Entry (Rich Cobalt Blue) */}
          <div className="w-full bg-[#0047AB] p-12 md:w-1/2 md:p-16">
            <div className="flex flex-col items-center">
              
              {/* Entry Code Label */}
              <h2 className="mb-6 text-sm font-light tracking-widest text-white/70">
                ENTRY CODE
              </h2>

              {/* Input Display Area with Glowing Dot/Separator */}
              <div className="relative mb-12 flex w-full max-w-sm flex-col items-center">
                
                {/* Visual PIN Dots */}
                <div className="flex space-x-3">
                  {[...Array(pinLength)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-full border border-blue-100 transition-colors duration-150 ${
                        pin[i] !== '' ? 'bg-white' : 'bg-transparent'
                      }`}
                    ></div>
                  ))}
                </div>

              </div>

              {/* The Keypad Grid */}
              <div className="mb-12 grid grid-cols-3 gap-6">
                {keypadNumbers.map((num) => (
                  <KeypadButton
                    key={num}
                    number={num}
                    onClick={handleKeypadClick}
                  />
                ))}
              </div>

              {/* Login Button with conditional styling and clear action */}
              <div className="flex w-full flex-col items-center space-y-4">
                <button
                  type="submit"
                  disabled={!isPinComplete}
                  className={`w-full max-w-sm rounded-lg py-3.5 text-lg font-medium tracking-wide transition-all ${
                    isPinComplete
                      ? 'bg-[#3CC4FC] text-white hover:bg-[#34ADDF] active:scale-[0.98]'
                      : 'cursor-not-allowed bg-blue-300 text-blue-100'
                  }`}
                >
                  LOGIN
                </button>
                
                {/* Small "Clear" helper text */}
                <button 
                  type="button" 
                  onClick={handleClear}
                  className="text-xs font-light text-white/50 hover:text-white/80"
                >
                    Clear Input
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default NafarinLogin;