import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View,StyleSheet } from 'react-native'

import cricketData from '../Data/cricket.json'
// import footballData from '../Data/football.json'

export default function Cricket({navigation}) {
  const [cricket, setCricket] = useState(cricketData.results);
 
      const displayCricketMatch = (itemObject) => {
        const {index, item} = itemObject;
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CricketDetail',
               {series_id: item.series_id,
                match_subtitle: item.match_subtitle,
                venue: item.venue,
                status: item.status,
                home: item.home,
                away: item.away,
                date: item.date,})}>
            <View
              style={{backgroundColor: index % 2 === 0 ? 'blue' : 'green',
              height: 60,
              borderBottomWidth: 3,
              borderBottomColor: 'black',
              padding: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
              marginBottom: 0,
              marginTop: 15,
              borderRadius: 10}}>
              <Text
                style={styles.TextStyle}>
                {item.match_title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };


  return (
    <View style={{flex: 1}}>
      <FlatList data={cricket} renderItem={displayCricketMatch} keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
};

const styles = StyleSheet.create({
    TextStyle : {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
    }
})
