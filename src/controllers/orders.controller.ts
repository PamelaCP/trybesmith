import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrdersController {
  constructor(private service = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    console.log(result);
    return res.status(200).json(result);
  };
}

export default OrdersController;