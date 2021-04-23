import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

const PasswordInput = () => {

    const [password, setPassword] = useState('');
    


    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headline}>Enter Password</Text>
            <TextInput 
            style={styles.textInput}
            value={password}
            onChangeText={(event) => setPassword(event)} 
            />
            <View style={styles.textViewStyle}>
               {password.length < 5 
               ? <Text style={styles.textStyle}>Password must be over 5 characters long</Text>
               : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center'
    },
    textViewStyle: {
        width: '80%',
        alignItems: 'flex-start'
    },
    colorView: {
        width: '90%',
        marginTop: 10
    },
    headline: {
        fontSize: 45,
        marginTop: 5
    },
    subHeadline: {
        fontSize: 20,
        margin: 3
    },
    textStyle: {
        fontSize: 25,
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        height: 60,
        fontSize: 35
    }
})

export default PasswordInput;
