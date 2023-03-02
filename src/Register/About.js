/* eslint-disable react-native/no-inline-styles */
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import RoundButton from '../components/CustomButton/RoundButton'
import Logo from '../asset/f1.jpg'
import Logo1 from '../asset/f2.jpg'
import Logo2 from '../asset/f4.jpg'
import Logo3 from '../asset/f5.jpg'
import { TextInput as TextInputPaper, Appbar, Avatar } from 'react-native-paper';


export default function About() {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (


        <View style={styles.container}>
            <Appbar.Header >
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Food Bar" subtitle="Subtitle" />
                <Appbar.Action  icon="archive" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>


            <View style={styles.navContainer}>
                <View style={{ width: '100%', height: 120, flexDirection: 'row', marginBottom: 15 }}>
                    <View style={{ flex: 5, width: 120, height: 120 }}>
                        <Image
                            style={styles.img}
                            source={Logo}
                            resizeMode="contain"
                        />
                    </View>
                    {/* <View style={{ flex: 2, backgroundColor: "#E91E63" }}></View> */}
                    <View style={{ flex: 5, backgroundColor: "white", borderRadius: 10 }}>
                        <Text style={styles.text} variant="titleMedium">React Native is a JavaScript framework for building native mobile apps. It uses the React framework and offers large amount of inbuilt components and APIs.</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 120, flexDirection: 'row', marginBottom: 15 }}>
                    <View style={{ flex: 4, width: 120, height: 120 }}>
                        <Image
                            style={styles.img}
                            source={Logo1}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 4, width: 120, height: 120 }}>
                        <Image
                            style={styles.img}
                            source={Logo2}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 4, width: 120, height: 120 }}>
                        <Image
                            style={styles.img}
                            source={Logo3}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={{ width: '100%', height: 60, flexDirection: 'row', marginBottom: 0 }}>
                    <View style={{ flex: 1 }}>
                        <TextInputPaper style={styles.container1} label="Food Name" mode="outlined" />
                    </View>
                </View>
                <View style={{ width: '100%', height: 90, flexDirection: 'row', marginBottom: 0 }}>
                    <View style={{ flex: 1 }}>
                        <TextInputPaper style={styles.container1} label="Amount" mode="outlined" />
                    </View>
                </View>
                <View style={{ width: '150%', height: 60, flexDirection: 'row', marginBottom: 0 }}>
                    <View style={{ flex: 1 }}>
                        <RoundButton />
                    </View>
                    <View style={{ flex: 1 }}>
                        <RoundButton />
                    </View>
                </View>
            </View>
        </View >


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 4,
        backgroundColor: '#2196F3'
    },
    navContainer: {
        flex: 6,
        backgroundColor: '#E0E0E0',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    balanceContainer: {
        flex: 2,
        backgroundColor: '#424242',
        flexDirection: 'row'
    },
    img: {
        flex: 1,
        resizeMode: 'stretch',
        width: '95%',
        height: '100%',
        borderRadius: 10

    },
    text: {
        color: 'black',
        fontSize: 15,
        left: 10,
        position: 'absolute',
        top: 0,
        right: 10, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 0,
        marginVertical: 5,
        textTransform: 'capitalize'
    },
    contentContainer: {
        paddingVertical: 20
    }
});