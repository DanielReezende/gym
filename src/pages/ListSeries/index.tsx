import { useRoute } from '@react-navigation/core';
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
import { CardSerie } from '../../components/CardSerie';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import styles from './styles';

export interface Serie {
  desc: string;
  idPerson: string;
  id: string;
}

export function ListSeries(){
  const { token } = useAuth();
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    api.get('/series', { headers: token }).then(response => setSeries(response.data))
  }, [])


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
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />

            
            <View style={styles.listContainer}>
            </View>        
          </View>
      </View>
   </SafeAreaView>
  )
}

