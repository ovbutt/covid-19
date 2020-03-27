import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Colors} from '../helpers/Colors';
import {Card} from 'native-base';
import {
  facts,
  myths,
  precautions,
  symptoms,
  province,
  stats,
} from '../helpers/Data';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: Colors.white}}>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: Colors.red,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Stay home, Stay Safe, Save Lives
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: Colors.info,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Help needy around you
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{fontSize: 28, fontWeight: 'bold', color: Colors.dkGreen}}>
            Coronavirus stats in Pakistan
          </Text>
        </View>

        <Card
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70%',
            height: 150,
            borderRadius: 15,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 'bold',
              color: Colors.danger,
              marginTop: 20,
            }}>
            875
          </Text>
          <View
            style={{
              backgroundColor: Colors.red,
              width: '100%',
              height: 60,
              borderBottomEndRadius: 15,
              borderBottomStartRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', color: Colors.white}}>
              Confirmed Cases
            </Text>
          </View>
        </Card>
        <View>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
              flexGrow: 3,
              flexWrap: 'wrap',
            }}>
            {stats.map(item => (
              <Card
                style={{
                  marginTop: 20,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    color: Colors.dark,
                    marginTop: 10,
                  }}>
                  {item.number}
                </Text>
                <View
                  style={{
                    backgroundColor: item.color,
                    width: '100%',
                    height: 50,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Colors.white,
                    }}>
                    {item.title}
                  </Text>
                </View>
              </Card>
            ))}
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            Cases in Provinces{' '}
          </Text>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
              flexGrow: 3,
              flexWrap: 'wrap',
            }}>
            {province.map(item => (
              <Card
                style={{
                  marginTop: 20,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    color: Colors.dark,
                    marginTop: 10,
                  }}>
                  {item.number}
                </Text>
                <View
                  style={{
                    backgroundColor: item.color,
                    width: '100%',
                    height: 50,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: Colors.white,
                      textAlign: 'center',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </Card>
            ))}
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            SYMPTOMS{' '}
          </Text>
          <View>
            {symptoms.map((item, index) => (
              <View
                key={index}
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 50,
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                  source={item.icon}
                />
                <Text style={{fontSize: 22, marginTop: 10, marginLeft: 30}}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            PRECAUTIONS{' '}
          </Text>
          <View>
            {precautions.map((item, index) => (
              <View
                key={index}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 30, width: 30, marginLeft: 20}}
                  source={item.icon}
                />

                <Text
                  style={{
                    fontSize: 18,
                    width: '90%',
                    textAlign: 'left',
                    marginTop: 10,
                    marginLeft: 10
                  }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            FACTS About COVID-19{' '}
          </Text>
          <View>
            {facts.map((item, index) => (
              <View
                key={index}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 30, width: 30, marginLeft: 20}}
                  source={item.icon}
                />

                <Text
                  style={{
                    fontSize: 18,
                    width: '90%',
                    textAlign: 'left',
                    marginTop: 10,
                    marginLeft: 10
                  }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 20,
              color: Colors.dkGreen,
            }}>
            {' '}
            Myths About COVID-19{' '}
          </Text>
          <View>
            {myths.map((item, index) => (
              <View
                key={index}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 30, width: 30, marginLeft: 20}}
                  source={item.icon}
                />

                <Text
                  style={{
                    fontSize: 18,
                    width: '90%',
                    textAlign: 'left',
                    marginTop: 10,
                    marginLeft: 10
                  }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
