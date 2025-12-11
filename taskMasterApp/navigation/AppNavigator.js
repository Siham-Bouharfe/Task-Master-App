import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import LoginScreen from '../screens/LoginScreen';
import TasksScreen from '../screens/TasksScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TasksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TasksList" 
        component={TasksScreen} 
        options={{ title: 'Liste des Tâches' }}
      />
      <Stack.Screen 
        name="TaskDetails" 
        component={TaskDetailsScreen} 
        options={{ title: 'Détails de la tâche' }}
      />
    </Stack.Navigator>
  );
};


const MainTabNavigator = ({ route }) => {

    const userParams = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tasks') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Tasks" 
        component={TasksStack}
        initialParams={userParams}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        initialParams={userParams}
        options={{ headerShown: true, title: 'Mon Profil' }}
      />
    </Tab.Navigator>
  );
};


const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Zone publique - Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Zone privée - Application principale */}
        <Stack.Screen name="MainApp" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;