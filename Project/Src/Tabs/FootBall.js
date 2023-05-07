import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import footballData from '../Data/football.json'

export default function FootBall({navigation}) {
  const [football, setFootball] = useState(footballData.response);
 
      const displayCountry = (itemObject) => {
        const {index, item} = itemObject;
        return (  
            <TouchableOpacity
              style={{
                padding: 15,
                margin: 15,
                backgroundColor: index % 2 === 0 ? 'blue' : 'green',
                justifyContent: 'space-around',
              }}
              onPress={() => {
                navigation.navigate('FootBallDetails', {
                  fixture: item.fixture,
                  league: item.league,
                  teams: item.teams,
                });
              }}
              >
              <View style={styles.View1}>
                <View>
                  <Image
                    source={{uri: item.teams.home.logo}}
                    style={styles.image}
                  />
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {item.teams.home.name.length > 10
                      ? item.teams.home.name.substring(0, 10) + '...'
                      : item.teams.home.name}
                  </Text>
                </View>
                <Text
                  style={{fontSize: 20, color: 'white', textAlignVertical: 'center'}}>
                  Vs
                </Text>
                <View>
                  <Image
                    source={{uri: item.teams.away.logo}}
                    style={{width: 60, height: 60}}
                  />
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {item.teams.away.name.length > 10
                      ? item.teams.away.name.substring(0, 10) + '...'
                      : item.teams.away.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity> 
        );
      };


  return (
    <View style={{flex: 1}}>
      <FlatList data={football} renderItem={displayCountry} keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
};

const styles = StyleSheet.create({
    TextContainer: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
    },
    View1: {
      justifyContent: 'space-around',
      flexDirection: 'row'
    },
    image: {
      width: 60,
      height: 60
    }
  })
