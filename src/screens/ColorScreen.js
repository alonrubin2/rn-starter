import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

const ColorScreen = () => {


    const [colors, setColors] = useState([]);


    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                setColors([...colors, randomColor()])
            }}>
                <Text style={styles.headline}>Add a Color</Text>
            </TouchableOpacity>
            <View style={styles.colorView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    data={colors}
                    renderItem={({ item }) => {
                        return <View style={{ height: 100, width: '100%', backgroundColor: item }} />
                    }}
                />

            </View>
        </View>
    );
}


const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
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
        fontSize: 30
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

export default ColorScreen;
