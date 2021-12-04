import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import RentalBookList from '../components/RentalBookList';
import CircleButton from '../components/CricleButton';

export default function RentalBookScreen() {
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
