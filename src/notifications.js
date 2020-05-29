import * as React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const NotificationsScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button mode="contained" onPress={() => navigation.navigate('Settings')}>
      Go to Settings
    </Button>
    <Button onPress={() => navigation.goBack()}>Go back</Button>
  </View>
);

NotificationsScreen.navigationOptions = {
  title: 'Notifications',
};

export default NotificationsScreen;
