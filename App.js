import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#36393F' style='light'/>
      <Routes/>
    </NavigationContainer>
  );
}


