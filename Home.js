import React from 'react';
import { View, Text } from 'react-native';
import StarButton from './StarButton';
import RoundedText from './RoundedText';

function Home() {
    return (
        <View>
            <Text>
                Home
            </Text>
            <StarButton />
            <RoundedText />
        </View>
    );
}

export default Home;
