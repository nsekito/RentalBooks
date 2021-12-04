import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RentalBookList() {
  return (
    <View>
      <View style={styles.rentalBookListItem}>
        <View>
          <Text style={styles.rentalBookListItemTitle}>BookNameA</Text>
        </View>
        <View style={styles.rentalBookListItemDetail}>
          <View>
            <Text>レンタル日</Text>
            <Text style={styles.rentalBookListItemDate}>YYYY/MM/DD</Text>
          </View>
          <View>
            <Text>返却日</Text>
            <Text style={styles.rentalBookListItemDate}>YYYY/MM/DD</Text>
          </View>
        </View>
      </View>
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
