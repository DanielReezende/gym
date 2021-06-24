import React, { useEffect, useState } from 'react';
import {
  FlatList, Image, SafeAreaView,
  StatusBar,

  Text, View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { CardStudent } from '../../components/CardStudent';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import styles from './styles';




export interface Student {
  id: string;
  name: string;
}


export function ListStudents(){
  const { token } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    api.get('/person', { headers: token}).then(response => setStudents(response.data))
  }, [])

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

