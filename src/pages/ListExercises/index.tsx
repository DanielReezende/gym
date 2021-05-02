import React from 'react';
import { 
  View,
  SafeAreaView, 
  Text, 
} from 'react-native';


import styles from './styles';

export function ListExercises(){

  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.content}>
       <Text style={styles.title}>List Exercises</Text>
     </View>
   </SafeAreaView>
  );
}