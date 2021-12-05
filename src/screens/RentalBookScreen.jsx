import React from 'react';
import { View, StyleSheet } from 'react-native';
import RentalBookList from '../components/RentalBookList';
import CircleButton from '../components/CricleButton';

export default function RentalBookScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <RentalBookList />
      <CircleButton onPress={() => { navigation.navigate('BookList'); }}>本を探す</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
