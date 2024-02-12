import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Modal, Table } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
export default function ManageBooks() {
    const navigate = useNavigate()
  const [allBooks, setAllBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/book/getAllBooks`
        );
        const data = await response.json();
        setAllBooks(data.book);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBook = async () => {

    setShowModal(false);
    try {
      const res = await fetch(
        `/api/book/deletebook/${bookIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      }
      if (res.ok) {
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit1 = ()=>{
        navigate('/editbook')
  }
  return (
    <div className="px-4 my-12 ">
   
      <h2 className="mb-8 text-3xl font-bold flex justify-center">Manage Your Books</h2>
      {showAlert && (
        <Alert className="mt-5" color="success">
          Book Deleted successfully
        </Alert>
      )}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Book Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage Book</span>
          </Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{`\u20B9 ${book.bookPrice}`}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3"
                  to={`/dashboard/editbook/${book._id}`}
               >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setBookIdToDelete(book._id);
                  }}
                  className="bg-red-600 px-4 font-semibold text-white rounded-sm hover:bg-red-900 "
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this book?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteBook}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
