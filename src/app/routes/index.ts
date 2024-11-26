import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { StuffRoutes } from '../modules/stuff/stuff.route';
import { PostRouter } from '../modules/posts/post.route';
import { MenuRoutes } from '../modules/menu/menu.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/slider',
    route: UserRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
