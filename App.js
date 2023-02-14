import React from 'react';
import { StyleSheet, View } from 'react-native';
import NicScreen from './src/Nic/NicScreen';
import Login from './src/Register/Login';

function App() {
    return (
        <View style = {styles.root}>
           <NicScreen/>
        </View>

    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBF'
    }
})

export default App;

