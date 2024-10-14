import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the pencil icon


const ProfileScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [owner, setOwner] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactNumber: '123-456-7890',
  });
  const [editedOwner, setEditedOwner] = useState({ ...owner });
  const [loading, setLoading] = useState(true);

 
  const fetchOwnerData = async () => {
    try {
      const response = null; // Will replace with mongoDB once backend is made
      if (response.data && response.data.name) {
        setOwner(response.data);
        setEditedOwner(response.data);
      }
    } catch (error) {
      console.log('Error fetching owner data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOwnerData();
  }, []);


  const toggleEditMode = () => {
    if (isEditing) {
      setOwner(editedOwner); // Save changes locally for now
    }
    setIsEditing(!isEditing); 
  };


  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name={isEditing ? 'save' : 'edit'}
          size={24}
          color="#000"
          onPress={toggleEditMode}
          style={{ marginRight: 15 }}
        />
      ),
    });
  }, [navigation, isEditing]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Owner's Profile</Text>

      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={editedOwner.name}
            onChangeText={(text) => setEditedOwner({ ...editedOwner, name: text })}
            placeholder="Name"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            value={editedOwner.email}
            onChangeText={(text) => setEditedOwner({ ...editedOwner, email: text })}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            value={editedOwner.contactNumber}
            onChangeText={(text) => setEditedOwner({ ...editedOwner, contactNumber: text })}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />
        </>
      ) : (
        <>
          <View style={styles.profileItem}>
            <Icon name="person" size={24} color="#007AFF" />
            <Text style={styles.label}>{owner.name}</Text>
          </View>
          <View style={styles.profileItem}>
            <Icon name="email" size={24} color="#007AFF" />
            <Text style={styles.label}>{owner.email}</Text>
          </View>
          <View style={styles.profileItem}>
            <Icon name="phone" size={24} color="#007AFF" />
            <Text style={styles.label}>{owner.contactNumber}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
});

export default ProfileScreen;