import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import SignupStyle from '../styles/SignUpStyle';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={SignupStyle.container}>
      <Text style={SignupStyle.title}>BioScope</Text>
      <Text style={SignupStyle.subtitle}>Unlock the Secrets of the Body</Text>
      <Text style={SignupStyle.welcome}>WELCOME</Text>
      {/* Username Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Email Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={SignupStyle.orText}>or</Text>

      {/* Google Sign In Button */}
      <TouchableOpacity style={SignupStyle.googleButton}>
        <Text style={SignupStyle.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={SignupStyle.loginText}>
        have an account? <Text style={SignupStyle.loginLink}>Login</Text>
      </Text>

      {/* Create Account Button */}
      <TouchableOpacity style={SignupStyle.createButton}>
        <Text style={SignupStyle.createButtonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;