import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BookList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.rentalBookListItem}
        onPress={() => { navigation.navigate('BookDetail'); }}
      >
        <View>
          <Text style={styles.rentalBookListItemTitle}>BookNameB</Text>
        </View>
        <View style={styles.rentalBookListItemDetail}>
          <View>
            <Text>貸出可能</Text>
            <Text style={styles.rentalBookListItemDate}>YYYY/MM/DD</Text>
          </View>
          <View>
            <Text>○○日</Text>
            <Text style={styles.rentalBookListItemDate}>YYYY/MM/DD</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

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
