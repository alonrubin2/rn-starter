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
        <FlatList
            // horizontal
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} is {item.age} years old</Text>
            }
            } />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        // marginVertical: 70,
        alignSelf: 'center',
        backgroundColor: 'orange',
        padding: 50,
        margin: 30
    }

})

export default ListScreen;
