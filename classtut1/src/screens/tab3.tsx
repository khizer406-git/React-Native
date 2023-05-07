import {Button, View} from 'react-native';
import {useAppContext} from '../context/appContext';

const Tab3 = () => {
  const [counter,setCounter] = useAppContext();
  const updateCounter = () => {
    setCounter(counter + 1);
  }
  return (
    <View>
      <Button onPress={updateCounter}>UpdateCounter</Button>
    </View>)
};

export default Tab3;
