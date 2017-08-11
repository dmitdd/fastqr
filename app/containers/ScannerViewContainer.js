import React from 'react';
import { connect } from 'react-redux';
import { turnTourch } from '../actions/TurnTourch';
import ScannerView from '../components/ScannerView';

const mapStateToProps = (state) => ({
	tourchOn: state.tourchOn === true
});

const mapDispatchToProps = (dispatch) => ({
	onTourchChange() {
		dispatch(turnTourch());
	}
});

const ScannerViewContainer = ({onBarCodeRead, tourchOn, onTourchChange}) => (
	<ScannerView
		tourchOn={tourchOn}
		onBarCodeRead={onBarCodeRead}
		onTourchChange={onTourchChange}
	/>
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScannerViewContainer);