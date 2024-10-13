import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with mess name and logo */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://example.com/mess-logo.png' }} 
          style={styles.logo} 
        />
        <Text style={styles.messName}>Aai Mess</Text>
      </View>

      {/* Profile section */}
      <View style={styles.profileSection}>
        <Text style={styles.sectionTitle}>Owner's Profile</Text>
        <Image 
          source={{ uri: 'https://example.com/owner-photo.png' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.ownerName}>Kaku System </Text>
        <Text style={styles.ownerRole}>Owner & Head Chef</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
          <MaterialIcons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Business Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Business Overview</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <FontAwesome name="rupee" size={24} color="#fff" />
            <Text style={styles.statValue}>₹50,000</Text>
            <Text style={styles.statLabel}>Monthly Income</Text>
          </View>
          <View style={styles.statBox}>
            <FontAwesome name="users" size={24} color="#fff" />
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>Active Customers</Text>
          </View>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactRow}>
          <MaterialIcons name="phone" size={24} color="#007BFF" />
          <Text style={styles.contactText}>+91 9876543210</Text>
        </View>
        <View style={styles.contactRow}>
          <MaterialIcons name="email" size={24} color="#007BFF" />
          <Text style={styles.contactText}>ashokshinde@aai-mess.com</Text>
        </View>
        <View style={styles.contactRow}>
          <MaterialIcons name="location-pin" size={24} color="#007BFF" />
          <Text style={styles.contactText}>Mumbai, Maharashtra</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  messName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  ownerName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  ownerRole: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    marginRight: 5,
    fontWeight: 'bold',
  },
  statsSection: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  statLabel: {
    color: '#fff',
    fontSize: 14,
  },
  contactSection: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;
