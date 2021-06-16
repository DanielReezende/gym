import { useNavigation, useRoute } from '@react-navigation/core';
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
import ExercisesRepository from '../../repositories/Exercises';
import colors from '../../styles/colors';
import { Exercise } from '../ListExercises';
import styles from './styles';






export function EditExercise(){
  const exercise = useRoute().params as Exercise;
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [dsExercicio, setDsExercicio] = useState<string>(exercise.dsExercicio)
  const [idSerie, setIdSerie] = useState<number>(exercise.idSerie)
  const [repeticoes, setRepeticoes] = useState<number>(exercise.repeticoes)
  const [qtdRepeticoes, setQtdRepeticoes] = useState<number>(exercise.qtdRepeticoes)


  const repository = new ExercisesRepository();

  function success () {
    alert('Exercicio registrado com sucesso');

    navigation.navigate('ListExercises', [true]);
  }

  function handleSubmit() {
    repository.Edit({
      exercises: {
        dsExercicio,
        idSerie,
        qtdRepeticoes,
        repeticoes, 
        idExercicio: exercise.idExercicio
      },
      onSuccess: success
    })
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
    setIdSerie(Number(value))
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
                <Text style={styles.title}>Editar Exercicio</Text>
                
                <View style={styles.form}>

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={exercise.dsExercicio}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={exercise.idSerie.toString()}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputIdSerieChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={exercise.repeticoes.toString()}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputRepeatChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={exercise.qtdRepeticoes.toString()}
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

