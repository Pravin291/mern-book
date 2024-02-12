import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

export default function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `api/book/getAllBooks`
        );
        const data = await response.json();
        setBooks(data.book);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  


  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center">All Books are here...</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 mt-12 gap-6 my-12">
        {books.map((book) => (
          <Card className="max-w-sm" imgSrc={book.imageURL}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>

              <button  className="bg-blue-700 font-semibold text-white py-2 rounded">
                Buy Now
              </button>
        
          </Card>
        ))}
      </div>
    </div>
  );
}
