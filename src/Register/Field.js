import React from 'react';
import { TextInput } from 'react-native';
import { darkGreen } from './Constant';

const Field = (props) => {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <TextInput {...props} style={{
            borderRadius: 100,
            color: darkGreen,
            paddingHorizontal: 20,
            width: '75%',
            backgroundColor: 'rgb(220,220, 220)', marginVertical: 20,
        }} placeholderTextColor={darkGreen} />
    );
};

export default Field;
