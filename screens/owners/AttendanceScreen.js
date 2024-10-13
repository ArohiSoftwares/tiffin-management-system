import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const students = [
  { id: '1', name: 'GDG Lead Divyesh Mali ' },
  { id: '2', name: 'Vickey Dada' },
  { id: '3', name: 'Handsome Siddhu' },
  // Add more students here
];

const AttendanceScreen = () => {
  const [attendance, setAttendance] = useState({});

  const markAttendance = (studentId, shift, status) => {
    setAttendance({
      ...attendance,
      [studentId]: { ...(attendance[studentId] || {}), [shift]: status },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Attendance</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentRow}>
            <Text style={styles.studentName}>{item.name}</Text>
            <View style={styles.shiftContainer}>
              <Text style={styles.shiftLabel}>Day Shift</Text>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id]?.day === 'present' && styles.present,
                ]}
                onPress={() => markAttendance(item.id, 'day', 'present')}
              >
                <Text style={styles.attendanceText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id]?.day === 'absent' && styles.absent,
                ]}
                onPress={() => markAttendance(item.id, 'day', 'absent')}
              >
                <Text style={styles.attendanceText}>Absent</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shiftContainer}>
              <Text style={styles.shiftLabel}>Night Shift</Text>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id]?.night === 'present' && styles.present,
                ]}
                onPress={() => markAttendance(item.id, 'night', 'present')}
              >
                <Text style={styles.attendanceText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id]?.night === 'absent' && styles.absent,
                ]}
                onPress={() => markAttendance(item.id, 'night', 'absent')}
              >
                <Text style={styles.attendanceText}>Absent</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  studentRow: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  shiftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  shiftLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  attendanceButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  attendanceText: {
    color: '#fff',
    fontWeight: '600',
  },
  present: {
    backgroundColor: '#28A745',
  },
  absent: {
    backgroundColor: '#DC3545',
  },
});

export default AttendanceScreen;
