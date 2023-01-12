import { Router } from 'express';
import loginControler from '../controllers/login.controller';

const router = Router();

const Login = new loginControler();

router.get('/login', Login.getAll);

export default router;