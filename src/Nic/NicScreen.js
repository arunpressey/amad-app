import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../asset/slr.jpg';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import lankaNIC from 'lanka-nic';
import { TextInput as TextInputPaper } from 'react-native-paper';

export default function NicScreen() {
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState(nic);
    const { height } = useWindowDimensions();
    const [dateOfBirth, setDateOfBirth] = useState('');

    const onSignPressed = () => {
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
        setGender(gender[0].toUpperCase() + gender.slice(1).toLowerCase());
        setDateOfBirth(dateOfBirth.toDateString());
        // console.warn("Sign In");
    }

    const onButtonClick = () => {
        // @ts-ignore (us this comment if typescript raises an error)
        setNic("");
        setGender("");
        setDateOfBirth("");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Image
                    source={Logo}
                    style={[styles.Logo, { height: height * 0.2 }]}
                    resizeMode="contain" />
                <Text style={[styles.text, styles.center, styles.thin]}>
                    SRI LANKA NIC UTILITIES
                </Text>
                <CustomInput placeholder="Enter NIC hear..!" value={nic} setValue={setNic} />
                <TextInputPaper style={styles.container} label="Gender" mode="outlined" value={gender} setValue={gender} editable={false} selectTextOnFocus={false} />
                <TextInputPaper style={styles.container} label="Date Of Birth" mode="outlined" placeholder="DOB" value={dateOfBirth} setValue={dateOfBirth} editable={false} selectTextOnFocus={false} />
                <CustomButton text="Submit" onPress={onSignPressed} />
                <CustomButton text="Reset" bgColor="#E7EAF4" fgColor="#DD4D44" onPress={onButtonClick} />
            </View>
            <View>
                <Text style={styles.footerText}>®arun</Text>
            </View>
        </ScrollView>


    );

}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 60,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 0,
        marginVertical: 5,
        textTransform: 'capitalize'
    },
    text: {
        fontSize: 25,
        marginBottom: 20,
        color: 'black'
    },
    bold: {
        fontWeight: 'bold'
    },
    thin: {
        fontWeight: '400'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'black'
      },
});
