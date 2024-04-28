// OTPVerification.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const OTPVerification = ({ handleVerifyOTP }) => {
  const [otp, setOTP] = useState('');

  const handleCheckOTP = () => {
    handleVerifyOTP(otp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOTP}
      />
      <TouchableOpacity style={styles.checkButton} onPress={handleCheckOTP}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '80%',
    marginBottom: 20,
  },
  checkButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OTPVerification;
