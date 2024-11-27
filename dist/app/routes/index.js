"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slider_route_1 = require("../modules/slider/slider.route");
const gallery_route_1 = require("../modules/galleryItem/gallery.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/slider',
        route: slider_route_1.SliderRoutes,
    },
    {
        path: '/gallery-item',
        route: gallery_route_1.GalleryItemRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
