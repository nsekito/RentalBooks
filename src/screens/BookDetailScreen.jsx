import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import firebase from 'firebase';

import { shape, string } from 'prop-types';
import CircleButton from '../components/CricleButton';

export default function BookDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('books').doc(id);
    const unsubscribe = ref.onSnapshot((doc) => {
      console.log(doc.id, doc.data());
      const data = doc.data();
      setBook({
        id: doc.id,
        title: data.title,
        description: data.description,
        rentalDate: data.rentalDate,
      });
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bookHeader}>
        <Text style={styles.bookTitle}>{book && book.title}</Text>
        <Text style={styles.bookDate}>{book && book.rentalDate}</Text>
      </View>
      <ScrollView style={styles.bookBody}>
        <Text>ほんの画像</Text>
        <Text style={styles.bookText}>{book && book.description}</Text>
      </ScrollView>
      <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={() => { navigation.navigate('RentalBook'); }}>本を借りる</CircleButton>
    </View>
  );
}

BookDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bookHeader: {
    backgroundColor: '#0080ff',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  bookTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
  },
  bookDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  bookBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  bookText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
