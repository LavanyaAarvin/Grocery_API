import { Request, Response } from 'express';
import { GroceryItem } from '../models/GroceryItem';
import { addGroceryItem, viewGroceryItems } from '../services/groceryService';


// User Controller
export const userViewItems = async (req: Request, res: Response) => {
    try {
      const items = await viewGroceryItems();
      res.json(items);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const bookItems = async (req: Request, res: Response) => {
    try {
      const itemsToBook = req.body.items;
      // Implement booking logic
      res.json({ message: 'Items booked successfully' });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };