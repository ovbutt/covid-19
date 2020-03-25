import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import {Colors} from '../helpers/Colors';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Tab');
    }, 2000);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../assets/images/coronavirus_PNG40.png')}
          style={{height: 200, width: 200}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 20,
            color: Colors.dkGreen,
          }}>
          COVID-19 LIVE COUNTER{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            textAlign: 'center',
            marginTop: 10,
            color: Colors.ltGreen,
          }}>
          PAKISTAN
        </Text>
      </View>
    );
  }
}
