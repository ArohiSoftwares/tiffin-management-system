import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using icons from Expo

const HomeScreen = () => {
  const studentName = "GDG Lead Diyesh Mali"; // You can dynamically fetch this from your database

  return (
    <View style={styles.container}>
      {/* ScrollView for scrollable content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Personalized Greeting */}
        <Text style={styles.greeting}>Hello, {studentName} 👋</Text>
        <Text style={styles.subtitle}>Here’s what’s happening today:</Text>

        {/* Feature Cards Section */}
        <View style={styles.featureContainer}>
          {/* View Menu */}
          <TouchableOpacity style={styles.featureCard}>
            <Image source={require('../../assets/menu.png')} style={styles.icon} />
            <Text style={styles.cardText}>View Menu</Text>
          </TouchableOpacity>

          {/* Mark Attendance */}
          <TouchableOpacity style={styles.featureCard}>
            <Image source={require('../../assets/attendance.png')} style={styles.icon} />
            <Text style={styles.cardText}>Mark Attendance</Text>
          </TouchableOpacity>

          {/* View Notifications */}
          <TouchableOpacity style={styles.featureCard}>
            <Image source={require('../../assets/notification.png')} style={styles.icon} />
            <Text style={styles.cardText}>Notifications</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Links Section */}
        <Text style={styles.quickLinksTitle}>Quick Links</Text>
        <View style={styles.quickLinksContainer}>
          <TouchableOpacity style={styles.quickLinkButton}>
            <Ionicons name="ios-calendar-outline" size={28} color="#4CAF50" />
            <Text style={styles.quickLinkText}>Today's Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkButton}>
            <Ionicons name="ios-people-outline" size={28} color="#2196F3" />
            <Text style={styles.quickLinkText}>View Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkButton}>
            <Ionicons name="ios-chatbubble-outline" size={28} color="#FFC107" />
            <Text style={styles.quickLinkText}>Ask for Help</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  quickLinksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickLinkButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  quickLinkText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default HomeScreen;
