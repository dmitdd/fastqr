import React from 'react';
import { View } from 'react-native';
import { BarCodeScanner, KeepAwake } from "expo";

const Scanner = ({onBarCodeRead = () => {}, tourchOn = false, styles}) => (
	<View>
		<KeepAwake />
		<BarCodeScanner
			style={styles}
			torchMode={tourchOn === true ? "on" : "off"}
			onBarCodeRead={onBarCodeRead}
		/>
	</View>
);

export default Scanner;