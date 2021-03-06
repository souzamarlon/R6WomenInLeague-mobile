import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import ChatMessages from './pages/Chat/ChatMessages';

import Profile from './pages/Profile';

Icon.loadFont();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function ChatStack({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Chat"
      // headerMode="screen"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          // marginLeft: 0,
        },
        headerLeftContainerStyle: {
          // marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false, headerTransparent: true }}
      />

      <Stack.Screen
        name="ChatMessages"
        component={ChatMessages}
        // options={{ headerShown: false, headerTransparent: true }}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat');
              }}
            >
              <Icon
                name="arrow-back"
                size={30}
                color="#FFF"
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#333',
        inactiveBackgroundColor: '#111',
        activeBackgroundColor: '#222',
        showLabel: false,
        // animationEnabled: true,

        labelStyle: {
          fontSize: 14,
          // paddingBottom: 5,
        },
        style: {
          height: 38,
          backgroundColor: '#111',
          paddingTop: 2,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Friends"
        component={Friends}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="people" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ color }) => (
            <Icon name="chat" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="face" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
