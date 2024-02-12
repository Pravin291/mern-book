import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleBook() {
  const { bookId } = useParams();
  const [bookdata, setBookData] = useState({
    bookTitle: "",
    bookDescription: "",
    imageURL: "",
    bookPrice: "",
    bookPDFURL: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/book/getsinglebook/${bookId}`);
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bookId]);
  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col md:flex-row gap-10 mb-10">
      <div>
        <img src={bookdata.imageURL} alt="book_image" className="" />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl font-bold">{bookdata.bookTitle}</h2>
        <p className="text-gray-500 text-semibold">
          {bookdata.bookDescription}
        </p>
        <p className="text-gray-600 font-semibold ">
          Book Price  {" "}
          {`\u20B9`}
          {bookdata.bookPrice}
        </p>
        <Link
          to={bookdata.bookPDFURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-5 w-full" color="success">
            Download Book
          </Button>
        </Link>
      </div>
    </div>
  );
}
