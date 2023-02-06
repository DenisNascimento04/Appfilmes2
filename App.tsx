import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {  } from 'expo-font';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import store from './src/store/index';
import Routes from './src/routes';
import theme from './src/themes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold 
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <StatusBar backgroundColor={theme.colors.FUNDO} />
            <Routes />
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
    );
  }

}
