import connection from '../models/connection';
import Order from '../interfaces/order.interface';
import OrderModel from '../models/orders.model';

class OrdersService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }
  
  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result as Order[];
  }
}

export default OrdersService;
