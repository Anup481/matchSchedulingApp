import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useToast = () => {
	const [message, setMessage] = useState('');
	const [visible, setVisible] = useState(false);
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (visible) {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	}, [visible]);

	const showToast = (text) => {
		setMessage(text);
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	};

	return {
		showToast,
		toastVisible: visible,
		toastMessage: message,
		fadeAnim,
	};
};
