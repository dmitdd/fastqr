import React from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const tourchButtonIcon = require('../../assets/components/TourchButton/normal.png');
const tourchButtonIconActive = require('../../assets/components/TourchButton/active.png');

const tourchButtonStyles = StyleSheet.create({
	button: {
		width: 32,
		height: 32
	}
});

const TourchButton = ({onTourchChange = () => {}, styles, isActive = false}) => (
	<TouchableWithoutFeedback onPress={() => onTourchChange()}>
		<Image
			style={[tourchButtonStyles.button, styles]}
			source={isActive ? tourchButtonIconActive : tourchButtonIcon}
		/>
	</TouchableWithoutFeedback>
);

export default TourchButton;