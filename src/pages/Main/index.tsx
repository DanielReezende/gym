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

import listExercicios from '../../assets/listaexercicios.png';
import listaSeries from '../../assets/listaseries.png';
import listaAlunos from '../../assets/listaalunos.png';

import styles from './styles';

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
            <TouchableOpacity style={styles.buttonList} activeOpacity={0.8}>
              <Image source={listExercicios} style={styles.listImage}/>
              <View style={styles.listInfo}>
                <Text style={styles.listTitle}>Lista de Exercicios</Text>
                <Text style={styles.listDetatil}>45 exercicios cadastrados</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonList} activeOpacity={0.8}>
              <Image source={listaSeries} style={styles.listImage}/>
              <View style={styles.listInfo}>
                <Text style={styles.listTitle}>Lista de Séries</Text>
                <Text style={styles.listDetatil}>45 séries cadastradas</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonList} activeOpacity={0.8}>
              <Image source={listaAlunos} style={styles.listImage}/>
              <View style={styles.listInfo}>
                <Text style={styles.listTitle}>Lista de Alunos</Text>
                <Text style={styles.listDetatil}>45 alunos cadastradas</Text>
              </View>
            </TouchableOpacity>
          </View>

          
        </View>
     </View>
   </SafeAreaView>
  );
}

