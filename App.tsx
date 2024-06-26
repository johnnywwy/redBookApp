/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ClassView from './src/components/Classview';
import FunctionView from './src/components/FunctionView';
import TextDemo from './src/components/demo/TextDemo';
import PersonalInfo from './src/components/PersonalInfo';
import Home from './src/components/Account_Password_Book/Home';
import Hoc from './src/components/HOC/infoView';
import CustomInput from './src/components/Ref/customInput';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}></ScrollView> */}
      {/* <View style={{flex: 1, backgroundColor: 'skyblue'}}></View> */}
      {/* <ClassView /> */}
      {/* <FunctionView name="张三" level="1" sex="男" age={12} /> */}
      {/* <TextDemo /> */}
      {/* <PersonalInfo /> */}

      <View style={styles.root}>
        {/* <Text>123</Text> */}
        {/* <ClassView /> */}
        {/* <FunctionView name="张三" level="1" sex="男" age={12} /> */}
        {/* <TextDemo /> */}
        {/* <PersonalInfo /> */}
        {/* <Home /> */}
        {/* <Hoc /> */}
        <CustomInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
