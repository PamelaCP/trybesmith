import { Router } from 'express';
import ProductsController from '../controllers/Product.controller';

const router = Router();

const Product = new ProductsController();

router.post('/products', Product.create);
router.get('/products', Product.getAll);

export default router;