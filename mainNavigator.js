import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/home';
import About from './src/pages/about';
import Contact from './src/pages/contact';
import History from './src/pages/history';
import Faq from './src/pages/faq';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Contact' component={Contact}/>
            <Stack.Screen name='History' component={History}/>
            <Stack.Screen name='Faq' component={Faq}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
