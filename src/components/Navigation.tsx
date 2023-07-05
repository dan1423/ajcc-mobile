import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DiseaseSelect from './DiseaseSelect';
import Calculate from './Calculate';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DiseaseSelect"
          component={DiseaseSelect}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Calculate"
          component={Calculate}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
