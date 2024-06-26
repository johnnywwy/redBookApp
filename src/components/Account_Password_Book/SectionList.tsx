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
  Platform,
  ImageSourcePropType,
  LayoutAnimation,
} from 'react-native';
import React, {
  forwardRef,
  useState,
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
  showDetail?: boolean;
};

const data = [
  {
    title: '游戏',
    icon: icon_game,
    showDetail: false,
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
  {
    title: '平台',
    icon: icon_platform,
    showDetail: false,
    data: [
      {
        name: '母鸡',
        account: '123456',
        password: '123456',
      },
      {
        name: '母鸡2',
        account: '123456',
        password: '123456',
      },
      {
        name: '母鸡3',
        account: '123456',
        password: '123456',
      },
    ],
  },
  {
    title: '银行卡',
    icon: icon_bank,
    showDetail: false,
    data: [
      {
        name: 'QQ飞车',
        account: '123456',
        password: '123456',
      },
      {
        name: 'QQ飞车',
        account: '123456',
        password: '123456',
      },
    ],
  },
  {
    title: '其他',
    icon: icon_other,
    showDetail: false,
    data: [
      {
        name: '倒数啊啊啊',
        account: '123456',
        password: '123456',
      },
      {
        name: '最后一个',
        account: '123456',
        password: '123456',
      },
    ],
  },
];

export default forwardRef((props, ref) => {
  // const [arrowDirection, setArrowDirection] = useState('down');

  const [dataList, setDataList] = useState(data);

  const onPress = (section: any) => {
    //在dataList中找到对应的section，然后修改showDetail的值
    const index = dataList.findIndex(item => item.title === section.title);
    if (index !== -1) {
      // dataList[index].showDetail = !dataList[index].showDetail;
      const updatedDataList = dataList.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            showDetail: !item.showDetail,
          };
        }
        return item;
      });
      // console.log('updatedDataList', updatedDataList);

      setDataList(updatedDataList);
    }
    // 动画
    LayoutAnimation.easeInEaseOut();
  };

  const renderSectionHeader = ({section}: any) => {
    const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginTop: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      headerBorderRadius: {
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
        borderRadius: 8,
        // backgroundColor: 'pink',
      },
      // headerBottomRadius: {
      //   marginBottom: 16,
      // },
      iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
      },
      icon: {
        width: 24,
        height: 24,
      },
      title: {
        lineHeight: 24,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#333',
        includeFontPadding: false,
        textAlignVertical: 'center',
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

    const idx = dataList[dataList.length - 1].data;
    const isLastItem = idx === section.data;

    return (
      <>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(section)}>
          <View
            style={[
              styles.header,
              section.showDetail ? null : styles.headerBorderRadius,
            ]}>
            <View style={styles.iconAndText}>
              <Image source={section.icon} style={styles.icon} />
              <Text style={styles.title}>{section.title}</Text>
            </View>
            <View>
              {/* <Text>{arrowDirection}</Text> */}
              <Image
                source={icon_arrow}
                style={[
                  styles.arrowIcon,
                  {
                    transform: [
                      {rotate: section.showDetail ? '0deg' : '-90deg'},
                    ],
                  },
                ]}
              />
              {/* </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>
        {isLastItem && !section.showDetail && renderLastBox()}
      </>
    );
  };

  const renderLastBox = () => {
    const styles = StyleSheet.create({
      lastBox: {
        width: '100%',
        height: 16,
        // backgroundColor: 'pink',
      },
    });

    return <View style={styles.lastBox}></View>;
  };

  const renderItem = ({item, index, section}: any) => {
    //每个item的最后一个item，需要添加borderBottomRadius
    const isLastItem = index === section.data.length - 1;

    const idx = dataList[dataList.length - 1].data;
    const isLast = idx[idx.length - 1] === item;
    // console.log('index', index);

    const styles = StyleSheet.create({
      item: {
        backgroundColor: '#fff',
        padding: 8,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
      },
      itemMarginRadius: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
      lastBox: {
        // borderBottomLeftRadius: 8,
        // borderBottomRightRadius: 8,
        height: 24,
        width: '100%',
        // backgroundColor: 'pink',
      },
      itemMarginBottom: {
        // marginBottom: 16,
      },
      titleLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f0f0f0',
        // marginVertical: 8,
        marginTop: 8,
        marginBottom: 12,
      },
      title: {
        paddingHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      accAndPwd: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        marginBottom: 8,
      },
      accAndPwdText: {
        flex: 1,
        color: '#333',
      },
    });

    return section.showDetail ? (
      <>
        <View style={[styles.item, isLastItem && styles.itemMarginRadius]}>
          <View style={styles.titleLayout}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={[styles.accAndPwd]}>
            <Text style={styles.accAndPwdText}>账号：{item.account}</Text>
            <Text style={styles.accAndPwdText}>密码：{item.password}</Text>
          </View>
        </View>
        {isLast && renderLastBox()}
      </>
    ) : (
      // </>
      <View />
    );
  };

  return (
    <SectionList
      stickySectionHeadersEnabled={false}
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
    marginHorizontal: 16,
    // backgroundColor: 'pink',
    // paddingTop: 16,
  },
  // box: {
  //   height: 16,
  //   backgroundColor: '#f2f3f3',
  // },
});
