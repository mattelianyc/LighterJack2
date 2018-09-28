import React from 'react';
import { 
	View, 
	Text,
  Button,
	Image,
  Slider,
} from 'react-native';

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    headerTitle: (
      <Image style={{ width: 300, height: 39 }} source={require('../../assets/images/HeaderLJ.png')}/>
    )
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Noise Filter: 
        </Text>
        <Slider style={{ width: 300, color: 'black' }} />

        <Text>
          TX Level: 
        </Text>
        <Slider style={{ width: 300, color: 'black' }} />

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
