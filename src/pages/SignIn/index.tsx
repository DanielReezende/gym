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

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';

export function SignIn(){
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>('')

  function handleSubmit() {
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
          <View style={styles.container}>
              <View style={styles.main}>
                <Text style={styles.title}>SignIn</Text>
                
                <View style={styles.form}>
                  <TextInput  
                    style={[styles.input]}
                    placeholder="Username"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                  />

                  <TextInput  
                    style={[styles.input]}
                    placeholder="Password"
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

