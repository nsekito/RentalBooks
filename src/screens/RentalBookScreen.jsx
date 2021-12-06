import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import RentalBookList from '../components/RentalBookList';
import CircleButton from '../components/CricleButton';
import LogOutButton from '../components/LogOutButton';

export default function RentalBookScreen(props) {
  const { navigation } = props;
  const [rentalBooks, setRentalBooks] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('books').where('rentalUser', '!=', '');
    const unsubscribe = ref.onSnapshot((snapshot) => {
      const allRentalBooks = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        allRentalBooks.push({
          id: doc.id,
          title: data.title,
          description: data.description,
          rentalDate: data.rentalDate,
          returnDate: data.returnDate,
          rentalUser: Date.rentalUser,
        });
      });
      setRentalBooks(allRentalBooks);
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <RentalBookList rentalBooks={rentalBooks} />
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
