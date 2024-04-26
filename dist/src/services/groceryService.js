"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewGroceryItems = exports.addGroceryItem = void 0;
const database_1 = __importDefault(require("../../../database"));
const addGroceryItem = (name, price, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield database_1.default.connect();
    try {
        const result = yield client.query('INSERT INTO grocery_items (name, price, quantity) VALUES ($1, $2, $3) RETURNING *', [name, price, quantity]);
        return result.rows[0];
    }
    finally {
        client.release();
    }
});
exports.addGroceryItem = addGroceryItem;
const viewGroceryItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield database_1.default.connect();
    try {
        const result = yield client.query('SELECT * FROM grocery_items');
        return result.rows;
    }
    finally {
        client.release();
    }
});
exports.viewGroceryItems = viewGroceryItems;
// Implement other service functions similarly
