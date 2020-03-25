import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import { Colors } from '../helpers/Colors';

export default class Updates extends Component {
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
            Live Updates
          </Text>
        </View>

      </ScrollView>
    );
  }
}
