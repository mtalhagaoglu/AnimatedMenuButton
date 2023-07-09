import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {BottomTab, MenuButton} from './components';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.body}></View>
      <BottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'gray',
  },
  body: {
    flex: 1,
  },
});

export default Home;
