import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";


const CounterScreen = () => {

    const [counter, setCounter] = useState(0);


    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                   setCounter(counter+1);
                }}>
                <Text style={styles.subHeadline}>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    setCounter(counter-1);
                }}>
                <Text style={styles.subHeadline}>Decrease</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    setCounter(0);
                }}>
                <Text style={styles.subHeadline}>Reset</Text>
            </TouchableOpacity>

            <Text style={styles.subHeadline}>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 600
    },
    headline: {
        fontSize: 30
    },
    subHeadline: {
        fontSize: 20,
        margin: 3
    },
    buttonStyle: {
        borderRadius: 8,
        margin: 5,
        backgroundColor: 'orange',
        paddingVertical: 20,
        paddingHorizontal: 60
    },
    textStyle: {
        fontSize: 16
    }
});

export default CounterScreen;
