import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../Themes';

const Header = ({ title }) => {
	return (
		<View style={[Styles.backgroundColorWhite, Styles.padding15]}>
			<Text style={[Styles.fontSize18, Styles.bold, Styles.colorBlack]}>{title}</Text>
		</View>
	);
};

export default Header;
