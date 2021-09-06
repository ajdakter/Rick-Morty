import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Episode from './component/Episode';
import EpisodeDetail from './component/EpisodeDetail';
import CharacterDetail from './component/CharacterDetail';
import Header from './component/header/Header';

const RootStack = createStackNavigator();
 
const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Episode" component={Episode} options={{ headerShown: false }} />
        <RootStack.Screen name="EpisodeDetail" component={EpisodeDetail}  options={{ headerShown: false }} />
        <RootStack.Screen name="CharacterDetail" component={CharacterDetail} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default Router;