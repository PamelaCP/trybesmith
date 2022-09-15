import connection from '../models/connection';

import UsersModel from '../models/users.model';

import User from '../interfaces/user.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(body: User): Promise<User> {
    const result = await this.model.create(body);
    return result;
  }
}

export default UsersService;