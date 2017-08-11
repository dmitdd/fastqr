import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Scanner from '../components/Scanner';
import TourchButton from '../components/TourchButton';

const windowDims = Dimensions.get("window");

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 32,
		left: windowDims.width / 2 - 16
	},
	scanner: {
		height: windowDims.height,
		width: windowDims.width
	}
});

const ScannerView = ({onBarCodeRead, tourchOn, onTourchChange}) => (
	<View>
		<Scanner
			styles={styles.scanner}
			tourchOn={tourchOn}
			onBarCodeRead={onBarCodeRead}
		/>
		<TourchButton
			styles={styles.button}
			isActive={tourchOn}
			onTourchChange={onTourchChange}
		/>
	</View>
);

export default ScannerView;