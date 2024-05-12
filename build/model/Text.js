"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TextSchema = new mongoose_1.default.Schema({
    text: { type: String, required: false }
});
exports.Text = mongoose_1.default.model('Text', TextSchema);
