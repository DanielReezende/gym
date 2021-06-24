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
import { api } from "../../services/api";

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';
import { useAuth } from "../../hooks/useAuth";


export function AddExercise(){
  const navigation = useNavigation()
  const { token } = useAuth();
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [dsExercicio, setDsExercicio] = useState<string>('')
  const [idSerie, setIdSerie] = useState<string>('')
  const [repeticoes, setRepeticoes] = useState<number>(0)
  const [qtdRepeticoes, setQtdRepeticoes] = useState<number>(0)

  async function handleSubmit() {
    const { data } = await api.post("/exercise", { 
      dsExercicio, 
      idSerie, 
      qtdRepeticoes, 
      repeticoes
    }, 
    { headers: token, }
    );

    alert("Exercício salvo com sucesso");

    navigation.navigate("ListExercises");
  }

  function handleInputBlur () {
    setIsFocused(false)
    setIsFilled(!!dsExercicio || !!idSerie || !!qtdRepeticoes || !!repeticoes)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setDsExercicio(value)
  }

  function handleInputIdSerieChange(value: string) {
    setIsFilled(!!value)
    setIdSerie(value)
  }

  function handleInputRepeatChange(value: string) {
    setIsFilled(!!value)
    setRepeticoes(Number(value))
  }

  function handleInputAmountRepetitionsChange(value: string) {
    setIsFilled(!!value)
    setQtdRepeticoes(Number(value))
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
                <Text style={styles.title}>Adicionar Exercicio</Text>
                
                <View style={styles.form}>

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite uma descrição"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite o id da série "
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputIdSerieChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite a numero de repetições "
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputRepeatChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder="Digite a quantidade de repetições "
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputAmountRepetitionsChange}
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

