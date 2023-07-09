import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MenuButton from './MenuButton';
import {Ball, Filter, Finger} from '../assets/icons';

const BottomTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <View style={styles.component}>
      <MenuButton
        Icon={Ball}
        title="Ball"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <MenuButton
        Icon={Filter}
        title="Filter"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <MenuButton
        Icon={Finger}
        title="Finger"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 10,
    paddingHorizontal: 30,
  },
});

export default BottomTab;
