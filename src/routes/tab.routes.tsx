import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons, Ionicons  } from '@expo/vector-icons'; 


import colors from '../styles/colors';

import { Main } from '../pages/Main';
import { AddStudent } from '../pages/AddStudent';
import { AddSeries } from '../pages/AddSeries';
import { AddExercise } from '../pages/AddExercise';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator 
      tabBarOptions={{
        activeTintColor: colors.red,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          height: 70
        },
        showLabel:false
      }}>
        <AppTab.Screen  name="Main" component={Main} options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ))
        }}/>
        <AppTab.Screen  name="Adicionar Alunos" component={AddStudent} options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ))
        }}/>
        <AppTab.Screen  name="Adicionar Repetições" component={AddSeries} options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="repeat-one" size={size} color={color} />
          ))
        }}/>

        <AppTab.Screen  name="Séries" component={AddExercise} options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons name="md-fitness-sharp" size={size} color={color} />
          ))
        }}/> 

    </AppTab.Navigator>
  )
}

export default AuthRoutes;