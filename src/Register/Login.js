/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constant';
import Field from './Field';

export default function Login() {

    return (
        <Background>
            <View style={{ alignItems: 'center', width: 440 }}>
                <View style={{ backgroundColor: 'white', height: 700, width: 440, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>

                    <Text style={{ fontSize: 40, color: { darkGreen }, fontWeight: 'bold' }}>Register</Text>

                    <Text style={{ color: 'gray', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
                    <Field placeholder="Student Name" keyboardType="{'student-name'}" />

                    <Field placeholder="Address" keyboardType={'address'} />

                    <Field placeholder="Course" keyboardType={'course'} />

                    <Field placeholder="Date of Birth" keyboardType={'dob'} />


                    <Btn bgColor={darkGreen} textColor="white" btnLabel="Register" Press={() => alert('Registration Done')} />

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Already have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}> Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Background>
    );
}





