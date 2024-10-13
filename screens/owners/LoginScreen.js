import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      {/* Button to navigate directly to Main Tab Navigator */}
      <Button
        title="Skip Login"
        onPress={() => navigation.replace('Main')} // Navigate to Main Tab Navigator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
