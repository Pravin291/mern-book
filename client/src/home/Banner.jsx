import { Button } from "flowbite-react";
import React from "react";
import BannerCard from './BannerCard'


export default function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-purple-200 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books <span className="text-blue-700"> for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Explore a vast collection of books for every reader, from
            bestsellers to hidden gems, all in one place.Find your next
            adventure within our curated selection of books, spanning genres
            from mystery to romance.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book..."
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ">
              Search
            </button>
          </div>
        </div>
        <div>
            <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
}
