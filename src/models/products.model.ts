import { ResultSetHeader } from "mysql2";
import Pool from "mysql2/typings/mysql/lib/Pool";


export default class ProductModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }
}


