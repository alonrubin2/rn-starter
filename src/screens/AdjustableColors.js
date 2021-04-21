import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ColorAdjustor from '../components/ColorAdjustor';

const COLOR_INCREMENT = 10;


const AdjustableColors = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };



    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headline}>Adjustable Colors!</Text>
            <ColorAdjustor
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorAdjustor
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', - 1 * COLOR_INCREMENT)}
                color="Green" />
            <ColorAdjustor
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', - 1 * COLOR_INCREMENT)}
                color="Blue" />
            <View style={[styles.colorBox, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
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
    },
    colorBox: {
        width: '90%',
        height: 100,
        marginTop: 15,
        borderRadius: 8

    }
});

export default AdjustableColors;
