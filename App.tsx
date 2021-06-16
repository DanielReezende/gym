import React from 'react';
// import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { useFonts, Roboto_700Bold, Roboto_400Regular,  Roboto_500Medium} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/hooks/useAuth';


export default function App() {
  const [fontsLoaded,] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  ) 
}

