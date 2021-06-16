import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { EditExercise } from '../pages/EditExercise';
import { EditSerie } from '../pages/EditSerie';
import { EditStudent } from '../pages/EditStudent';
import { ListExercises } from '../pages/ListExercises';
import { ListSeries } from '../pages/ListSeries';
import { ListStudents } from '../pages/ListStudents';
import { Welcome } from '../pages/Welcome';
import colors from '../styles/colors';
import AuthRoutes from './tab.routes';





const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator headerMode="none" screenOptions={{
    cardStyle: {
      backgroundColor: colors.white
    }
  }}>
    <stackRoutes.Screen name="Main" component={AuthRoutes}  />
    <stackRoutes.Screen name="ListSeries" component={ListSeries}  />
    <stackRoutes.Screen name="EditSerie" component={EditSerie}  />
    <stackRoutes.Screen name="ListStudents" component={ListStudents}  />
    <stackRoutes.Screen name="EditStudent" component={EditStudent}  />
    <stackRoutes.Screen name="ListExercises" component={ListExercises}  />
    <stackRoutes.Screen name="EditExercise" component={EditExercise}  />
  </stackRoutes.Navigator>
)

export default AppRoutes;