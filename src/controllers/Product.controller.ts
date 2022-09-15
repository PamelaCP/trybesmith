import { Request, Response } from 'express';

import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private service = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const Product = await this.service.create({ name, amount });
    res.status(201).json(Product);
  };
}

export default ProductsController;