import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookList from '../components/BookList';

export default function RentalBookScreen() {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
