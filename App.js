import React from 'react';
import { StyleSheet, View } from 'react-native';
import NicScreen from './src/Nic/NicScreen';
import Login from './src/Register/Login';
import About from './src/Register/About';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1 }}>
                <About />
            </View>
        </SafeAreaProvider>
    );
}

export default App;

