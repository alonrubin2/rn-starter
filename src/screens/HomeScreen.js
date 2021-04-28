import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {


  return <ScrollView style={styles.scrollViewStyle}>
    <View style={styles.viewStyle}>

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

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('Password')}>
        <Text style={styles.textStyle}>Password-Input Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('TextInput')}>
        <Text style={styles.textStyle}>Text-Input Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('BoxScreen')}>
        <Text style={styles.textStyle}>Box Screen</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>

};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center'
  },
  scrollViewStyle: {
    height: '100%',
    width: '100%'
  },
  headline: {
    fontSize: 38
  },
  subHeadline: {
    fontSize: 25,
    margin: 3
  },
  buttonStyle: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: 'orange',
    padding: 22,
    width: '80%',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default HomeScreen;
