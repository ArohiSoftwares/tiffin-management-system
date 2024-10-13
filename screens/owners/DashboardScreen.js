import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Use icons for better UI

const DashboardScreen = () => {
    const totalTiffinsToday = 40; // Example data
    const pendingTiffins = 5; // Example data
    const totalLeaves = 2; // Example data
    const totalIncomeToday = totalTiffinsToday * 60;
    const totalIncomeLastMonth = 50000; // Example data
    const expectedIncome = totalIncomeToday * 30; // Approx for the month

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.messName}>Aai Mess</Text>

            <View style={styles.card}>
                <FontAwesome name="rupee" size={24} color="#4CAF50" />
                <Text style={styles.cardTitle}>Total Income Today</Text>
                <Text style={styles.cardValue}>₹{totalIncomeToday}</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="account-balance" size={24} color="#FF9800" />
                <Text style={styles.cardTitle}>Total Income Last Month</Text>
                <Text style={styles.cardValue}>₹{totalIncomeLastMonth}</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="timeline" size={24} color="#2196F3" />
                <Text style={styles.cardTitle}>Expected Income by End of Month</Text>
                <Text style={styles.cardValue}>₹{expectedIncome}</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="restaurant-menu" size={24} color="#673AB7" />
                <Text style={styles.cardTitle}>Total Tiffins Today</Text>
                <Text style={styles.cardValue}>{totalTiffinsToday}</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="hourglass-empty" size={24} color="#F44336" />
                <Text style={styles.cardTitle}>Pending Tiffins Today</Text>
                <Text style={styles.cardValue}>{pendingTiffins}</Text>
            </View>

            <View style={styles.card}>
                <MaterialIcons name="airline-seat-flat" size={24} color="#00BCD4" />
                <Text style={styles.cardTitle}>Total Leaves Today</Text>
                <Text style={styles.cardValue}>{totalLeaves}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    messName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        marginLeft: 10,
        flex: 1,
        color: '#555',
    },
    cardValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default DashboardScreen;
