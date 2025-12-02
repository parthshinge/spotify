import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import OnboardingScreen from './screens/OnboardingScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import LibraryScreen from './screens/LibraryScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return ( <
        Tab.Navigator screenOptions = {
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(15, 5, 30, 0.95)',
                    borderTopColor: 'rgba(168, 85, 247, 0.2)',
                    borderTopWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarActiveTintColor: '#a855f7',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
            }
        } >
        <
        Tab.Screen name = "Discover"
        component = { DiscoverScreen }
        options = {
            {
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => ( <
                    Text style = {
                        { fontSize: 24, color } } > 🏠 < /Text>
                ),
            }
        }
        /> <
        Tab.Screen name = "Favorites"
        component = { FavoritesScreen }
        options = {
            {
                tabBarLabel: 'Liked',
                tabBarIcon: ({ color }) => ( <
                    Text style = {
                        { fontSize: 24, color } } > ❤️ < /Text>
                ),
            }
        }
        /> <
        Tab.Screen name = "Library"
        component = { LibraryScreen }
        options = {
            {
                tabBarLabel: 'Library',
                tabBarIcon: ({ color }) => ( <
                    Text style = {
                        { fontSize: 24, color } } > 📚 < /Text>
                ),
            }
        }
        /> <
        Tab.Screen name = "Profile"
        component = { ProfileScreen }
        options = {
            {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => ( <
                    Text style = {
                        { fontSize: 24, color } } > 👤 < /Text>
                ),
            }
        }
        /> <
        /Tab.Navigator>
    );
}

export default function App() {
    return ( <
        GestureHandlerRootView style = {
            { flex: 1 } } >
        <
        NavigationContainer >
        <
        Stack.Navigator screenOptions = {
            {
                headerShown: false,
                animationEnabled: true,
                cardStyle: { backgroundColor: 'transparent' },
            }
        } >
        <
        Stack.Screen name = "Onboarding"
        component = { OnboardingScreen }
        /> <
        Stack.Screen name = "MainApp"
        component = { TabNavigator }
        /> <
        /Stack.Navigator> <
        /NavigationContainer> <
        /GestureHandlerRootView>
    );
}