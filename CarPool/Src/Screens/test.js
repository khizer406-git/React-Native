import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import axios from 'axios';
import polyline from '@mapbox/polyline';

const Test = () => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const source = '24.9051662,67.1137535'; // Replace with your source address
  const destination = '24.917755, 67.0971768'; // Replace with your destination address
  const apiKey = 'AIzaSyA3FzKFHiA7bUcmOaubinG6wqCZt8Dw7Yk'; // Replace with your API key

  const [load,setload] = useState(false)

//   latitude: 24.9049,
//   longitude: 67.115,




  useEffect(() => {
    const fetchDirections = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${source}&destination=${destination}&key=${apiKey}`
        );
        const points = response.data.routes[0].overview_polyline.points;
        const decodedPoints = polyline.decode(points);
        console.log(decodedPoints)
        const coordinates = decodedPoints.map(point => ({
          latitude: point[0],
          longitude: point[1],
        }));
        setRouteCoordinates(coordinates);
            setload(true)
            console.log("Everything going good")
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    fetchDirections();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 24.9051662,
          longitude: 67.1137535,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {load?(<View>        
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#FF0000"
          strokeWidth={4}
        />
        <Marker coordinate={routeCoordinates[0]} title="Source" />
        <Marker
            coordinate={routeCoordinates[routeCoordinates.length - 1]}
            title="Destination"
        />
        </View>):null}
      
      </MapView>
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

export default Test;
