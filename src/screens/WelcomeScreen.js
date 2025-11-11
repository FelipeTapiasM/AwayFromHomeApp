import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4CAF50" />
      
      {/* Logo/Título */}
      <Text style={styles.title}>AwayFromHomeApp</Text>
      
      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Organiza tu tiempo y finanzas
      </Text>
      
      {/* Descripción */}
      <Text style={styles.description}>
        Gestiona tus actividades académicas y personales, al mismo tiempo que llevas un registro de tus ingresos y gastos.
      </Text>
      
      {/* Botón principal */}
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.primaryButtonText}>Comenzar</Text>
      </TouchableOpacity>
      
      {/* Enlace secundario */}
      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.secondaryButtonText}>
          ¿Ya tienes una cuenta? Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default WelcomeScreen;