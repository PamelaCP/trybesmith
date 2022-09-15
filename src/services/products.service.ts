import connection from '../models/connection';
import Product from '../interfaces/product.interface';
import ProductsModel from '../models/products.model';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(body: Product): Promise<Product> {
    const result = await this.model.create(body);
    return result;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}
export default ProductsService;