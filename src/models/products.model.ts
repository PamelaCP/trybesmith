import { create } from "domain";
import { ResultSetHeader } from "mysql2";
import Pool from "mysql2/typings/mysql/lib/Pool";
import connection from "./connection";
import Product from '../types/products.type';

export default class ProductModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }
}

// Requisito 01 Cadastro Produto 

public async create(product: Product): Promise<ResultSetHeader> => {
    const result = await connection.execute<ResultSetHeader>('INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
    );
}

