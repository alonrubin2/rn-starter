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
        marginTop: 8
    },
    subHeadline: {
        fontSize: 20,
    },
    buttonStyle: {
        borderRadius: 8,
        margin: 5,
        marginTop: 10,
        backgroundColor: 'orange',
        padding: 15
    },
    textStyle: {
        fontSize: 16
    }
});

export default ColorAdjustor;
