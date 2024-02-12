import { Alert, Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";

export default function UploadBook() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [showAlert,setShowAlert] = useState(false)
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

  const handleCategoryChange = (e) => {
    setSelectBookCategory(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(null);

      const updatedFormData = { ...formData, category: selectBookCategory };

      const res = await fetch("/api/book/bookpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        setShowAlert(true)
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold flex items-center justify-center">
        Upload Book
      </h2>
      {
        showAlert && <Alert className="mt-5" color="success">
          Book Posted Successfully
        </Alert>
      }
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            ></Textarea>
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}
