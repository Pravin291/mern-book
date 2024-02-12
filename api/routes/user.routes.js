import express from 'express';
import { deleteUser, getUser, signOut, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyuser.js';
const router = express.Router();

router.get('/getuser/:userId',verifyToken,getUser)
router.put('/userupdate/:userId',verifyToken,updateUser)
router.delete('/deleteuser/:userId',verifyToken,deleteUser)
router.get('/signout',signOut)

export default router;