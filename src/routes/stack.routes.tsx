import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { ListSeries } from '../pages/ListSeries';
import { ListStudents } from '../pages/ListStudents';
import { ListExercises } from '../pages/ListExercises';

import colors from '../styles/colors';

import AuthRoutes from './tab.routes';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator headerMode="none" screenOptions={{
    cardStyle: {
      backgroundColor: colors.white
    }
  }}>
    <stackRoutes.Screen name="Welcome" component={Welcome}  />
    <stackRoutes.Screen name="Main" component={AuthRoutes}  />
    <stackRoutes.Screen name="ListSeries" component={ListSeries}  />
    <stackRoutes.Screen name="ListStudents" component={ListStudents}  />
    <stackRoutes.Screen name="ListExercises" component={ListExercises}  />
  </stackRoutes.Navigator>
)

export default AppRoutes;