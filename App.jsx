import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import RentalBookScreen from './src/screens/RentalBookScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BookListScreen from './src/screens/BookListScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyAj88R4XABXn36vRetiUeDyWZRJlWK2GAI',
  authDomain: 'rentalbooks-edfb6.firebaseapp.com',
  projectId: 'rentalbooks-edfb6',
  storageBucket: 'rentalbooks-edfb6.appspot.com',

  messagingSenderId: '643405544870',
  appId: '1:643405544870:web:5ae8bcaeba53960ba6e367',
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#0080ff' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'RentalBooks',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen name="RentalBook" component={RentalBookScreen} />
        <Stack.Screen name="BookList" component={BookListScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
