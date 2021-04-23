import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

const TextInputScreen = () => {

    const [name, setName] = useState('');
    


    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headline}>Enter Your Name</Text>
            <TextInput 
            style={styles.textInput}
            value={name}
            onChangeText={(event) => setName(event)} 
            />
            <View style={styles.textViewStyle}>
                <Text style={styles.textStyle}>My Name is {name}</Text>
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

export default TextInputScreen;
