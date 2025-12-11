import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserProfile from '../components/UserProfile';

const ProfileScreen = ({ route }) => {

    const user = {
    userId: route.params?.userId || 101,
    name: route.params?.userName || 'Admin User',
    role: route.params?.userRole || 'Admin',
    avatar: null, 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Utilisateur</Text>
      
      <UserProfile user={user} />
      
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Informations supplémentaires</Text>
        <Text style={styles.info}>ID Utilisateur: {user.userId}</Text>
        <Text style={styles.info}>Rôle: {user.role}</Text>
        <Text style={styles.info}>Email: admin@taskmaster.com</Text>
        <Text style={styles.info}>Date d'inscription: 01/01/2024</Text>
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
  infoSection: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
});

export default ProfileScreen;