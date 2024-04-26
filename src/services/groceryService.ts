import { GroceryItem } from '../models/GroceryItem';
import pool from '../../database';

export const addGroceryItem = async (name: string, price: number, quantity: number): Promise<GroceryItem> => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO grocery_items (name, price, quantity) VALUES ($1, $2, $3) RETURNING *',
      [name, price, quantity]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

export const viewGroceryItems = async (): Promise<GroceryItem[]> => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM grocery_items');
    return result.rows;
  } finally {
    client.release();
  }
};

// Implement other service functions similarly
