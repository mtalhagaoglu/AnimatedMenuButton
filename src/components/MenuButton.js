import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {Folder} from '../assets/icons';

const MenuButton = ({Icon, title, activeIndex, setActiveIndex, index}) => {
  const [visible, setVisible] = useState(false);
  const animation = useSharedValue({
    width: visible ? 140 : 0,
    marginHorizontal: visible ? 5 : 0,
    paddingHorizontal: visible ? 10 : 0,
  });
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 500,
        easing: Easing.linear,
      }),
      marginHorizontal: withTiming(animation.value.marginHorizontal, {
        duration: 500,
      }),
      paddingHorizontal: withTiming(animation.value.marginHorizontal, {
        duration: 500,
      }),
    };
  });

  const handleVisibility = () => {
    if (activeIndex === index) {
      setVisible(!visible);
      animation.value = {
        width: 140,
        marginHorizontal: 5,
        paddingHorizontal: 10,
      };
    } else {
      setVisible(false);
      animation.value = {
        width: 0,
        marginHorizontal: 0,
        paddingHorizontal: 0,
      };
    }
  };

  const handleToggleMenu = () => {
    setActiveIndex(visible ? null : index);
  };

  useEffect(() => {
    handleVisibility();
  }, [activeIndex]);

  return (
    <View style={styles.component}>
      <TouchableOpacity onPress={handleToggleMenu} style={styles.toggleButon}>
        <Icon width={20} height={20} />
        <Text>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.menu, animationStyle]}>
        <TouchableOpacity
          onPress={() => alert('hello')}
          style={styles.menuItem}>
          <Folder width={20} height={20} fill="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('hello')}
          style={styles.menuItem}>
          <Folder width={20} height={20} fill="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('hello')}
          style={styles.menuItem}>
          <Folder width={20} height={20} fill="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    // backgroundColor: '#D7D7DD',
    // borderRadius: 25,
    // marginVertical: 5,
  },
  menu: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#161224',
    borderRadius: 25,
    justifyContent: 'space-around',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default MenuButton;
