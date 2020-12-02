import * as React from 'react';
import { ImageBackground, Text, View, style } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiHomeRoof } from '@mdi/js';
import GroceryList from './GroceryList';
import ListOfLists from './ListOfLists';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <ImageBackground source={{ uri: 'https://wizardlyshoe4.s-ul.eu/sRPafkZt.jpg' }} style={{ width: '100%', height: '100%' }}>

        <Text>Home Screen !</Text>

      </ImageBackground>

    </View>
  );
}



const Tab = createBottomTabNavigator();

function AllTabs() {
  return (
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
      />

      <Tab.Screen
        name="Lists"
        component={ListOfLists}
        options={{
          tabBarLabel: 'Groceries',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket-fill" color={color} size={size} />
          )
        }}
      />



    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AllTabs />
    </NavigationContainer>
  );
}