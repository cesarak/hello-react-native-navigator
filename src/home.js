import * as React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button mode="outlined" onPress={() => navigation.navigate('Profile')}>
      Go to Profile
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Notifications')}>
      Go to Notifications
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Settings')}>
      Go to Settings
    </Button>
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
