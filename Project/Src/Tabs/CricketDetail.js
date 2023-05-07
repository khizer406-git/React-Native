import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View,Button,StyleSheet } from 'react-native'

import cricketData from '../Data/cricket.json'

export default function Cricket({route,navigation}) {
  const id = route.series_id;
  const {series_id,match_subtitle, venue, status, home, away, date} = route.params;
        
  return (
    <View style={{flex: 1}}>
        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            Series_id
          </Text>
          <Text style={styles.TextContainer}>
            {series_id}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            Match Subtitle
          </Text>
          <Text style={styles.TextContainer}>
            {match_subtitle}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            Venue
          </Text>
          <Text style={styles.TextContainer}>
            {venue}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            status
          </Text>
          <Text style={styles.TextContainer}>
            {status}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
        <Text style={styles.TextContainer2}>
            Home ground Team
          </Text>
          <Text style={styles.TextContainer}>
            {home.name}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            Away Home Team
          </Text>
          <Text style={styles.TextContainer}>
            {away.name}
          </Text>
        </View>

        <View style={styles.ViewContainer}>
          <Text style={styles.TextContainer2}>
            Date
          </Text>
          <Text style={styles.TextContainer}>
            {date}
          </Text>
        </View> 
    </View>
  );
};

const styles = StyleSheet.create({
    ViewContainer: {
      border: '10px solid black',
      padding: 8,
      margin: 10,
      marginBottom: 5,
      marginTop: 5,
    },
    TextContainer: {
      backgroundColor: 'lightgreen',
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: "center",
      borderRadius: 10,
    },
    TextContainer2: {
      backgroundColor: 'lightyellow',
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: "center",
      borderRadius: 10,
    }
})