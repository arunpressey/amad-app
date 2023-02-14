/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export default function Btn({ bgColor, btnLabel, textColor }) {

    return (
        <TouchableOpacity style={{
            backgroundColor: bgColor,
            borderRadius: 100,
            alignItems: 'center',
            width: 350,
            paddingVertical: 5,
            marginVertical: 30,
        }}>

            <Text style={{
                color: textColor,
                fontSize: 25,
                fontWeight: 'bold',
            }}>{btnLabel}</Text>

        </TouchableOpacity>

    );

}
