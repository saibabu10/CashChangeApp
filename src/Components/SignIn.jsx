import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const SignIn = ({ navigation, fontFamily }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendOTP = () => {
    console.log({ username });
    console.log({ phoneNumber });
    console.log("Sending OTP...");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Image source={require('../assets/backbtn.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={[styles.text, { fontFamily: fontFamily, color: 'rgba(217, 46, 200, 1)', letterSpacing: 2 }]}>SignIn</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={[styles.label, { marginBottom: 0 }]}>Username:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.inputRow}>
          <Text style={[styles.label, { marginBottom: 0 }]}>Password:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.inputRow}>
          <Text style={styles.label}>Enter Phone no:</Text>
        </View>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.phoneNumberPrefix}>+91</Text>
          <TextInput
            style={styles.inputPhoneNo}
            placeholder="- - - - - - - - - - - - - - - -"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
        <Text style={styles.sendOTPButtonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align components from the beginning
    alignItems: 'center',
    paddingTop: 180, // Adjust top padding to position content from the top
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Arial Rounded MT Bold',
    position: 'absolute',
    top: 73,
    left: 75,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  inputContainer: {},
  inputRow: {
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    marginRight: 13,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 2,
    paddingHorizontal: 19,
    paddingVertical: 8,
    width: 200,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumberPrefix: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sendOTPButton: {
    backgroundColor: 'rgba(217, 46, 200, 1)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 70,
    marginTop: 20,
    left:50
  },
  sendOTPButtonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Arial Rounded MT Bold',
  },
  inputPhoneNo: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 2,
    paddingHorizontal: 19,
    paddingVertical: 8,
    width: 200,
    textAlign: 'center',
  },
});

export default SignIn;


