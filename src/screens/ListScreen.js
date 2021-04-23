import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Alon', age: 30 },
        { name: 'Ella', age: 26 },
        { name: 'Hadar', age: 33 },
        { name: 'Tal', age: 26 },
        { name: 'Aharon', gae: 27 },
    ]

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headline}>List Screen</Text>
            <FlatList
                // horizontal
                data={friends}
                keyExtractor={friend => friend.name}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name} is {item.age} years old</Text>
                }
                } />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 30,
        margin: 20,
        borderRadius: 8,
        width: '90%',
        textAlign: 'center'
    },
    viewStyle: {
        alignItems: 'center',
        width: '100%'
    },
    headline: {
        fontSize: 30
    }

})

export default ListScreen;
