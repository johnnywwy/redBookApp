import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import icon_add from '../../assets/images/icon_add.png';

type IReactComponent =
  | React.FunctionComponent
  | React.ComponentClass<any>
  | React.MemoExoticComponent<React.FunctionComponent<any>>;

export default <T extends IReactComponent>(OriginView: T): T => {
  const HOCView = (props: any) => {
    return (
      <>
        <OriginView {...props} />
        <TouchableOpacity style={style.addButton}>
          <Image source={icon_add} style={{width: 40, height: 40}} />
        </TouchableOpacity>
      </>
    );
  };

  return HOCView as T;
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 64,
    right: 20,
    // width: 60,
    // height: 60,
    // borderRadius: 30,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // shadow
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  },
});
