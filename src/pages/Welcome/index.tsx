import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import fitnessImg from '../../assets/fitness.png';

import styles from './styles';


export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Gerencie{'\n'}
          suas séries de{'\n'}
          forma fácil
        </Text>

        <Image  style={styles.image} source={fitnessImg} resizeMode='contain'/>

        <Text style={styles.subtitle}>
          Não esqueça mais suas séries. {'\n'} 
          Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name="chevron-right" style={styles.iconButton}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}
