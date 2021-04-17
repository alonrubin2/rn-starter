import React from 'react';
import { Text, View, StyleSheet, Platform, PlatformColor } from "react-native";

const name = 'Alon';

const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.topText}>getting started with React Native</Text>
            <Text style={styles.nameText}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topText: {
        fontSize: 45,
    },
    nameText: {
        fontSize: 20
    },
    textColors: {
        backgroundColor: 'lime',
        fontFamily: 'times new roman'
    }
})

export default ComponentScreen;
