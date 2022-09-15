import { Router } from 'express';
import ProductsController from '../controllers/Product.controller';

const router = Router();

const productsController = new ProductsController();

// const booksController = new BooksController();

router.post('/products', productsController.create);

export default router;