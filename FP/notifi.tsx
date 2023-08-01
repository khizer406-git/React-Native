import React from 'react';
import { View, Button } from 'react-native';
import { useToast } from 'react-native-toast-message';

function MyComponent() {
  const toast = useToast();

  const handleNotification = () => {
    toast.show({
      type: 'info',
      text1: 'Hello',
      text2: 'This is a notification',
    });
  };

  return (
    <View>
      <Button title="Show Notification" onPress={handleNotification} />
    </View>
  );
}

export default MyComponent;
