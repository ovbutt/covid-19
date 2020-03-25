import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Colors} from '../helpers/Colors';

export default class Helplines extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{fontSize: 32, fontWeight: 'bold', color: Colors.dkGreen}}>
            CORONAVIRUS HELPLINES
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
         <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            HOSPITALS{' '}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            LABORATORIES{' '}
          </Text>
        </View>
      </ScrollView>
    );
  }
}
