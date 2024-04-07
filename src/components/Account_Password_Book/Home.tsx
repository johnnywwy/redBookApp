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
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

import icon_game from '../../../src/assets/account_password_book/icon_game.png';
import icon_arrow from '../../../src/assets/account_password_book/icon_arrow.png';
import icon_add from '../../../src/assets/account_password_book/icon_add.png';

import AddAccount from './AddAccount';
import SectionList from './SectionList';

export default () => {
  // 顶部
  const renderTitle = () => {
    const style = StyleSheet.create({
      root: {
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
    return (
      <View style={style.root}>
        <Text style={style.title}>账号密码本</Text>
      </View>
    );
  };

  const genderAdd = () => {
    const style = StyleSheet.create({
      root: {
        height: 52,
        width: 52,
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 16,
        right: 16,
        // shadowOpacity: 0.5,
      },
      addImg: {
        width: 42,
        height: 42,
      },
    });
    return (
      <View style={style.root}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            addAccount.current?.show();
          }}>
          <Image source={icon_add} style={style.addImg} />
        </TouchableOpacity>
      </View>
    );
  };

  const addAccount = useRef(null);

  return (
    <View style={style.root}>
      {renderTitle()}
      <SectionList />
      {/* {genderMain()} */}
      {/* {genderModal()} */}
      {genderAdd()}
      <AddAccount ref={addAccount} />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f3',
  },
});
