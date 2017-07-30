import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, View } from 'react-native';
import Scanner from '../components/Scanner';
import TourchButton from '../components/TourchButton';
import { turnTourch } from '../actions/TurnTourch';

const windowDims = Dimensions.get("window");

const mapStateToProps = (state) => ({
	tourchOn: state.tourchOn === true
});

const mapDispatchToProps = (dispatch) => ({
	onTourchChange() {
		dispatch(turnTourch());
	}
});

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

const ScannerViewContainer = ({onBarCodeRead, tourchOn, onTourchChange}) => (
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScannerViewContainer);