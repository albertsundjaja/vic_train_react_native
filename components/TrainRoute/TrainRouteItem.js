import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const TrainRouteItem = (props) => {
    return (
        <View style={styles.trainRouteItem}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Flinders Street</Text>
                <Icon name="arrow-right" size={18}/> 
                <Text style={styles.titleText}>Moone Pond</Text>
            </View>
            <View style={styles.trainInfo}>
                <View style={styles.trainLine}>
                    <Text>Craigieburn Line - {"Platform 3"}</Text>
                </View>
                <View style={styles.trainTime}>
                    <Text>09:10</Text>
                    <Text>09:35</Text>
                    <Text>09:40</Text>
                    <Text>10:10</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    trainRouteItem: {
        margin: 5,
        padding: 5,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500'
    },
    trainInfo: {
        flexDirection: 'column'
    },
    trainLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5
    },
    trainTime: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

export default TrainRouteItem;
