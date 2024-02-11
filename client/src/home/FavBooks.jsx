import React from "react";
import favBookImg from "../assets/Book_Images/favBook.jpg";
import { Link } from "react-router-dom";
export default function FavBooks() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div
        className="md:w-1/2  bg-gray-200 p-6 rounded-lg text-center hover:bg-purple-300 hover:transition-all hover:shadow-md
        hover:shadow-black/50 flex justify-center items-center"
      >
        <img
          src={favBookImg}
          alt="fav_images"
          className="rounded md:w-11/12"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite{" "}
          <span className="text-blue-700"> Book Here !!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Discover your next favorite read on our website! Explore a diverse
          collection of captivating books curated just for you. Plus, glimpse
          our top-rated favorite book to inspire your reading journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-berween gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">750+</h3>
            <p className="text-base">Book Listing</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">600+</h3>
            <p className="text-base">Register User</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>

        <Link to={"/shop"} className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More...
          </button>
        </Link>
      </div>
    </div>
  );
}
