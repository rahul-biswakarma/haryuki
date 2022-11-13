import Link from "next/link";

import { inter, spaceGrotesk, kronoOne } from "./Fonts";

export default function Navbar() {
  return (
    <div className="sticky top-[0px] left-[0px] z-50">
      <div className="flex flex-row items-center justify-between w-full h-nav backdrop-blur-md border-b-2 border-gray-900 bg-black/60 text-white px-x-pad">
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
              className="mt-[-4px] ml[4px] rounded px-[0.7rem] py-[0.2rem] h-5 font-mono font-medium text-gray-500 text-[12px] border border-gray-600 contrast-more:text-current contrast-more:border-current items-center gap-1 hidden sm:flex opacity-100 hover:cursor-pointer hover:text-[#1ef347] hover:border-[#1ef347] hover:border-l-[3px] hover:border-b-[3px] translate-x-[-3px] translate-y-[3px]"
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
        </div>
      </div>
    </div>
  );
}
