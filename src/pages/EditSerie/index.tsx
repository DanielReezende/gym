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
import SeriesRepository from '../../repositories/Series';
import colors from '../../styles/colors';
import { Serie } from '../ListSeries';
import styles from './styles';




export function EditSerie() {
  const serie = useRoute().params as Serie;
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>(serie.dsSerie)
  const [idStudent, setIdStudent] = useState<number>(serie.idPerson)

  const repository = new SeriesRepository();

  function success () {
    alert('Série registrada com sucesso');

    navigation.navigate('ListSeries', [true]);
  }

  function handleSubmit() {
    repository.Edit({
      series: {
        desc: name,
        idPerson: idStudent,
        id: serie.idSerie
      },
      onSuccess: success
    })
  }


  function handleInputBlur () {
    setIsFocused(false)
    setIsFilled(!!name || !!idStudent)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  function handleInputIdChange(value: string) {
    setIsFilled(!!value)
    setIdStudent(Number(value))
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
                <Text style={styles.title}>Editar Séries</Text>
                
                <View style={styles.form}>

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={serie.dsSerie}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <TextInput  
                    style={[styles.input, (isFocused || isFilled) && { borderColor: colors.red }]}
                    placeholder={serie.idPerson.toString()}
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

