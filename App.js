import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'


const MainStack = createStackNavigator(
  {
    Welcome: HomeScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'Welcome',
  },
);

const AppContainer = createAppContainer(MainStack)

export default App = () => {
  return (
    <AppContainer />
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})






