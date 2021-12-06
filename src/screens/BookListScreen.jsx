import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import BookList from '../components/BookList';

export default function RentalBookScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('books');
    const unsubscribe = ref.onSnapshot((snapshot) => {
      const allBooks = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        allBooks.push({
          id: doc.id,
          title: data.title,
          description: data.description,
          rentalDate: data.rentalDate,
          returnDate: data.returnDate,
          rentalUser: Date.rentalUser,
        });
      });
      setBooks(allBooks);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <BookList books={books} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
