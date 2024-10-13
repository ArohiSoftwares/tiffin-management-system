import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, GDG Lead Divyesh Mali</Text>
        <Text style={styles.subText}>Here's your latest activity</Text>
      </View>

      {/* Attendance Overview */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance Overview</Text>
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceItem}>
            <Text style={styles.attendanceCount}>85%</Text>
            <Text style={styles.attendanceLabel}>This Month</Text>
          </View>
          <View style={styles.attendanceItem}>
            <Text style={styles.attendanceCount}>90%</Text>
            <Text style={styles.attendanceLabel}>Last Month</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View Attendance Details</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Meals */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Upcoming Meals</Text>
        <View style={styles.mealContainer}>
          <View style={styles.mealItem}>
            <Image source={require('../../assets/breakfast.png')} style={styles.mealIcon} />
            <Text style={styles.mealLabel}>Breakfast - 9:00 AM</Text>
          </View>
          <View style={styles.mealItem}>
            <Image source={require('../../assets/lunch.png')} style={styles.mealIcon} />
            <Text style={styles.mealLabel}>Lunch - 1:00 PM</Text>
          </View>
          <View style={styles.mealItem}>
            <Image source={require('../../assets/dinner.png')} style={styles.mealIcon} />
            <Text style={styles.mealLabel}>Dinner - 8:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Transactions</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionText}>Paid ₹500 for September meals</Text>
          <Text style={styles.transactionText}>Paid ₹200 for extra lunch</Text>
          <Text style={styles.transactionText}>Paid ₹300 for dinner snacks</Text>
        </View>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View Transaction History</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>View Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>Check Meal History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>Make Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F9',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subText: {
    fontSize: 16,
    color: '#D1E7FF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  attendanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attendanceItem: {
    alignItems: 'center',
  },
  attendanceCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28A745',
  },
  attendanceLabel: {
    fontSize: 16,
    color: '#6C757D',
  },
  mealContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  mealItem: {
    alignItems: 'center',
  },
  mealIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mealLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  transactionContainer: {
    marginTop: 10,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'center',
  },
  viewMoreText: {
    color: '#FFF',
    fontSize: 14,
  },
  quickActionsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  quickActionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DashboardScreen;
