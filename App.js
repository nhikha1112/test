import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigator/Main';
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import ChangePassword  from './Screens/Login/ChangePassword';
const App = () => {
  return (
    <NavigationContainer>
      <ChangePassword/>
    </NavigationContainer>
  );
};

export default App;
