import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";


const BoxScreen = () => {
    return (
        <View style={styles.mainViewStyle}>
            <View style={[styles.viewStyle, styles.view1]}><Text>Box 1</Text></View>
            <View style={[styles.viewStyle, styles.view2]}><Text>Box 2</Text></View>
            <View style={[styles.viewStyle, styles.view3]}><Text>Box 3</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        margin: 10,
        height: '90%',
        height: '20%',
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewStyle: {
        width: 50,
        height: 50,
        borderWidth: 1
    },
    view1: {
        backgroundColor: 'red'
    },
    view2: {
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    view3: {
        backgroundColor: 'blue'

    }

})

export default BoxScreen;
