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

  const genderMain = () => {
    const style = StyleSheet.create({
      root: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ebebeb',
        padding: 12,
      },
      content: {
        flex: 1,
      },
    });
    return (
      <View style={style.root}>
        {/* */}
        {genderList()}
        {genderAdd()}
        {/* {genderList()} */}
      </View>
    );
  };

  const genderList = () => {
    const style = StyleSheet.create({
      root: {
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
      },
      topHeader: {
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      imgAndTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-start',
      },
      img: {
        width: 24,
        height: 24,
        marginRight: 8,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        // backgroundColor: 'red',
        // textAlign: 'center',
      },
      imgArrowWrapper: {
        // backgroundColor: 'red',
        padding: 4,
      },
      imgArrow: {
        width: 18,
        height: 18,
      },
      content: {
        backgroundColor: 'white',
        padding: 12,
        paddingTop: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#7b7b7b',
      },
      accountTypeWrapper: {
        marginBottom: 8,
      },
      accountType: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      accountNameAndPwd: {
        flexDirection: 'row',
      },
      accountText: {
        width: '50%',
        fontSize: 14,
      },
    });
    return (
      <>
        <View style={style.root}>
          <View style={style.topHeader}>
            <View style={style.imgAndTitle}>
              <TouchableOpacity>
                <Image source={icon_game} style={style.img} />
              </TouchableOpacity>
              <Text style={style.title}>游戏</Text>
            </View>
            <View style={style.imgArrowWrapper}>
              <Image source={icon_arrow} style={style.imgArrow} />
            </View>
          </View>
          <View style={style.content}>
            <View>
              <View style={style.accountTypeWrapper}>
                <Text style={style.accountType}>QQ飞车</Text>
              </View>
              <View style={style.accountNameAndPwd}>
                <Text style={style.accountText}>账号：12345456</Text>
                <Text style={style.accountText}>账号：12345456</Text>
              </View>
            </View>
          </View>
        </View>
      </>
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
        width: 52,
        height: 52,
      },
    });
    return (
      <View style={style.root}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            addAccount.current.show();
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
