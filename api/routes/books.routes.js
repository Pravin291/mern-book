import express from 'express'
import { bookPost, deleteBook, getAllBooks, getSingleBook, updateBooks } from '../controller/books.controller.js';
import { verifyToken } from '../utils/verifyuser.js';

const router = express.Router();

router.post('/bookpost',bookPost)
router.get('/getAllBooks',getAllBooks)
router.get('/getsinglebook/:bookId',getSingleBook)
router.put('/updatebook/:bookId',updateBooks)
router.delete('/deletebook/:bookId',deleteBook)

export default router;