import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

import InputImage from '../../components/InputImage';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import { PhoneInputContainer, PersonalData } from './styles';

import rocket from '../../assets/images/rocket.svg';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [phone, setPhone] = useState('');

  const [avatar, setAvatar] = useState<FileList | null>();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    bio: '',
    subject: '',
    cost: 0,
    schedule: [
      {
        id: String(new Date().getMilliseconds()),
        week_day: 0,
        from: '',
        to: '',
      },
    ],
  });

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    setAvatar(event.currentTarget.files);
  };

  const AddNewScheduleItem = () => {
    const newSchedule = [
      ...formData.schedule,
      {
        id: String(new Date().getMilliseconds()),
        week_day: 0,
        from: '',
        to: '',
      },
    ];

    setFormData({
      ...formData,
      schedule: newSchedule,
    });
  };

  const handleChangeForm = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleChangeSchedule = (
    field: string,
    value: string | number,
    id: string | undefined
  ) => {
    const newSchedule = formData.schedule.map(schedule => {
      if (id === schedule.id) {
        return { ...schedule, [field]: value };
      }

      return schedule;
    });

    setFormData({
      ...formData,
      schedule: newSchedule,
    });
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await api.post('/classes', formData);

      alert('Cadastro realizado com sucesso!');

      history.push('/');
    } catch (errr) {
      alert('Houve um erro ao realizar o cadastro!');
    }
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        pageName="Dar aulas"
        title="Que incrível que você quer dar aulas."
      >
        <div className="header-children">
          <p>O primeiro passo é preencher esse formulário de inscrição</p>
          <div>
            <img src={rocket} alt="Foguete" />
            <span>
              Prepare-se!
              <br />
              vai ser o máximo.
            </span>
          </div>
        </div>
      </PageHeader>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <PersonalData>
              <img
                src="https://avatars0.githubusercontent.com/u/52512483?s=460&u=2aac534a0f02106801ab4179f3bf2934b8142944&v=4"
                alt="Julio"
              />
              <h3>Julio Cesar</h3>
              <PhoneInputContainer>
                <span>Whatsapp</span>
                <PhoneInput
                  country="br"
                  value={phone}
                  onChange={number => setPhone(number)}
                  inputStyle={{
                    width: '100%',
                    height: '5.6rem',
                    background: 'var(--color-input-background)',
                    border: '1px solid var(--color-line-in-white)',
                  }}
                />
              </PhoneInputContainer>
            </PersonalData>
            <Textarea
              name="bio"
              label="Biografria (Máximo 300 caracteres)"
              handleChange={handleChangeForm}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <div className="input-group">
              <Select
                name="subject"
                label="Matéria"
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação fisica', label: 'Educação fisica' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
                ]}
                handleChange={handleChangeForm}
              />
              <Input
                name="cost"
                label="Custo de sua hora por aula"
                handleChange={handleChangeForm}
                type="number"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={AddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {formData.schedule.map(schedule => (
              <div className="schedule-item" key={schedule.id}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  id={schedule.id}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                  handleChange={handleChangeSchedule}
                />
                <Input
                  name="from"
                  id={schedule.id}
                  label="Das"
                  type="time"
                  handleChange={handleChangeSchedule}
                />
                <Input
                  name="to"
                  id={schedule.id}
                  label="Até"
                  type="time"
                  handleChange={handleChangeSchedule}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
