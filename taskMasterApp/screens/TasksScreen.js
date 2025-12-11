import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';


const initialTasks = [
  { id: 1, title: 'Planifier la réunion', description: 'Préparer l\'ordre du jour pour la réunion d\'équipe', completed: false },
  { id: 2, title: 'Rédiger le rapport', description: 'Finaliser le rapport trimestriel de performance', completed: true },
  { id: 3, title: 'Réviser le code', description: 'Réviser les pull requests de l\'équipe', completed: false },
  { id: 4, title: 'Mettre à jour la documentation', description: 'Ajouter les nouvelles fonctionnalités à la documentation', completed: false },
];

const TasksScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskPress = (task) => {

    navigation.navigate('TaskDetails', { taskId: task.id, task });
  };

  const renderTask = ({ item }) => (
    <TaskCard task={item} onPress={() => handleTaskPress(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 15,
  },
});

export default TasksScreen;