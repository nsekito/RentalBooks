import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import RentalBookList from './src/components/RentalBookList';
import CircleButton from './src/components/CricleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <RentalBookList />
      <CircleButton>本を探す</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
