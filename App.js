import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo icons

// Import screens
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/owners/DashboardScreen';
import AttendanceScreen from './screens/owners/AttendanceScreen';
import ProfileScreen from './screens/owners/ProfileScreen';
import HomeScreen from './screens/owners/HomeScreen';

// Import student screens
import StudentDashboardScreen from './screens/students/DashboardScreen';
import StudentAttendanceScreen from './screens/students/AttendanceScreen';
import StudentProfileScreen from './screens/students/ProfileScreen';
import StudentHomeScreen from './screens/students/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define Owner Tab Navigator
function OwnerTabNavigator({ userName }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={(props) => <HomeScreen {...props} userName={userName} />} // Pass userName to HomeScreen
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="check-circle" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}


// Define Student Tab Navigator
function StudentTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={StudentHomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Dashboard" 
        component={StudentDashboardScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Attendance" 
        component={StudentAttendanceScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="check-circle" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={StudentProfileScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} /> }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
       
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={({ route }) => {
            const { userName, userRole } = route.params || {};

            return userRole === 'owner' ? (
              <OwnerTabNavigator userName={userName} />
            ) : (
              <StudentTabNavigator/>
            );
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

