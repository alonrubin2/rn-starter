import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View } from "react-native";
import ColorAdjustor from '../components/ColorAdjustor';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}


const AdjustableColors = () => {

    const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headline}>Adjustable Colors!</Text>

            <View style={[styles.colorBox, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
            <Text>rgb({red}, {green}, {blue})</Text>

            <ColorAdjustor
                onIncrease={() => runMyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red" />
            <ColorAdjustor
                onIncrease={() => runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green" />
            <ColorAdjustor
                onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue" />

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
        marginTop: 5
    },
    subHeadline: {
        fontSize: 20,
        margin: 3
    },
    textStyle: {
        fontSize: 16
    },
    colorBox: {
        width: '90%',
        height: 80,
        marginTop: 15,
        borderRadius: 8
    }
});

export default AdjustableColors;




    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);


    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // };