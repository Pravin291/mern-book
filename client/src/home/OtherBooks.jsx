import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

export default function OtherBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/book/getAllBooks`
        );
        const data = await response.json();
        setBooks(data.book.slice(6,15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
}
