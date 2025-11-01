import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from '../../context/UserContext';

export default function PerfilTab() {
  const { email } = useUser();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <MaterialIcons name="person" size={80} color="#10B981" />
        </View>
        <Text style={styles.title}>Perfil de Usuario</Text>
        <View style={styles.infoContainer}>
          <MaterialIcons name="email" size={24} color="#10B981" />
          <Text style={styles.email}>{email || 'No disponible'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileContainer: {
    backgroundColor: '#ECFDF5',
    borderRadius: 20,
    padding: 32,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#064E3B',
    marginBottom: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  email: {
    fontSize: 18,
    color: '#059669',
    marginLeft: 12,
    flex: 1,
    fontWeight: '600',
  },
});

