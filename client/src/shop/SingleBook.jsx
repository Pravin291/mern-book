import React from "react";
import { useLoaderData } from "react-router-dom";

export default function SingleBook() {
  const { bookTitle, bookDescription, imageURL, bookPrice } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <div>
        <img src={imageURL} alt="book_image" className="h-96" />
      </div>
      <div>
        <h2>{bookTitle}</h2>
        <p>{bookDescription}</p>
        <p>
          {`\u20B9`}
          {bookPrice}
        </p>
      </div>
    </div>
  );
}
