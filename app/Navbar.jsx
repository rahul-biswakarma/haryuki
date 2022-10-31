import Link from "next/link";

import { Space_Grotesk, Inter, Krona_One } from "@next/font/google";

const inter = Inter();
const kronoOne = Krona_One({
  weight: "400",
});
const spaceGrotesk = Space_Grotesk();

export default function Navbar() {
  return (
    <div
      className={`sticky top-0 flex flex-row items-center justify-between left-0 w-full h-nav backdrop-blur-sm backdrop-opacity-5 border-b-2 border-gray-1000 bg-black text-white px-x-pad`}
    >
      <div
        className={`${spaceGrotesk.className} uppercase flex flex-row items-center gap-gap`}
      >
        <Link
          className={`${kronoOne.className} text-white font-bold hover:text-gray-100 text-[1.2rem]`}
          href="haryuki.vercel.app"
        >
          Haryuki
        </Link>
        <div id="algospace-container">
          <Link
            href="https://algospace.vercel.app"
            className="my-1.5 rounded px-[0.7rem] py-[0.2rem] h-5 font-mono font-medium text-gray-500 text-[12px] border border-gray-600 contrast-more:text-current contrast-more:border-current items-center gap-1 hidden sm:flex opacity-100 hover:cursor-pointer hover:text-[#1ef347] hover:border-[#1ef347]"
          >
            AlgoSpace
          </Link>
        </div>
      </div>
      <div
        className={`${inter.className} text-[14px] text-gray-300 flex flex-row gap-gap items-center hover:cursor-pointer`}
      >
        <div className="hover:text-white ">Categories</div>

        <Link className="hover:text-white " href="/about">
          About
        </Link>

        {/* Search Container */}
        <div className="relative md:w-64 hidden md:inline-block min-w-[250px] h-full">
          <div className="relative flex items-center text-gray-300">
            <input
              spellCheck="false"
              className="block w-full appearance-none rounded-lg transition-colors md:text-sm text-base leading-tight bg-gray-900 focus:bg-gray-800 placeholder:text-gray-500 px-[0.8rem] py-[0.5rem] focus:outline-none "
              type="search"
              placeholder="Search posts…"
            />
            <kbd className="absolute right-[0.5rem] my-1.5 select-none rounded px-[0.3rem] py-[0.15rem] h-5 font-mono font-medium text-gray-500 text-[10px] border border-gray-600 contrast-more:text-current contrast-more:border-current items-center gap-1 hidden sm:flex pointer-events-none opacity-100">
              CTRL K
            </kbd>
          </div>
        </div>

        <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
          <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
        </svg>
      </div>
    </div>
  );
}
