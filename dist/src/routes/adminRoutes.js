"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../../../src/controllers/adminController");
const adminRouter = express_1.default.Router();
// Admin Routes
adminRouter.post('/add-item', adminController_1.addItem);
adminRouter.get('/view-items', adminController_1.viewItems);
exports.default = adminRouter;
