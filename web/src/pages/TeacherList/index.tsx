import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import searchIcon from '../../assets/images/icons/search.svg';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teacherQuery, setTeacherQuery] = useState({
    subject: '',
    week_day: '',
    time: '',
  });
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleChageForm = (field: string, value: string | number) => {
    setTeacherQuery({
      ...teacherQuery,
      [field]: value,
    });
  };

  const searchTeachers = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const { data } = await api.get<Teacher[]>('/classes', {
      params: teacherQuery,
    });

    setTeachers(data);
  };

  const { subject, week_day, time } = teacherQuery;

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
            value={subject}
            handleChange={handleChageForm}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={week_day}
            handleChange={handleChageForm}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            handleChange={handleChageForm}
          />
          <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search" />
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
