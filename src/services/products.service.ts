import connection from '../models/connection';
import Produto from '../interfaces/product.interface';
import ProductsModel from '../models/products.model';

class ProductsServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(body: Produto): Promise<Produto> {
    const result = await this.model.create(body);
    return result;
  }
}

export default ProductsServices;