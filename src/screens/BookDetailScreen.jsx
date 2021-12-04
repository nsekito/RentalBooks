import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CricleButton';

export default function BookDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.bookHeader}>
        <Text style={styles.bookTitle}>BookA</Text>
        <Text style={styles.bookDate}>yyyy/mm/dd</Text>
      </View>
      <ScrollView style={styles.bookBody}>
        <Text>ほんの画像</Text>
        <Text style={styles.bookText}>
          ほんの詳細ほんの詳細ほんの詳細ほんの詳細
          ほんの詳細ほんの詳細ほんの詳細ほんの詳細
          ほんの詳細ほんの詳細ほんの詳細ほんの詳細
          ほんの詳細ほんの詳細ほんの詳細ほんの詳細
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>本を借りる</CircleButton>
    </View>
  );
}

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
