import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Ekranlar
import CountryListScreen from './screens/CountryListScreen';
import SearchScreen from './screens/SearchScreen';
import RandomCountryScreen from './screens/RandomCountryScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ana Sayfa') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Arama') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Rastgele') {
              iconName = focused ? 'shuffle' : 'shuffle-outline';
            } else if (route.name === 'Hakkında') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={focused ? 28 : 22} color={color} />;
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#f5cccc',
          tabBarStyle: {
            backgroundColor: '#bc4749',
            paddingBottom: 5,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Ana Sayfa" component={CountryListScreen} />
        <Tab.Screen name="Arama" component={SearchScreen} />
        <Tab.Screen name="Rastgele" component={RandomCountryScreen} />
        <Tab.Screen name="Hakkında" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
