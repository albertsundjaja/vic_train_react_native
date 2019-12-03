import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import TrainRoute from './TrainRoute/TrainRoute';

const MainContainer = () => {
    return (
        <View style={styles.container}>
            <Navbar title={"Vic Train Departure Board"}/>
            <TrainRoute />
        </View>
    )
}

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});