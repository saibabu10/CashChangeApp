// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Components/Login'; // Import your Login screen component
import SignIn from './src/Components/SignIn'; // Import your SignIn screen component
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }} // Hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* PayBill Text with gradient color */}
      <Text style={styles.gradientText}>PayBill</Text>
      
      {/* Statement Text */}
      <Text style={styles.statementText}>Hello! Welcome Back</Text>
      
      {/* Log in and Sign In buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'rgba(217, 46, 200, 1)',
    opacity: 100,
    fontFamily: 'Arial Rounded MT Bold',
    marginBottom: 12,
  },
  statementText: {
    fontSize: 20,
    fontFamily: 'Arial Rounded MT Bold', // Set the same font family as PayBill
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80, // Add margin top to move the buttons below the statement text
  },
  button: {
    backgroundColor: 'rgba(217, 46, 200, 1)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 70,
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Arial Rounded MT Bold', // Set the same font family as PayBill
  },
});
