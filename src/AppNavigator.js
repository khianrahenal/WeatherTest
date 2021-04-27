import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Splash from './screens/Splash';
import Home from './screens/Home';
import {color} from './helpers/theme';
import City from './screens/City';

const navigationOption = {
  headerLeft: false,
  headerTitle: 'WeatherApp',
  headerTitleStyle: {alignSelf: 'center'},
  headerStyle: {backgroundColor: color.green},
  headerTintColor: color.white,
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, headerLeft: false}}
        />
        <Stack.Screen name="Home" component={Home} options={navigationOption} />
        <Stack.Screen name="City" component={City} options={navigationOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
