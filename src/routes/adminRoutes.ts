import express from 'express';
import { addItem, viewItems } from '../controllers/adminController';
import { userViewItems, bookItems } from '../controllers/userController';


const adminRouter = express.Router();


// Admin Routes
adminRouter.post('/add-item', addItem);
adminRouter.get('/view-items', viewItems);


export default adminRouter;
