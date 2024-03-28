import { Image, ImageBackground, ScrollView, TouchableOpacity, Text, View, StyleSheet, Pressable, Button } from 'react-native';

// import png from '../assets/images/icon_bg.png';


import icon_bg from '../assets/images/icon_bg.png';
import icon_menu from '../assets/images/icon_menu.png';
import icon_share from '../assets/images/icon_share.png';
import avatar from '../assets/images/default_avatar.png';

import icon_add from '../assets/images/icon_add.png';
import icon_code from '../assets/images/icon_code.png';
import icon_male from '../assets/images/icon_male.png';
import icon_setting from '../assets/images/icon_setting.png';

import icon_1 from '../assets/images/icon_1.png';
import icon_2 from '../assets/images/icon_2.png';
import icon_3 from '../assets/images/icon_3.png';
import icon_close_modal from '../assets/images/icon_close_modal.png';

// 顶部模块
const renderDashboard = () => {
  const styles = StyleSheet.create({
    imgBg: {
      width: '100%',
      paddingTop: 16,
    },
    bgImg: {
      resizeMode: 'stretch',
    },
    titleBar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      paddingHorizontal: 16, //水平方向的padding
    },
    iconMenu: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    iconShare: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    infoLayout: {
      flexDirection: 'column',
      padding: 16,
      // backgroundColor: 'skyblue',
    },
    avatarLayout: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      // backgroundColor: 'pink'
    },
    avatarImg: {
      width: 64,
      height: 64,
      borderRadius: 48,
      backgroundColor: 'white',
    },
    iconAdd: {
      width: 22,
      height: 22,
      marginLeft: -20,
      marginBottom: 2,
    },
    nameLayout: {
      // flex: 1,
      flexDirection: 'column',
      marginBottom: 4,
      marginLeft: 8,
      // backgroundColor: 'red'
    },
    nameTxt: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    idLayout: {
      flexDirection: 'row',
      alignItems: "center",
      marginTop: 12,
      // backgroundColor: '#ccc'
    },
    idTxt: {
      fontSize: 12,
      color: 'white',
    },
    iconCode: {
      width: 12,
      height: 12,
      marginLeft: 4,
      marginBottom: -1,
      tintColor: 'white',
    },
    descTxt: {
      fontSize: 14,
      color: '#ccc',
      marginLeft: 16,
      marginBottom: 8,
    },
    sexView: {
      marginTop: 6,
      width: 24,
      height: 18,
      backgroundColor: '#ffffff60',
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      marginLeft: 16,
    },
    sexImg: {
      width: 12,
      height: 12,
      resizeMode: 'contain',
      tintColor: '#1876ff'
    },
    countLayout: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 28,
    },
    itemLayout: {
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 16,
    },
    itemCount: {
      fontSize: 16,
      color: 'white',
    },
    itemLabel: {
      fontSize: 14,
      color: '#ffffffc0',
      marginTop: 3,
    },
    editButton: {
      width: 80,
      height: 32,
      borderRadius: 16,
      borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    editTxt: {
      fontSize: 14,
      color: '#ffffffE0'
    },
    settingButton: {
      width: 46,
      height: 32,
      borderRadius: 16,
      marginLeft: 12,
      borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconSetting: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      tintColor: 'white',
    },
  })

  return (
    <ImageBackground style={styles.imgBg} source={icon_bg} imageStyle={styles.bgImg}>

      {/* 顶部按钮 */}
      <View style={styles.titleBar}>
        <Image style={styles.iconMenu} source={icon_menu} />
        <Image style={styles.iconShare} source={icon_share} />
      </View>

      {/* 头像区域 */}
      <View style={styles.infoLayout}>
        <View style={styles.avatarLayout}>
          <Image style={styles.avatarImg} source={avatar} />
          <Image style={styles.iconAdd} source={icon_add} />

          <View style={styles.nameLayout}>
            <Text style={styles.nameTxt}>大公爵</Text>
            <View style={styles.idLayout}>
              <Text style={styles.idTxt}>小红书号：118302851</Text>
              <Image style={styles.iconCode} source={icon_code} />
            </View>
          </View>
        </View>
      </View>

      {/* 关注 */}
      <Text style={styles.descTxt}>点击关注，填写简介</Text>


      {/* 性别 */}
      <View style={styles.sexView}>
        <Image style={styles.sexImg} source={icon_male} />
      </View>

      {/* 数据 */}
      <View style={styles.countLayout}>

        {/* 关注 */}
        <View style={styles.itemLayout}>
          <Text style={styles.itemCount}>142</Text>
          <Text style={styles.itemLabel}>关注</Text>
        </View>

        {/* 粉丝 */}
        <View style={styles.itemLayout}>
          <Text style={styles.itemCount}>2098</Text>
          <Text style={styles.itemLabel}>粉丝</Text>
        </View>

        {/* 收藏 */}
        <View style={styles.itemLayout}>
          <Text style={styles.itemCount}>1042</Text>
          <Text style={styles.itemLabel}>获赞与收藏</Text>
        </View>

        <View style={{ flex: 1 }} />


        <TouchableOpacity style={styles.editButton} activeOpacity={0.5}>
          <Text style={styles.editTxt}>编辑资料</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton} activeOpacity={0.5}>
          <Image style={styles.iconSetting} source={icon_setting} />
        </TouchableOpacity>
      </View>

    </ImageBackground>


  )
}

const Tabs = () => {

  const styles = StyleSheet.create({
    tabsLayout: {
      width: '100%',
      height: 46,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -12,
      // paddingTop: 4,
      // backgroundColor: 'red'
    },
  })
  return (
    <View style={styles.tabsLayout}>
      <Text>tabs模块</Text>
    </View>

  )
}

// 个人信息页面
function PersonalInfo(props) {

  return (
    <View style={styles.root}>
      {/* 顶部模块 */}
      {renderDashboard()}
      {/* tabs模块 */}
      {Tabs()}
      {/* model模块 */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
});

export default PersonalInfo;