import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [teacherQuery, setTeacherQuery] = useState({
    subject: '',
    week_day: '',
    time: '',
  })

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const loadFavorites = async () => {
    const response = await AsyncStorage.getItem('favorites')

    if(response) {
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)
      setFavorites(favoritedTeachersIds);
    }
  }

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  }

  const handleChageForm = (field: string, value: string | number) => {
    setTeacherQuery({
      ...teacherQuery,
      [field]: value,
    })
  }

  const handleFiltersSubmit = async () => {
    loadFavorites();
    const { data } = await api.get('/classes', {
      params: teacherQuery
    })

    setTeachers(data)
    setIsFiltersVisible(false)
  }

  const { subject, week_day, time } = teacherQuery;

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              placeholderTextColor="#c1bccc"
              style={styles.input} 
              placeholder="Qual a matéria?" 
              value={subject}
              onChangeText={(text) => handleChageForm('subject', text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock} >
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  placeholderTextColor="#c1bccc"
                  style={styles.input} 
                  placeholder="Qual o dia" 
                  value={week_day}
                  onChangeText={(text) => handleChageForm('week_day', text)}
                />
              </View>
              <View style={styles.inputBlock} >
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  placeholderTextColor="#c1bccc"
                  style={styles.input} 
                  placeholder="Qual horário" 
                  value={time}
                  onChangeText={(text) => handleChageForm('time', text)}
                />
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default TeacherList;