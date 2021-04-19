import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imageSource, title, score}) => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.textView}>
                <Text style={styles.mainText}>{title}</Text>
                <Text style={styles.secondaryText}> image score - {score}</Text>
            </View>

            <Image style={styles.imageStyle} source={imageSource} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        width: 300,
        height: 150,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    textView: {
        justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: "flex-start",
        marginLeft: 5
    },
    mainText: {
        textAlign: 'center',
        fontSize: 26,
    },
    secondaryText: {
        fontSize: 15,
    },
    imageStyle: {
        width: 150,
        height: 110,
        marginRight: 4
    }
})

export default ImageDetail;
