import { css } from '@emotion/native';
import React, { SyntheticEvent, useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Provider } from 'react-redux';
import { Container } from './components/UI';
import { store } from './Store';


const App = () => {
  return (
   <Provider store={store}>

   </Provider>
  );
};



export default App;
