import React from "react";
import { Link } from "react-router-dom";
import promoImage from '../assets/Book_Images/book_promo.png'
export default function PromoBanner() {
  return (
    <div className="mt-16 py-12 bg-purple-200 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            {new Date().getFullYear()} National Book Awards for Fiction
            ShortList
          </h2>

          <Link to={"/shop"} className=" block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promo
            </button>
          </Link>
        </div>
        <div>
            <img src={promoImage} className="w-96"/>
        </div>
      </div>
    </div>
  );
}
