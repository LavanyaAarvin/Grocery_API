import { Request, Response } from 'express';
import { GroceryItem } from '../models/GroceryItem';
import { addGroceryItem, viewGroceryItems } from '../services/groceryService';


// Admin Controller
export const addItem = async (req: Request, res: Response) => {
    try {
      const { name, price, quantity } = req.body;
      const newItem = await addGroceryItem(name, price, quantity);
      res.status(201).json(newItem);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const viewItems = async (req: Request, res: Response) => {
    try {
      const items = await viewGroceryItems();
      res.json(items);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };