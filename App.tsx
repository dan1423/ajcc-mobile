
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiseaseSelect from './src/components/DiseaseSelect';
import Calculate from './src/components/Calculate';
import StagingValues from './src/components/StagingValues';
import {StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
           headerTintColor: '#fff',
           headerTitleStyle: styles.headerTitle,
          cardStyle: styles.container,
        }}
      >
        <Stack.Screen
          name="DiseaseSelect"
          component={DiseaseSelect}
          options={{title: 'Select Disease Site'}}
         
        />
          <Stack.Screen
          name="StagingValues"
          component={StagingValues}
          options={{title: 'Select Staging Values'}}
        />
        <Stack.Screen
          name="Calculate"
          component={Calculate}
          options={{title: 'TNM Calculator'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    color: 'black',
  },

  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerTitle: {
    color: 'white',
  }
});
