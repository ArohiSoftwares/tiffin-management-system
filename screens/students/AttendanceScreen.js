// screens/students/AttendanceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const AttendanceScreen = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [85, 80, 90, 75, 95, 85, 88],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Attendance Overview</Text>
        <Text style={styles.subTitle}>Your attendance for this week</Text>
      </View>

      {/* Attendance Chart */}
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Attendance Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Monthly Attendance: 87%</Text>
        <Text style={styles.summaryText}>Last Month Attendance: 92%</Text>
        <Text style={styles.summaryText}>Total Absent Days: 3</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>View Detailed Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>Request Attendance Correction</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#FFF',
  backgroundGradientTo: '#FFF',
  color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#007BFF',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  subTitle: {
    fontSize: 16,
    color: '#6C757D',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
  quickActions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickActionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  quickActionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chart: {
    borderRadius: 16,
  },
});

export default AttendanceScreen;
