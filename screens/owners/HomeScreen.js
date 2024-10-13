import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
    const stats = [
        { title: 'Total Tiffin Today', value: '120' },
        { title: 'Pending Tiffin Today', value: '25' },
        { title: 'Total Leaves Today', value: '10' },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.messName}>Aai Mess</Text>
                <Text style={styles.welcomeText}>Welcome, Owner!</Text>
            </View>

            {/* Key Metrics Section */}
            <View style={styles.statsContainer}>
                {stats.map((stat, index) => (
                    <View key={index} style={styles.statCard}>
                        <Text style={styles.statValue}>{stat.value}</Text>
                        <Text style={styles.statTitle}>{stat.title}</Text>
                    </View>
                ))}
            </View>

            {/* Quick Actions Section */}
            <View style={styles.actionsContainer}>
                <Text style={styles.sectionTitle}>Quick Actions</Text>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>View Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Manage Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>View Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Add New Student Section */}
            <View style={styles.addStudentContainer}>
                <TouchableOpacity style={styles.addStudentButton}>
                    <Text style={styles.addStudentText}>+ Add New Student</Text>
                </TouchableOpacity>
            </View>

            {/* Recent Activity Section */}
            <View style={styles.activityContainer}>
                <Text style={styles.sectionTitle}>Recent Activity</Text>
                <Text style={styles.activityText}>- Updated Menu</Text>
                <Text style={styles.activityText}>- 3 Tiffins Delivered</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F9FA', // Light background color
    },
    header: {
        backgroundColor: '#007BFF', // Blue header background
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    messName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    welcomeText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        margin: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    statTitle: {
        fontSize: 14,
        color: '#666',
    },
    actionsContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#28A745', // Green button color
        padding: 15,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        elevation: 3,
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addStudentContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    addStudentButton: {
        backgroundColor: '#17A2B8', // Blue-green color for add student button
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        elevation: 3,
    },
    addStudentText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    activityContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    activityText: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
});

export default HomeScreen;
