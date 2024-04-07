/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SectionList,
  SectionListData,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {
  forwardRef,
  // useEffect,
  // useState,
  // useRef,
  // useImperativeHandle,
} from 'react';

import icon_game from '../../../src/assets/account_password_book/icon_game.png';
import icon_platform from '../../../src/assets/account_password_book/icon_platform.png';
import icon_bank from '../../../src/assets/account_password_book/icon_bank.png';
import icon_other from '../../../src/assets/account_password_book/icon_other.png';

import icon_arrow from '../../../src/assets/account_password_book/icon_arrow.png';

type DataList = {
  title: string;
  icon?: ImageSourcePropType;
  data: Record<string, any>;
};

export default forwardRef((props, ref) => {
  const dataList: DataList[] = [
    {
      title: '游戏',
      icon: icon_game,
      data: [
        {
          name: 'QQ飞车',
          account: '123456',
          password: '123456',
        },
        {
          name: 'gmail',
          account: '123456',
          password: '123456',
        },
        {
          name: 'apple',
          account: '123456',
          password: '123456',
        },
      ],
    },
    // {
    //   title: '平台',
    //   icon: icon_platform,
    //   data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    // },
    // {
    //   title: '银行卡',
    //   icon: icon_bank,
    //   data: ['Water', 'Coke', 'Beer'],
    // },
    // {
    //   title: '其他',
    //   icon: icon_other,
    //   data: ['Cheese Cake', 'Ice Cream'],
    // },
  ];

  const renderSectionHeader = ({section}: {section: DataList}) => {
    const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginTop: 16,
        borderRadius: 8,
      },
      iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: 24,
        height: 24,
      },
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
      },
      arrowWarpper: {
        // padding: 8,
        height: 30,
        width: 30,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        right: -10,
      },
      arrowIcon: {
        width: 16,
        height: 16,
        // backgroundColor: 'pink',
      },
    });

    return (
      <View style={styles.header}>
        <View style={styles.iconAndText}>
          <Image source={section.icon} style={styles.icon} />
          <Text style={styles.title}>{section.title}</Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              console.log('点击了箭头');
            }}>
            <Image source={icon_arrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = ({item}: any) => {
    const styles = StyleSheet.create({
      item: {
        backgroundColor: '#fff',
        padding: 8,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
        // borderBottomLeftRadius: 8,
        // borderBottomRightRadius: 8,
      },
    });

    return (
      <View style={[styles.item]}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SectionList
      style={styles.container}
      sections={dataList}
      refreshing={false}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      // ({section: {title}})
      renderSectionHeader={renderSectionHeader}
      onRefresh={() => {
        console.log('下拉刷新');
      }}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 8,
    // marginVertical: 8,
  },
  title: {
    fontSize: 14,
  },
});
