import express from 'express';
import { SliderRoutes } from '../modules/slider/slider.route';
import { GalleryItemRoutes } from '../modules/gallery/gallery.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/slider',
    route: SliderRoutes,
  },
  {
    path: '/gallery-item',
    route: GalleryItemRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
