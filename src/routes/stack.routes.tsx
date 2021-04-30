import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Main } from '../pages/Main';

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
    <stackRoutes.Screen name="UserIdentification" component={UserIdentification}  />
    <stackRoutes.Screen name="Main" component={AuthRoutes}  />
  </stackRoutes.Navigator>
)

export default AppRoutes;