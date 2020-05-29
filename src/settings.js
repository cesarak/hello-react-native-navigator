/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';

function SettingsScreen({navigation}) {
  // const {navigate, goBack} = this.props.navigation;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button mode="contained" onPress={() => navigation.goBack()}>Go Back</Button>
      <Text>Settings</Text>
    </View>
  );
}

export default SettingsScreen;
