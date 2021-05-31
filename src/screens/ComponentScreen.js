import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const name = 'Alon';

const ComponentScreen = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.topText}>getting started with React Native</Text>
            <Text style={styles.nameText}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topText: {
        fontSize: 45,
        textAlign: 'center'
    },
    nameText: {
        fontSize: 25,
        marginVertical: 10,
        backgroundColor: 'lime',
    },
    view: {
        alignItems: 'center'
    }
})

export default ComponentScreen;
