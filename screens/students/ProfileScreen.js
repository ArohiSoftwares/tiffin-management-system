// screens/students/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/profile.jpg')} style={styles.profilePic} />
        <Text style={styles.userName}>GDG Lead Divyesh Mali</Text>
        <Text style={styles.userInfo}>AI & DS, Third Year</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Attendance</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Missed Meals</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Manage Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>View Meal History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  userInfo: {
    fontSize: 16,
    color: '#6C757D',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#28A745',
  },
  statLabel: {
    fontSize: 14,
    color: '#6C757D',
  },
  editButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  editText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default ProfileScreen;
