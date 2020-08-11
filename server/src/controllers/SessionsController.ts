import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import * as Yup from 'yup';

import db from '../database/database';

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password_hash: string;
}

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const [userExist] = await db('users')
      .select()
      .from<User>('users')
      .where({ email });

    console.log(email, password);
    if (!userExist) {
      return res.status(400).json({ error: 'e-mail/password incorrect' });
    }

    if (!(await compare(password, userExist.password_hash))) {
      return res.status(400).json({ error: 'e-mail/password incorrect' });
    }

    return res.status(201).json({
      id: userExist.id,
      name: userExist.name,
      lastname: userExist.lastname,
      email: userExist.email,
      token: jwt.sign(
        { id: userExist.id },
        process.env.SECRET || 'supersecret',
        {
          expiresIn: '7d',
        }
      ),
    });
  }
}

export default new SessionsController();
