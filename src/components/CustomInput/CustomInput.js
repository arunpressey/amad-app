import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder= {placeholder}
        style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0,
    marginVertical: 5
  },
  input: {}
});


export default CustomInput