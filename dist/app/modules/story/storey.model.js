"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreyItem = exports.StoreySchema = void 0;
const mongoose_1 = require("mongoose");
exports.StoreySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.StoreyItem = (0, mongoose_1.model)('Storey', exports.StoreySchema);
