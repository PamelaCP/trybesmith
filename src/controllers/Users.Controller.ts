import { Request, Response } from 'express';

import UserService from '../services/users.service';

import jwtToken from '../middleware/token';

class UsersController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    // const user = req.body;
    const userCreated = await this.userService.create({ username, classe, level, password });
    const token = jwtToken.generateToken(username, classe, level, password);
    res.status(201).json({ token });
  };
}

export default UsersController;