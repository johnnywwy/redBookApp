import React from 'react';
import { View } from 'react-native';

class ClassView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // eslint-disable-next-line react-native/no-inline-styles
    return <View style={{ width: 200, height: 200, backgroundColor: 'pink' }} />;
  }
}
export default ClassView;
