import { Request, Response } from 'express';
import db from '../database/database';

class ConnectionsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.status(201).json({ total });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id,
    });

    return res.status(201).json();
  }
}

export default new ConnectionsController();
