

// import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { ScrollView, Text, View, useWindowDimensions, useColorScheme } from 'react-native';

function functionView(props) {
  const { name, age, level, sex } = props


  const [address, setAddress] = useState('北京市海淀区')

  const scrollViewRef = useRef(null)

  const { width, height } = useWindowDimensions()

  const colorScheme = useColorScheme()


  console.log('colorScheme', colorScheme);

  console.log('width=', width, 'height=', height)
  // setTimeout(() => {
  //   setAddress('上海市浦东新区')
  // }, 2000)


  // useEffect(() => {},[])
  // 当[]为空时,useEffect 相当于componentDidMount
  useEffect(() => {
    // console.log('useEffect页面加载了...');
    setTimeout(() => {
      // setAddress('上海市浦东新区')
      scrollViewRef.current.scrollToEnd({ animated: true })
    }, 2000)
  }, [])

  useEffect(() => {
    // console.log(`address=${address}`);
    // setTimeout(() => {
    //   setAddress('上海市浦东新区')
    // }, 2000)
  }, [address])


  // console.log('return....');
  return (
    <View style={{ width: "100%", height: 200, backgroundColor: 'skyblue' }}>
      <Text style={{ fontSize: 24, color: 'white' }}>
        {`姓名：${name} 年龄：${age}  等级：${level} 性别：${sex}`}
      </Text>
      <Text>{address}</Text>


      <ScrollView ref={scrollViewRef}>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>2</Text>
      </ScrollView>
    </View>
  );
}

export default functionView;
