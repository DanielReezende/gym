import React, { useState } from 'react';
import { 
  View,
  Image, 
  SafeAreaView, 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button';

import styles from './styles';

import colors from '../../styles/colors';
import logoImg from '../../assets/logo.png';



export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Main');
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
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <View style={styles.logo}>
                  <Image source={logoImg} resizeMode="contain" />
                </View> 
              
                <Text style={styles.title}>
                  Como podemos{'\n'}chamar você?
                </Text>
              </View>


              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.red }
                ]} 
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button text="Confirmar" activeOpacity={0.8} onPress={handleNavigate}/>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

