import { useRoute } from '@react-navigation/core';
import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Image, SafeAreaView,
  StatusBar,

  Text, View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { CardExercise } from '../../components/CardExercise';
import ExercisesRepository from '../../repositories/Exercises';
import styles from './styles';


export interface Exercise {
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

  if( useRoute().params ) {
    retrieveData();
  }


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

