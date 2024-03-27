import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={style.root}>
      <Text style={style.txt}>123456</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  txt: {
    fontSize: 20,
  },
});
