"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = exports.GalleryItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.GalleryItemSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    img: {
        type: {
            url: { type: String, required: true },
            height: { type: String, required: true },
            width: { type: String, required: true },
        }
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.GalleryItem = (0, mongoose_1.model)('GalleryItem', exports.GalleryItemSchema);
