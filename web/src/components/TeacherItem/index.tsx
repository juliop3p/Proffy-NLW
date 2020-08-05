import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52512483?s=400&u=2aac534a0f02106801ab4179f3bf2934b8142944&v=4" alt="Avatar"/>
            <div>
              <strong>
                Julio Cesar
                <span>Química</span>
              </strong>
            </div>
          </header>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum veritatis temporibus, ipsum qui voluptatibus, ab ratione fugit quod placeat minima distinctio nesciunt! Enim quis porro, qui doloremque maiores praesentium!
          </p>
          
          <footer>
          <p>
            Preço/hora 
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
          </button>
          </footer>
        </article>
  );
}

export default TeacherItem;