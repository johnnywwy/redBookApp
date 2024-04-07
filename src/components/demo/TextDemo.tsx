import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  Dimensions,
  PixelRatio,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';

import {useBackHandler} from '@react-native-community/hooks';
import Link from './Link';

export default () => {
  useBackHandler(() => {
    console.log('安卓');
    return true;
  });
  useEffect(() => {
    console.log('ios');

    // 监听安卓返回键
    // BackHandler.addEventListener('hardwareBackPress', backForAndriod);

    // return () => {
    //   // 移除监听
    //   // BackHandler.removeEventListener('hardwareBackPress', backForAndriod);
    // };
  });
  // const backForAndriod = () => {
  //   console.log('返回了');

  //   return true;
  // };

  return (
    <View style={style.root}>
      <Link></Link>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    // backgroundColor: '#f0f0f0',
  },
  // centerContainer: {
  //   height: '100%',
  //   width: '100%',
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  // },

  // test: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'red',
  //   opacity: 0.5,
  // },
});
