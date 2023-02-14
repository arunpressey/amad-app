import React from "react";
import { View, Text, Button, Alert, StyleSheet, SafeAreaView, Separator } from 'react-native';
import CustomText from "./CustomText";

function StarButton() {
    return (
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />

                <Text style={styles.title}>
                    Adjust the color in a way that looks standard on each platform. On iOS,
                    the color prop controls the color of the text. On Android, the color
                    adjusts the background color of the button.
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default StarButton;