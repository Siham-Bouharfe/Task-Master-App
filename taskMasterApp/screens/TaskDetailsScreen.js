import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ route }) => {

    const { taskId, task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de la tâche #{taskId}</Text>
      
      <View style={styles.detailsCard}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={styles.label}>Statut:</Text>
        <Text style={[styles.status, task.completed && styles.completed]}>
          {task.completed ? 'Terminée' : 'En cours'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    lineHeight: 22,
  },
  status: {
    fontSize: 16,
    color: '#FF9800',
    marginTop: 5,
    fontWeight: 'bold',
  },
  completed: {
    color: '#4CAF50',
  },
});

export default TaskDetailsScreen;