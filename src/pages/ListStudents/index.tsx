import { useRoute } from '@react-navigation/core';
import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Image, SafeAreaView,
  StatusBar,

  Text, View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { CardStudent } from '../../components/CardStudent';
import PersonRepository from '../../repositories/Person';
import styles from './styles';




export interface Student {
  id: number;
  name: string;
}


export function ListStudents(){
  const [students, setStudents] = useState<Student[]>([]);

  function onSuccess(tx: SQLite.SQLTransaction, results: SQLite.SQLResultSet) {
    const data: Student[] = [];

      for (let i = 0; i < results.rows.length; i++) {
        data.push(results.rows.item(i));
      }
    
    setStudents(data)   
  }

  function retrieveData() {
    const repository = new PersonRepository();
    repository.Retrieve({ onSuccess })
  }

  useEffect(() => {
    retrieveData()
  }, [])

  if( useRoute().params ) {
    retrieveData()
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  hidden={true}/>
      <View style={styles.content}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.logoImage} resizeMode="contain"/>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>Lista de Alunos</Text>

            <FlatList 
              data={students} 
              renderItem={({ item }) => (
                <CardStudent data={item} />
              )}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
            />

            
            <View style={styles.listContainer}>
            </View>        
          </View>
      </View>
   </SafeAreaView>
  )
}

