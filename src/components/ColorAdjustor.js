import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";


const ColorAdjustor = ({ color, onIncrease, onDecrease }) => {



    return (
        <View style={styles.colorView}>
            <Text style={styles.subHeadline}>{color}</Text>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => onIncrease()}
            >
                <Text style={styles.textStyle}>More {color}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => onDecrease()}
            >
                <Text style={styles.textStyle}>Less {color}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center'
    },
    colorView: {
        width: '90%',
        marginTop: 10
    },
    headline: {
        fontSize: 30,
        marginTop: 15
    },
    subHeadline: {
        fontSize: 20,
        margin: 3
    },
    buttonStyle: {
        borderRadius: 8,
        margin: 5,
        marginTop: 20,
        backgroundColor: 'orange',
        padding: 10
    },
    textStyle: {
        fontSize: 16
    }
});

export default ColorAdjustor;
