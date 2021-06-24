
import React, { useEffect, useState } from 'react';
import {
  FlatList, 
  Image,
  SafeAreaView,
  StatusBar,
  Text, 
  View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { CardExercise } from '../../components/CardExercise';
import styles from './styles';
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";

export interface Exercise {
  idExercicio: string;
  dsExercicio: string;
  idSerie: string;
  repeticoes: number;
  qtdRepeticoes: number;
}


export function ListExercises(){
  const { token } = useAuth();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  
  useEffect(() => {
    api
      .get("/exercise", { headers: token })
      .then((response) => setExercises(response.data));
  }, []);

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
              keyExtractor={(item) => item.idExercicio}
              showsVerticalScrollIndicator={false}
            />

            
            <View style={styles.listContainer}>
            </View>        
          </View>
      </View>
   </SafeAreaView>
  )
}

