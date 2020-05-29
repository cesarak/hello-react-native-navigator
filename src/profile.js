import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.view}>
        <Button mode="outlined" onPress={() => goBack()}>
          Go Back
        </Button>

        <Button
          mode="contained"
          onPress={() => navigate('Settings')}>
          Go to Settings
        </Button>
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FF00',
    justifyItens: 'spaceAround',
  },
  text: {
    color: '#FF0000',
  },
};

export default ProfileScreen;
