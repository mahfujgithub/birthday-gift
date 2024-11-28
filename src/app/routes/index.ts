import express from 'express';
import { SliderRoutes } from '../modules/slider/slider.route';
import { GalleryRoutes } from '../modules/gallery/gallery.route';
import { StoreyRoutes } from '../modules/story/storey.route';
import { VideoRoutes } from '../modules/video/video.route';
import { FontRoutes } from '../modules/font/font.route';

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
  {
    path: '/video',
    route: VideoRoutes,
  },
  {
    path: '/font',
    route: FontRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
