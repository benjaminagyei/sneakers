import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import HomeScreen from './screens/Home';
import ProductDetails from './screens/Productdetail';
import Cart from './screens/Cart';

const Master = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Master.Navigator screenOptions={{header: () => null}}>
       <Master.Screen 
       name='Login' 
       component={Login}/>
       <Master.Screen 
       name='Home'
       component={HomeScreen}/>
       <Master.Screen
       name='Details'
       component={ProductDetails}/>
       <Master.Screen
       name='Cart'
       component={Cart} />
     </Master.Navigator>
   </NavigationContainer>
  );
}
