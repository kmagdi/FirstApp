import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import {DrawerNavigator} from './navigation/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')
  });

  if(!fontsLoaded) 
  return null;
    
  return (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>    
  );
}


