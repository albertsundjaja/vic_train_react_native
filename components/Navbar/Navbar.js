import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAE8FC'
    },
    title: {
        color: 'black',
        fontSize: 18
    }
})

export default Navbar;