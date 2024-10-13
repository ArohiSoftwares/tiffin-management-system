// StudentTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/student/HomeScreen';
import DashboardScreen from '../screens/student/DashboardScreen';
import AttendanceScreen from '../screens/student/AttendanceScreen';
import NotificationsScreen from '../screens/student/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function StudentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Mark Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}
