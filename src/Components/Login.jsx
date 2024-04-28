// Login.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigation, fontFamily }) => {
  return (
    <View style={styles.container}>
      {/* Icon in the top left corner */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('/Users/palani/Documents/ReactNative-APPS/JustGlee-APP/CashChange/CashChange/backbtn.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={[styles.text, { fontFamily: fontFamily }]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Arial Rounded MT Bold', // Set font family to match PayBill
    position: 'absolute',
    top: 73, // Adjust the position as needed
    left: 75, // Adjust the position as needed
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backIcon: {
    position:'absolute',
    top:50,
    left:10,
    width: 40, // Increase the width
    height: 40, // Increase the height
    resizeMode: 'contain',
  },
});

export default Login;
