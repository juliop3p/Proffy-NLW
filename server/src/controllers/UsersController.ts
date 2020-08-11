import { Request, Response } from 'express';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';

import db from '../database/database';

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password_hash: string;
}

class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const trx = await db.transaction();

    try {
      if (!(await schema.isValid(req.body))) {
        await trx.rollback();
        return res.status(400).json({ error: 'Validation fails' });
      }

      const { name, lastname, email, password } = req.body;

      const password_hash = await bcrypt.hash(password, 8);

      const user = await trx('users').insert({
        name,
        lastname,
        email,
        password_hash,
      });

      await trx.commit();

      return res.status(201).json(user);
    } catch (err) {
      await trx.rollback();
      return res.status(400).json({ error: 'Operation failed' });
    }
  }
}

export default new UsersController();
