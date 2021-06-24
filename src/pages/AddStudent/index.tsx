import React, { useState } from 'react';
import { 
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Platform, 
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import logoImg from '../../assets/logoImg.png';
import { api } from '../../services/api';


import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';
import { useAuth } from '../../hooks/useAuth';

export function AddStudent(){
  const navigation = useNavigation()
  const { token } = useAuth();
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>('')

  async function handleSubmit() {
    const { data } = await api.post('/person', { name }, {
      headers: token
    })
    
    alert('Aluno salvo com sucesso');

    navigation.navigate('ListStudents');
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
                <Text style={styles.title}>Adicionar Aluno</Text>
                
                <View style={styles.form}>
                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite um nome"
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

