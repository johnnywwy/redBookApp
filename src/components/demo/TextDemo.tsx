import {Button, StyleSheet, Text, View, Alert} from 'react-native';

export default () => {
  return (
    <View style={style.root}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Click me"
          onPress={() => {
            const btns = [
              {text: '取消', onPress: () => console.log('取消')},
              {text: '确认', onPress: () => console.log('确认')},
              {text: '考虑一下', onPress: () => console.log('考虑一下')},
            ];
            // console.log('Button clicked')
            Alert.alert('这是标题', '这是内容', btns);
          }}
        />
      </View>
      {/* <Text style={style.txt}>123456</Text>
      <Text style={style.txt2}></Text>
      <Text style={style.txt3}></Text> */}
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
});
