import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface Props {
  teacher: Teacher;
}

const TeacherItem: React.FC<Props> = ({ teacher }: Props) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Avatar" />
        <div>
          <strong>
            {teacher.name}
            <span>{teacher.subject}</span>
          </strong>
        </div>
      </header>
      <p>
        {teacher.bio}
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
        veritatis temporibus, ipsum qui voluptatibus, ab ratione fugit quod
        placeat minima distinctio nesciunt! Enim quis porro, qui doloremque
        maiores praesentium!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
