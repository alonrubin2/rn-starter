import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {


  return <View style={styles.viewStyle}>
    <Text style={styles.headline}>Home Page!</Text>
    <Text style={styles.subHeadline}>Where Would you like to go?</Text>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('Components')}>
      <Text style={styles.textStyle}>Component Screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('List')}>
      <Text style={styles.textStyle}>List Screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('Image')}>
      <Text style={styles.textStyle}>Image Screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('Counter')}>
      <Text style={styles.textStyle}>Counter Screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('Color')}>
      <Text style={styles.textStyle}>Color Screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('AdjustableColors')}>
      <Text style={styles.textStyle}>Adjustable-Colors Screen</Text>
    </TouchableOpacity>

  </View>

};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center'
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
    padding: 10
  },
  textStyle: {
    fontSize: 16
  }
});

export default HomeScreen;
