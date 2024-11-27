import express from 'express';
import { SliderRoutes } from '../modules/slider/slider.route';
import { GalleryRoutes } from '../modules/gallery/gallery.route';
import { StoreyRoutes } from '../modules/story/storey.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/slider',
    route: SliderRoutes,
  },
  {
    path: '/gallery',
    route: GalleryRoutes,
  },
  {
    path: '/storey',
    route: StoreyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
