import React, { useState, useEffect } from 'react';
import { 
  View,
  SafeAreaView,
  StatusBar,
  Image, 
  Text,
  FlatList
} from 'react-native';

import ExercisesRepository from '../../repositories/Exercises';

import * as SQLite from 'expo-sqlite';

import logoImg from '../../assets/logoImg.png';
import styles from './styles';

import { CardExercise } from '../../components/CardExercise';


interface Exercise {
  idExercicio: number;
  dsExercicio: string;
  idSerie: number;
  repeticoes: number;
  qtdRepeticoes: number;
}


export function ListExercises(){
  const [exercises, setExercises] = useState<Exercise[]>([]);

  function onSuccess(tx: SQLite.SQLTransaction, results: SQLite.SQLResultSet) {
    const data: Exercise[] = [];

      for (let i = 0; i < results.rows.length; i++) {
        data.push(results.rows.item(i));
      }
    
    setExercises(data)   
  }

  function retrieveData() {
    const repository = new ExercisesRepository();
    repository.Retrieve({ onSuccess })
  }

  useEffect(() => {
    retrieveData()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  hidden={true}/>
      <View style={styles.content}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.logoImage} resizeMode="contain"/>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>Lista de Exercicios</Text>

            <FlatList 
              data={exercises} 
              renderItem={({ item }) => (
                <CardExercise  data={item}/>
              )}
              keyExtractor={(item) => String(item.idExercicio)}
              showsVerticalScrollIndicator={false}
            />

            
            <View style={styles.listContainer}>
            </View>        
          </View>
      </View>
   </SafeAreaView>
  )
}

