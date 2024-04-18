import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import avatar from '../../assets/images/avatar.png';
import icon_add from '../../assets/images/icon_add.png';
import withFloatButton from './withFloatButton';

export default withFloatButton(() => {
  useEffect(() => {
    console.log('init');
  });

  // const onPresss = () => {};

  return (
    <View style={style.root}>
      {/* <Text>高阶组件</Text> */}
      <View style={style.iconLayout}>
        <Image style={style.icon} source={avatar}></Image>
        <Text style={style.title}>个人信息介绍</Text>
      </View>
      <View style={style.detail}>
        <Text style={style.detailText}>
          这个表达通常指的是数据的大小，其中 "kb" 是
          "kilobytes"（千字节）的缩写。在计算机科学和信息技术中，数据的大小经常以字节为单位进行度量，而千字节是字节的一个常用单位。
        </Text>
      </View>
      {/* <Button title="按钮" onPress={onPresss} /> */}
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
  },
  iconLayout: {
    // backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 10,
  },
  detail: {
    width: '90%',
    backgroundColor: '#747473',
    marginTop: 20,
    borderRadius: 8,
  },
  detailText: {
    padding: 20,
    fontSize: 16,
    color: '#fff',
  },
});
