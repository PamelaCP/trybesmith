import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';

const router = Router();

const Product = new ProductsController();

router.post('/products', Product.create);
router.get('/products', Product.getAll);

export default router;