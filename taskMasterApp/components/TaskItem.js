import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper'; 

const TaskItem = ({ task, onToggle }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={task.completed ? 'checked' : 'unchecked'}
        onPress={() => onToggle(task.id)}
        color="#4CAF50"
      />
      <Text style={[styles.title, task.completed && styles.completed]}>
        {task.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskItem;