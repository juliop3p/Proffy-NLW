import { Request, Response } from 'express';
import * as Yup from 'yup';

import db from '../database/database';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

interface scheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const filters = req.query;

    const schema = Yup.object().shape({
      week_day: Yup.string().required(),
      subject: Yup.string().required(),
      time: Yup.string().required(),
    });

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!(await schema.isValid(filters))) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function query() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return res.json(classes);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar: Yup.string().required(),
      user_id: Yup.string().required(),
      whatsapp: Yup.string().required(),
      bio: Yup.string().required(),
      subject: Yup.string().required(),
      cost: Yup.string().required(),
      schedule: Yup.array().required(),
    });

    const trx = await db.transaction();

    try {
      if (!(await schema.isValid(req.body))) {
        throw new Error();
      }

      const {
        name,
        avatar,
        whatsapp,
        bio,
        user_id: professor_id,
        subject,
        cost,
        schedule,
      } = req.body;

      const insertedUsersIds = await trx('professors').insert({
        name,
        avatar,
        whatsapp,
        bio,
        user_id: Number(professor_id),
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return res.status(201).json();
    } catch (err) {
      await trx.rollback();
      return res
        .status(400)
        .json({ error: 'Unexpected error while creating new class' });
    }
  }
}

export default new ClassesController();
