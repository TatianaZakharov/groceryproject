import * as React from 'react';
import { ImageBackground, Text, View, style } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiHomeRoof } from '@mdi/js';
import GroceryList from './GroceryList';
import ListOfLists from './ListOfLists';



function HomeScreen() {

  /// background image 
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <ImageBackground source={{ uri: 'https://wizardlyshoe4.s-ul.eu/BxxX5s52.jpg' }} style={{ width: '100%', height: '100%' }}>

      </ImageBackground>

    </View>
  );
}


/// creates tabs and their styles
const Tab = createBottomTabNavigator();

function AllTabs() {
  return (
    /// tab for home 
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            
          )
        }}
/// tab for groceries 
      />

      <Tab.Screen
        name="Groceries"
        component={GroceryList}
        options={{
          tabBarLabel: 'Groceries',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket-fill" color={color} size={size} />
          )
        }}
        /// tab for your groceries 
      />
      <Tab.Screen
        name="Lists"
        component={ListOfLists}
        options={{
          tabBarLabel: 'Your Groceries',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-apple" color={color} size={size} />
          )
        }}
      />



    </Tab.Navigator>
  );
}
/// displays all tabs 
export default function App() {
  return (
    <NavigationContainer>
      <AllTabs />
    </NavigationContainer>
  );
}