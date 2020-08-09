import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  
  const loadFavorites = async () => {
    const response = await AsyncStorage.getItem('favorites')

    if(response) {
      const favoritedTeachers = JSON.parse(response);
      setFavorites(favoritedTeachers);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        { favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;