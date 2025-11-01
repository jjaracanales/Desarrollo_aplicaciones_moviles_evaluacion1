import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MaterialIcons name="home" size={80} color="#10B981" />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>
        Has iniciado sesión correctamente
      </Text>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          App desarrollada por José Jara Canales
        </Text>
        <Text style={styles.footerSubtext}>
          Evaluación 1 - Desarrollo de Aplicaciones Móviles
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#064E3B',
    marginTop: 24,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#059669',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  footerText: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '600',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#047857',
    fontWeight: '500',
  },
});

