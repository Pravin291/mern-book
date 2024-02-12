import {
  Alert,
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import {  useDispatch, useSelector } from "react-redux";


export default function EditBook() {
  const { bookId} = useParams();

  const [showAlert, setShowAlert] = useState(false);
  const [error, setShowError] = useState(false);
  const currentUser = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const [bookdata, setBookData] = useState({
    bookTitle:"",
    authorName:"",
    bookURL:"",
    imageURL:"",
    bookDescription:"",
    bookPDFURL:"",
    bookPrice:"",
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
  }, []);

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Fantasy",
    "Romance",
    "Biography",
    "Self-Help",
    "History",
    "Poetry",
    "Cookbooks",
    "Travel",
    "Science",
    "Health",
    "Business",
    "Art",
    "Children's",
    "Young Adult",
    "Graphic Novels",
    "Religion",
    "Philosophy",
    "Technology",
    "Education",
    "Sports",
    "Music",
    "Comics",
    "Horror",
    "Memoir",
    "Crafts & Hobbies",
    "Parenting",
    "Humor",
    "Reference",
    "Social Sciences",
    "Psychology",
    "Anthology",
    "Drama",
    "Essays",
    "Short Stories",
    "Adventure",
    "Crime",
    "Autobiography",
    "Historical Fiction",
    "Satire",
    "Classic",
    "Dystopian",
    "Utopian",
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(
    bookCategories[0]
  );

  const handleCategoryChange = (event) => {
    setSelectBookCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookURL = form.bookURL.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookPrice = form.bookPrice.value;

    const bookObj = {
      bookTitle,
      authorName,
      bookURL,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      bookPrice,
    };



    try {
      const res = await fetch(`/api/book/updatebook/${bookId}/${currentUser.currentUser._id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(bookObj),
      });
      await res.json();
 
      if (res.ok) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      console.log(error);
    }
  };

  return (
    <div className="px-4 my-12 mt-16 mx-28">
      <h2 className="mb-8 text-3xl font-bold flex items-center justify-center">
        Update Book
      </h2>
      {showAlert && (
        <Alert className="mt-5" color="success">
          Book Update Successfully
        </Alert>
      )}
      {error && (
        <Alert className="mt-5" color="failure">
          Something went wrong
        </Alert>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="lg:w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title write here..."
              required
              defaultValue={bookdata.bookTitle}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Book Auther" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Auther Name"
              required
              defaultValue={bookdata.authorName}
            />
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookURL" value="Book URL" />
            </div>
            <TextInput
              id="bookURL"
              name="bookURL"
              type="text"
              placeholder="Book URL"
              required
              defaultValue={bookdata.bookURL}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Image URL"
              required
              defaultValue={bookdata.imageURL}
            />
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectBookCategory}
              onChange={handleCategoryChange}
            >
              {bookCategories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPrice" value="Book Price" />
            </div>
            <TextInput
              id="bookPrice"
              name="bookPrice"
              type="text"
              placeholder="Book Price"
              required
              defaultValue={bookdata.bookPrice}
            />
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              type="text"
              placeholder="Book PDF URL"
              required
              defaultValue={bookdata.bookPDFURL}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              className="w-full"
              id="bookDescription"
              name="bookDescription"
              placeholder="Book Description..."
              required
              rows={6}
              defaultValue={bookdata.bookDescription}
            ></Textarea>
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
}
