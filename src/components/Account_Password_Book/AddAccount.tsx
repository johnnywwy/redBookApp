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
  TextInput,
  KeyboardAvoidingView, // 键盘弹出时避免被键盘遮挡
} from 'react-native';
import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';

// import {useAsyncStorage} from '@react-native-async-storage/async-storage';
// import {useAsyncStorageHooks} from '../../hooks/useAsyncStorage';

import icon_close from '../../../src/assets/account_password_book/icon_close_modal.png';
import {createUUID} from '../../utils/UUID';
import {save, load, remove} from '../../utils/Storage';

export default forwardRef((props, ref) => {
  const [id, setId] = useState('');

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('游戏');
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassowrd] = useState('');

  const show = () => {
    setId(createUUID());
    setVisible(true);
  };
  const hide = () => setVisible(false);

  const onSavePress = async () => {
    const newAccount = {id, type, name, account, password};
    try {
      const res = await load('accountList');
      let accountList = res ? JSON.parse(res) : [];
      accountList.push(newAccount);
      await save('accountList', accountList);
      const res2 = await load('accountList');
      console.log('Loaded accountList:', res2);

      if (res2) hide();
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

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
        color: '#333333',
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
      },
    });

    return (
      <View style={styles.root}>
        {/* <Text>心脏</Text> */}
        <View style={styles.titleLayout}>
          <Text style={styles.title}>新 建</Text>
          <TouchableOpacity onPress={hide} style={styles.closeImgLayout}>
            <Image source={icon_close} style={styles.closeImg} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // 账号类型
  const renderType = () => {
    const typesList = ['游戏', '平台', '银行卡', '其他'];

    const styles = StyleSheet.create({
      typeLayout: {
        width: '100%',
        height: 30,
        // backgroundColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 12,
      },
      tabs: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        backgroundColor: '#fefefd',
      },
      tabsLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      tabsRight: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      removeLeftBorder: {
        borderLeftWidth: 0,
      },
      tabsText: {
        fontSize: 14,
        // borderWidth: 1,
        textAlign: 'center',
        // textDecorationLine: 'none',
        // 基线对齐
        // backgroundColor: '#333',
      },
    });

    return (
      <View style={styles.typeLayout}>
        {typesList.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabs,
                index === 0 ? styles.tabsLeft : {},
                index === typesList.length - 1 ? styles.tabsRight : {},
                index > 0 ? styles.removeLeftBorder : {}, //去除多余的边框
                {backgroundColor: type === item ? '#3050ff' : 'transparent'},
              ]}
              onPress={() => setType(item)}>
              <Text
                style={[
                  styles.tabsText,
                  {color: type === item ? 'white' : '#666666'},
                  // {backgroundColor: type === item ? '#3050ff' : '#fefefd'},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  // 账号类型
  const renderName = () => {
    const styles = StyleSheet.create({
      inputLayout: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#333',
      },
    });
    return (
      <TextInput
        style={styles.inputLayout}
        maxLength={20}
        value={name}
        onChangeText={text => setName(text)}></TextInput>
    );
  };

  // 账号
  const renderAccount = () => {
    const styles = StyleSheet.create({
      inputLayout: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#333',
      },
    });
    return (
      <TextInput
        style={styles.inputLayout}
        maxLength={20}
        value={account}
        onChangeText={text => setAccount(text)}></TextInput>
    );
  };

  // 密码
  const renderPassword = () => {
    const styles = StyleSheet.create({
      inputLayout: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#333',
      },
    });
    return (
      <TextInput
        style={styles.inputLayout}
        maxLength={20}
        value={password}
        onChangeText={text => setPassowrd(text)}></TextInput>
    );
  };

  // 保存按钮
  const renderButtons = () => {
    const styles = StyleSheet.create({
      saveButton: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3050ff',
        borderRadius: 8,
        marginTop: 8,
      },
      saveText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    return (
      // <View style={styles.buttons}>
      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.saveText}>保 存</Text>
      </TouchableOpacity>
      // </View>
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.root}>
        <View style={styles.content}>
          {renderTitle()}
          <Text style={styles.subTitleTxt}>账号类型</Text>
          {renderType()}
          <Text style={styles.subTitleTxt}>账号名称</Text>
          {renderName()}
          <Text style={styles.subTitleTxt}>账号</Text>
          {renderAccount()}
          <Text style={styles.subTitleTxt}>密码</Text>
          {renderPassword()}
          {renderButtons()}
        </View>
      </KeyboardAvoidingView>
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
  },
  content: {
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  subTitleTxt: {
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
});
