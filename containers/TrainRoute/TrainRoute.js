import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import CustomButton from '../../components/CustomButton';
import TrainRouteItem from '../../components/TrainRoute/TrainRouteItem';

const TrainRoute = (props) => {
    return (
        <View>
            <View style={styles.trainRoute}>
                <Text>Train Route</Text>
                <CustomButton type="success">Add</CustomButton>
            </View>
            <View style={styles.routeList}>
                <TrainRouteItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    trainRoute: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
        height: 60,
        backgroundColor: 'yellow'
    }, 
    routeList: {
        width: '100%',
        height: 90
    },
    addButton: {
        flex:1,
        height:100,
        width:100
    }
});

export default TrainRoute;