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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookItems = exports.userViewItems = void 0;
const groceryService_1 = require("../../../src/services/groceryService");
// User Controller
const userViewItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield (0, groceryService_1.viewGroceryItems)();
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.userViewItems = userViewItems;
const bookItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemsToBook = req.body.items;
        // Implement booking logic
        res.json({ message: 'Items booked successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.bookItems = bookItems;
