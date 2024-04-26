"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
// User Routes
userRouter.get('/view-items', userController_1.userViewItems);
userRouter.post('/book-items', userController_1.bookItems);
exports.default = userRouter;
