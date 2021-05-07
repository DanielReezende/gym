import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image, Keyboard, KeyboardAvoidingView,
  Platform, SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback, View
} from 'react-native';
import logoImg from '../../assets/logoImg.png';
import { Button } from '../../components/Button';
import PersonRepository from '../../repositories/Person';
import colors from '../../styles/colors';
import { Student } from '../ListStudents';
import styles from './styles';


export function EditStudent() {
  const student = useRoute().params as Student;
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>(student.name)

  const repository = new PersonRepository();

  function success () {
    alert('Aluno salvo com sucesso');
    navigation.navigate('ListStudents', [true]);
  }


  function handleSubmit() {
    repository.Edit({
      person: {
        id: student.id,
        name
      },
      onSuccess: success,
    });
  }


  function handleInputBlur () {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  hidden={true}/>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
              <View style={styles.header}>
                <Image source={logoImg} style={styles.logoImage} resizeMode="contain"/>
              </View>
              <View style={styles.main}>
                <Text style={styles.title}>Editar Aluno</Text>
                
                <View style={styles.form}>
                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={student.name}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <View style={styles.footer}>
                    <Button text="Confirmar" onPress={handleSubmit}/>
                  </View>
                </View>        
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

