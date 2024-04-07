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
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';

// import {useBackHandler} from '@react-native-community/hooks';

export default () => {
  // useBackHandler(() => {
  //   console.log('安卓');
  //   return true;
  // });
  useEffect(() => {
    console.log('init');
  });

  const onPresss = () => {
    // console.log('123');
    // 跳转网页
    // const res = await Linking.canOpenURL('https://www.google.com');
    // if (res) {
    //   console.log('res', res);
    //   // 跳转网页
    //   // Linking.openURL('https://www.google.com');
    // }
    // 跳转地图
    // Linking.openURL('geo:37.2122,12.222');
    // 跳转电话
    // Linking.openURL('tel:10086');
    // 跳转短信
    // Linking.openURL('sms:10086');
    // Linking.openURL('smsto:10086');
    // 跳转邮件
    // Linking.openURL('mailto:10086@qq.com');
    // Linking.openSettings();
  };

  return (
    <View style={style.root}>
      <Text>123456</Text>
      <Button title="按钮" onPress={onPresss} />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    // paddingTop: Platform.select({
    //   ios: 20,
    //   android: 0,
    //   default: 0,
    // }),
  },
});
