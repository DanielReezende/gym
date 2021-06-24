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

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';


export function AddSeries(){
  const navigation = useNavigation()
  const { token } = useAuth();
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [desc, setDesc] = useState<string>('')
  const [idPerson, setIdPerson] = useState<string>('')

  async function handleSubmit() {
    await api.post('/series', { desc, idPerson}, { headers: token })

    alert('Série cadastrada com sucesso!')

    navigation.navigate('ListSeries')
  }


  function handleInputBlur () {
    setIsFocused(false)
    setIsFilled(!!desc || !!idPerson)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setDesc(value)
  }

  function handleInputIdChange(value: string) {
    setIsFilled(!!value)
    setIdPerson(value)
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
                <Text style={styles.title}>Adicionar Séries</Text>
                
                <View style={styles.form}>

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite uma descrição para a Série"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite o id do aluno"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputIdChange}
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

