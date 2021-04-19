import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (<View style={styles.viewStyle}> 
        <Text style={styles.headline}>Image Screen</Text>
        <ImageDetail title="beach" imageSource={require("../../assets/beach.jpg")} score="3"/>
        <ImageDetail title="forest" imageSource={require("../../assets/forest.jpg")} score="7"/>
        <ImageDetail title="mountain" imageSource={require("../../assets/mountain.jpg")} score="9"/>

        </View>
    );
}

const styles = StyleSheet.create ({
    viewStyle: {
        alignItems: 'center'
      },
      headline: {
        fontSize: 30,
        margin: 5
      },
})

export default ImageScreen;
