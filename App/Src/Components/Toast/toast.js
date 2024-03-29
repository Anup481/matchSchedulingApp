import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import COLOR from '../../../Themes/color';
import { CONSTANTS, Styles } from '../../../Themes';

const Toast = ({ message, visible, fadeAnim }) => {
    return (
        <Animated.View style={[styles.container, Styles.shadow, { opacity: fadeAnim }]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.WHITE,
        paddingHorizontal: CONSTANTS.Width24,
        paddingVertical: CONSTANTS.Width10,
        borderRadius: 5,
        position: 'absolute',
        bottom: CONSTANTS.Width20,
        left: CONSTANTS.Width20,
        right: CONSTANTS.Width20,
    },
    text: {
        color: COLOR.BLACK,
        fontSize: CONSTANTS.fontSize16,
    },
});

export default Toast;
