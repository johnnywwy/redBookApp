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

import icon_game from '../../../src/assets/account_password_book/icon_game.png';
import icon_arrow from '../../../src/assets/account_password_book/icon_arrow.png';

export default forwardRef((props, ref) => {
  const [right90deg, setRight90deg] = useState(true);
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Image style={styles.image} source={icon_game} />
          <Text style={styles.title}>游戏</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowImageLayout}
          activeOpacity={0.8}
          onPress={() => setRight90deg(!right90deg)}>
          <Image
            style={[
              styles.arrowImage,
              right90deg && {transform: [{rotate: '-90deg'}]},
            ]}
            source={icon_arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 16,
  },
  content: {
    height: 42,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    color: '#333',
    fontSize: 16,
  },
  arrowImageLayout: {
    padding: 2,
    right: -5,
  },
  arrowImage: {
    width: 24,
    height: 24,
  },
  arrowImageRightDeg: {
    transform: [{rotate: '90deg'}],
  },
});
