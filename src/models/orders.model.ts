import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

class Order {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<IOrder[]> {
    const querygetAll = `  SELECT od.id AS id,od.userId AS userId,
    JSON_ARRAYAGG(pd.id) AS productsIds FROM Trybesmith.Orders AS od
    INNER JOIN Trybesmith.Products AS pd on od.id = pd.orderId
    GROUP BY od.id ORDER BY od.userId;`;
    
    const [result] = await this.connection.execute(querygetAll);
    
    return result as IOrder[];
  }
}
export default Order;
