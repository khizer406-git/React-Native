import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const Test = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [fuck, setFuck] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container,{borderColor: isEnabled ? 'yellow' : 'blue'}]}>
      <Switch
        trackColor={{false: 'black', true: 'black'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#4b3acc'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      transform:[{rotate: "-90deg"},{scaleX: 0.80},{scaleY: 0.80}],
      paddingTop:'0.5%',
      marginBottom:'0%',
      borderWidth:1,
      borderRadius:30,
  },
});

export default Test;


// {transform:[{rotate: "-90deg"}],paddingTop:'0.5%',marginBottom:'0%',borderWidth:1,borderColor:{isEnabled ?'yellow' : 'blue'},borderRadius:10}

// import React, { useState } from "react";
// import Slider from "react-native-slider";
// import { StyleSheet, View, Text } from "react-native";

// const Test = () => {
//   const [value, setValue] = useState(15);

//   return (
//     <View style={styles.container}>
//       <Slider
//         value={value}
//         onValueChange={(newValue) => setValue(newValue)}
//       />
//       <Text>Value of slider is : {value}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//     alignItems: "stretch",
//     justifyContent: "center",
//   },
// });

// export default Test;