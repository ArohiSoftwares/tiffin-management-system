// App.js
//import LoginScreen from './screens/LoginScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';

// Import screens for owners
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/owners/DashboardScreen';
import AttendanceScreen from './screens/owners/AttendanceScreen';
import ProfileScreen from './screens/owners/ProfileScreen';
import HomeScreen from './screens/owners/HomeScreen';

// Import screens for students
import StudentDashboardScreen from './screens/students/DashboardScreen';
import StudentAttendanceScreen from './screens/students/AttendanceScreen';
import StudentProfileScreen from './screens/students/ProfileScreen';
import StudentHomeScreen from './screens/students/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function OwnerTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Mark Attendance" 
        component={AttendanceScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check-circle" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

function StudentTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={StudentHomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Dashboard" 
        component={StudentDashboardScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Mark Attendance" 
        component={StudentAttendanceScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check-circle" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={StudentProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {({ route }) => {
            const { userRole } = route.params || {};
            return userRole === 'owner' ? <OwnerTabNavigator /> : <StudentTabNavigator />;
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
