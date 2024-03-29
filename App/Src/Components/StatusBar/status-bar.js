import React from 'react';
import { StatusBar } from 'react-native';
import COLOR from '../../../Themes/color';
import { CONSTANTS } from '../../../Themes';

export default function Statusbar(props) {

    return (
        <StatusBar key={props}
            animated={true}
            hidden={false}
            translucent={true}
            barStyle={'light-content'}
            backgroundColor={CONSTANTS.TRANSPARENT} />
    );
}