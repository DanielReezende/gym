import React from 'react';
import { 
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import logoImg from '../../assets/logoImg.png';

import listaExercicios from '../../assets/listaexercicios.png';
import listaSeries from '../../assets/listaseries.png';
import listaAlunos from '../../assets/listaalunos.png';

import styles from './styles';
import { ListButton } from '../../components/ListButton';

export function Main(){



  return (
   <SafeAreaView style={styles.container}>
     <StatusBar  hidden={true}/>
     <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logoImg} style={styles.logoImage} resizeMode="contain"/>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Opções</Text>
          
          <View style={styles.listContainer}>
            <ListButton 
              image={listaExercicios} 
              title="Lista de Exercicios" 
              detail="40 exercicios cadastrados"
              screen="ListExercises"
            />

            <ListButton 
              image={listaSeries} 
              title="Lista de Séries" 
              detail="45 séries cadastradas"
              screen="ListRepeats"
            />

            <ListButton 
              image={listaAlunos} 
              title="Lista de Alunos" 
              detail="45 alunos cadastradas"
              screen="ListStudents"
            />
          </View>        
        </View>
     </View>
   </SafeAreaView>
  );
}

