import React from 'react';
import { 
  View,
  SafeAreaView, 
  Text, 
} from 'react-native';


import styles from './styles';

export function ListRepeats(){

  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.content}>
       <Text style={styles.title}>List Repeats</Text>
     </View>
   </SafeAreaView>
  );
}