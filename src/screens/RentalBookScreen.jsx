import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RentalBookList from '../components/RentalBookList';
import CircleButton from '../components/CricleButton';
import LogOutButton from '../components/LogOutButton';

export default function RentalBookScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
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
