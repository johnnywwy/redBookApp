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
  Modal,
} from 'react-native';
import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';

import icon_close from '../../../src/assets/account_password_book/icon_close_modal.png';

export default forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // 暴露方法
  useImperativeHandle(ref, () => ({show, hide}));

  // 标题栏
  const renderTitle = () => {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        backgroundColor: 'white',
      },
      titleLayout: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      closeImgLayout: {
        position: 'absolute',
        right: -12,
        top: -12,
      },
      closeImg: {
        width: 24,
        height: 24,
      },
      content: {
        width: '100%',
        // height: 200,
        // backgroundColor: 'red',
      },
    });

    return (
      <View style={styles.root}>
        {/* <Text>心脏</Text> */}
        <View style={styles.titleLayout}>
          <Text style={styles.title}>新建</Text>
          <TouchableOpacity onPress={hide} style={styles.closeImgLayout}>
            <Image source={icon_close} style={styles.closeImg} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.content}>
          <View>
            <Text>账号类型</Text>
            {renderType()}
          </View>
        </View> */}
      </View>
    );
  };

  // 账号类型
  const renderType = () => {
    const typesList = ['游戏', '平台', '银行卡', '其他'];

    const styles = StyleSheet.create({
      typeLayout: {
        width: '100%',
        height: 32,
        backgroundColor: 'red',
      },
    });

    return (
      <View style={styles.typeLayout}>
        <Text>游戏</Text>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade">
      <View style={styles.root}>
        <View style={styles.content}>
          {renderTitle()}
          <Text style={styles.name}>账号类型</Text>
          {renderType()}
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 16,
  },
  content: {
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    marginBottom: 6,
  },
});
