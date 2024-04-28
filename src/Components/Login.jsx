
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigation}) => {
  return (
    <View>
      <TouchableOpacity className=' flex flex-row gap-3 px-3 py-24'onPress={() => navigation.goBack()}>
        <Image source={require('../assets/backbtn.png')} className='w-8 h-8'/>
        <Text className="text-xl">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
