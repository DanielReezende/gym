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
import { useAuth } from '../../hooks/useAuth';

import colors from '../../styles/colors';
import styles from './styles';

export function SignIn(){
  const { signIn } = useAuth()
  
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleSubmit() {
    signIn({ username, password})

    alert('Login realizado com sucesso')
  }

  function handleInputBlur () {
    setIsFocused(false)
    setIsFilled(!!username || !!password)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleUsernameChange(value: string) {
    setIsFilled(!!value)
    setUsername(value)
  }
  
  function handlePasswordhange(value: string) {
    setIsFilled(!!value)
    setPassword(value)
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
                    onChangeText={handleUsernameChange}
                  />

                  <TextInput  
                    style={[styles.input]}
                    placeholder="Password"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={setPassword}
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

