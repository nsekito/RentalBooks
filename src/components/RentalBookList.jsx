import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, arrayOf,
} from 'prop-types';

export default function RentalBookList(props) {
  const { rentalBooks } = props;
  const navigation = useNavigation();
  return (
    <View>
      {rentalBooks.map((rentalBook) => (
        <TouchableOpacity
          key={rentalBook.id}
          style={styles.rentalBookListItem}
          onPress={() => { navigation.navigate('BookDetail', { id: rentalBook.id }); }}
        >
          <View>
            <Text style={styles.rentalBookListItemTitle}>{rentalBook.title}</Text>
          </View>
          <View style={styles.rentalBookListItemDetail}>
            <View>
              <Text>レンタル日</Text>
              <Text style={styles.rentalBookListItemDate}>{rentalBook.rentalDate}</Text>
            </View>
            <View>
              <Text>返却日</Text>
              <Text style={styles.rentalBookListItemDate}>{rentalBook.returnDate}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

RentalBookList.propTypes = {
  rentalBooks: arrayOf(shape({
    title: string,
    description: string,
    rentalDate: string,
    returnDate: string,
    rentalUser: string,
  })).isRequired,
};

const styles = StyleSheet.create({
  rentalBookListItem: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  rentalBookListItemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rentalBookListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  rentalBookListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
