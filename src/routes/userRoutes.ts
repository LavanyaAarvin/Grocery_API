import express from 'express';
import { addItem, viewItems } from '../controllers/adminController';
import { userViewItems, bookItems } from '../controllers/userController';


const userRouter = express.Router();


// User Routes
userRouter.get('/view-items', userViewItems);
userRouter.post('/book-items', bookItems);


export default userRouter;
