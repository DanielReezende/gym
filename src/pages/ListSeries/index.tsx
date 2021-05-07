import { useRoute } from '@react-navigation/core';
import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Image, SafeAreaView,
  StatusBar,

  Text, View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { CardSerie } from '../../components/CardSerie';
import SeriesRepository from '../../repositories/Series';
import styles from './styles';


export interface Serie {
    dsSerie: string;
    idPerson: number;
    idSerie: number;
}


export function ListSeries(){
  const [series, setSeries] = useState<Serie[]>([]);

  function onSuccess(tx: SQLite.SQLTransaction, results: SQLite.SQLResultSet) {
    const data: Serie[] = [];

      for (let i = 0; i < results.rows.length; i++) {
        data.push(results.rows.item(i));
      }
    
    setSeries(data)   
  }

  function retrieveData() {
    const repository = new SeriesRepository();
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
            <Text style={styles.title}>Lista de Séries</Text>

            <FlatList 
              data={series} 
              renderItem={({ item }) => (
                <CardSerie data={item}/>
              )}
              keyExtractor={(item) => String(item.idSerie)}
              showsVerticalScrollIndicator={false}
            />

            
            <View style={styles.listContainer}>
            </View>        
          </View>
      </View>
   </SafeAreaView>
  )
}

