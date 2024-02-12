import express from 'express'
import { bookPost, deleteBook, getAllBooks, getSingleBook, updateBooks } from '../controller/books.controller.js';
import { verifyToken } from '../utils/verifyuser.js';

const router = express.Router();

router.post('/bookpost',verifyToken,bookPost)
router.get('/getAllBooks',getAllBooks)
router.get('/getsinglebook/:bookId',getSingleBook)
router.put('/updatebook/:bookId/:userId',verifyToken,updateBooks)
router.delete('/deletebook/:bookId',verifyToken,deleteBook)

export default router;