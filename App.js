import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import Doctors from './component/Doctors';
import Home from './component/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from react native!</Text>
      <Text>Another Text</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/"><Text>Home</Text></Link>
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/doctors"><Text>Doctors</Text></Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
        </Routes>
      </NativeRouter>
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
});
