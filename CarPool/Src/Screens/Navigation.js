import React, { useState, useEffect } from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Dimensions, Button } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE,Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import polyline from '@mapbox/polyline';


const Navigation = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const [loading,setLoading] = useState(false);
  const { width, height } = Dimensions.get('window');
  


  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const source = '24.9051662,67.1137535'; // Replace with your source address
  // var source = "string";
  var destination = '24.917755, 67.0971768'; // Replace with your destination address
  const apiKey = 'AIzaSyA3FzKFHiA7bUcmOaubinG6wqCZt8Dw7Yk'; // Replace with your API key

  var srclat;
  var srclng;

  const [load,setLoad] = useState(false);
  
  const fetchDirectionsOnDrag = async (event) => {
    
    try {

      let a = `${event.latitude}, ${event.longitude}`;
      console.log(a,"i am a");
      let b = `${userLocation.latitude}, ${userLocation.longitude}`;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${b}&destination=${a}&key=${apiKey}`
      );
      const points = response.data.routes[0].overview_polyline.points;
      const decodedPoints = polyline.decode(points);
      console.log(decodedPoints);
      const coordinates = decodedPoints.map(point => ({
        latitude: point[0],
        longitude: point[1],
      }));
      setRouteCoordinates(coordinates);
          setLoad(true)
          console.log("Everything going good")
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  const fetchDirectionsOnSearch = async (event) => {
    
    try {

      let a = `${event.lat}, ${event.lng}`;
      let b = `${userLocation.latitude}, ${userLocation.longitude}`;
      console.log(a,"i am a","\n");
      console.log(b,"i am b","\n");

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${b}&destination=${a}&key=${apiKey}`
      );
      const points = response.data.routes[0].overview_polyline.points;
      const decodedPoints = polyline.decode(points);
      console.log(decodedPoints);
      const coordinates = decodedPoints.map(point => ({
        latitude: point[0],
        longitude: point[1],
      }));
      setRouteCoordinates(coordinates);
          setLoad(true)
          console.log("Everything going good")
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };


  const onMarkerDrag = event => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0100,
      longitudeDelta: 0.0050,
    });
    fetchDirectionsOnDrag(event.nativeEvent.coordinate);
    console.log(event.nativeEvent.coordinate)
  };

    useEffect(() => {
    // Fetch and set user's current location
    Geolocation.getCurrentPosition(
      position => {
        srclat = position.coords.latitude;
        srclng = position.coords.longitude;
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0050,
        });
        setSelectedLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0050,
        })
        // source = `${position.coords.latitude}, ${position.coords.longitude}`;
        // console.log("I am soure", source, typeof(source))
        setLoading(true);
        console.log(position.coords.latitude,"\n",position.coords.longitude)
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );


    

    
  }, []);

  useEffect(()=>{},[selectedLocation])

  const handleLocationSelect = (data, details) => {
    const { lat, lng } = details.geometry.location;
    console.log(details.geometry.location);
    setSelectedLocation({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0100,
      longitudeDelta: 0.0050,
    });
    fetchDirectionsOnSearch(details.geometry.location)
  };

    const GooglePlaceItem = ({ item }) => {
      return (
        <TouchableOpacity>
          <Text>{item.description}</Text>
        </TouchableOpacity>
      );
    };

  return (
    <View style={styles.container}>
      <View style={{position:'absolute',zIndex: 1,width:width*0.99,alignSelf:'center',padding:10,borderRadius:100}}>
        <GooglePlacesAutocomplete
          placeholder="Search Your Drop Off Location"
          fetchDetails={true}
          renderRow={rowData => (
            <GooglePlaceItem item={rowData} />
          )}
          onPress={handleLocationSelect}
          query={{
            key: 'AIzaSyA3FzKFHiA7bUcmOaubinG6wqCZt8Dw7Yk',
            language: 'en',
          }}
        />
      </View>     
      <View style={{flex:1}}>
      {loading ? <MapView 
        style={[styles.map]}
        initialRegion={userLocation}
        provider={PROVIDER_GOOGLE}
        region={selectedLocation} 
        showsUserLocation={true}
      >
        <Marker
          coordinate={selectedLocation}
          draggable={true}
          onDragEnd={onMarkerDrag}
          image={require('../Pictures/Pin.png')}
        />

        {load?(<View>        
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#4a89f3"
          strokeWidth={4}
        />
        <Marker coordinate={routeCoordinates[0]} title="Source" />
        <Marker
            coordinate={routeCoordinates[routeCoordinates.length - 1]}
            title="Destination"
        />
        </View>):null}
      </MapView> : null}
      </View>  
      {/* <BottomMenu isVisible={menuVisible} onClose={closeMenu} /> */}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Navigation;




















// import MapModal from './Modal';
// import BottomMenu from './Modal';
// import customMapStyle from './customMapStyle.json';


// const [menuVisible, setMenuVisible] = useState(false);


  // const openMenu = () => {
  //   setMenuVisible(true);
  // };

  // const closeMenu = () => {
  //   setMenuVisible(false);
  // };