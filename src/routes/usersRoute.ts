import { Router } from 'express';
import UsersController from '../controllers/Users.Controller';

const router = Router();

const User = new UsersController();

router.post('/users', User.create);
// router.get('/users', Product.getAll);

export default router;