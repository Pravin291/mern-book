import Book from "../models/books.model.js";
import { errorHandler } from "../utils/error.js";

export const bookPost = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }
  const {
    bookTitle,
    authorName,
    bookURL,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
    bookPrice,
  } = req.body;

  try {
    await Book.create({
      bookTitle,
      authorName,
      bookURL,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      bookPrice,
    });

    return res.status(201).json({
      success: true,
      message: "Book posted successfully",
    });
  } catch (error) {
    next(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) ;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const book = await Book.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.bookTitle && { bookTitle: req.query.bookTitle }),
      ...(req.query.authorName && { authorName: req.query.authorName }),
      ...(req.query.bookId && { _id: req.query.bookId }),
      ...(req.query.searchTerm && {
        $or: [
          { bookTitle: { $regex: req.query.searchTerm, $options: "i" } },
          { authorName: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalBooks = await Book.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthBooks = await Book.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      book,
      totalBooks,
      lastMonthBooks,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleBook = async (req, res) => {
  const { bookId } = req.params;
  await Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(book);
    })
    .catch((err) => res.status(500).json({ error: "Error fetching book" }));
};

export const updateBooks = async (req, res,next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this post"));
  }
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: {
          bookTitle: req.body.bookTitle,
          authorName: req.body.authorName,
          bookURL: req.body.bookURL,
          imageURL: req.body.imageURL,
          category: req.body.category,
          bookDescription: req.body.bookDescription,
          bookPDFURL: req.body.bookPDFURL,
          bookPrice: req.body.bookPrice,
        },
      },

      { new: true }
    );

    res.status(200).json({
      success: true,
      updateBook,
    });
  } catch (error) {
    console.error("Error updating book:", error.message);
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId);
    res.status(200).json("Book has been deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
};
