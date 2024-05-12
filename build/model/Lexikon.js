"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexikon = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LexikonSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    size: { type: String, required: false },
    likes: { type: String, required: false }
});
exports.Lexikon = mongoose_1.default.model('Lexikon', LexikonSchema);
