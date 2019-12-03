import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../configs/colors';

const CustomButton = (props) => {

    let backgroundColor = Colors.primary;
    if (props.type) {
        backgroundColor = Colors[props.type];
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, backgroundColor: backgroundColor}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    }
})

CustomButton.propTypes = {
    type: PropTypes.oneOf(["primary", "success", "danger", "warning"]),
    onPress: PropTypes.func
}

export default CustomButton;