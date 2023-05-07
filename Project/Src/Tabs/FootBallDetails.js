import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
  
 const FootBallDetails=({route, navigation}) =>{
    const {fixture, league, teams} = route.params;
  
    return (
      <View>
        <View style={styles.View1}>
        <View style={styles.View2}>
            <Text style={styles.Text1}>League Name</Text>
        </View>
        <View style={styles.View2} >
            <Text style={styles.Text2}>{league.name}</Text>
        </View>
    </View>

    <View style={styles.View1}>
        <View style={styles.View2} >
            <Text style={styles.Text1}>League Seson</Text>
        </View>
        <View style={styles.View2} >
            <Text style={styles.Text2}>{league.season}</Text>
        </View>
    </View>

    <View style={styles.View1}>
        <View style={styles.View2} >
            <Text style={styles.Text1}>Venue</Text>
        </View>
        <View style={styles.View2} >
            <Text style={styles.Text2}>{fixture.venue.name}</Text>
        </View>
    </View>

    <View style={styles.View1}>
        <View style={styles.View2}>
            <Text style={styles.Text1}>Winner</Text>
        </View>
        <View style={styles.View2} >
            <Text style={styles.Text2}>{teams.home.winner == true ? (
            teams.home.name
          ) : teams.away.winner == true ? (
            teams.away.name
          ) : (
            <Text>Tie</Text>
          )}</Text>
        </View>
    </View>
      </View>
    );
  }
  export default FootBallDetails;

  const styles = StyleSheet.create({
    View1: {  
        flexDirection:'column',
        padding: 20,
        margin: 10,
        backgroundColor: 'blue',
        borderRadius: 25,
    },
    View2: {
        alignItems:'center'
    },
    Text1: {
        color:'white',fontSize:15, fontWeight:'bold'
    },
    Text2: {
        color:'white',fontSize:15
    }
})