import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Button } from 'react-native'; // Import Button here
import { useNavigation } from '@react-navigation/native';

const OwnerHomeScreen = ({  userName }) => {
  const navigation = useNavigation();


  // Animation scale state
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeMessage}>Welcome, {userName}!</Text>

      <Text style={styles.quickLinks}>Quick Links</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Button
          title="Attendance"
          onPress={() => navigation.navigate('Attendance')}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>

      <Text style={styles.servicesTitle}>Services Offered</Text>

      <View style={styles.servicesContainer}>
        {['Service 1', 'Service 2', 'Service 3', 'Service 4'].map((service, index) => (
          <Animated.View
            key={index}
            style={[styles.serviceBox, { transform: [{ scale }] }]}
          >
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => console.log(`${service} tapped`)}
            >
              <Text style={styles.serviceText}>{service}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  quickLinks: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 30,
  },
  servicesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  serviceBox: {
    backgroundColor: '#fff',
    padding: 20,
    width: '40%',
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OwnerHomeScreen;
