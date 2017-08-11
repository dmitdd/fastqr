import React from 'react';
import { connect } from 'react-redux';
import { changeCameraPermission } from '../actions/ChangeCameraPermission';
import AppView from '../components/AppView';

const mapStateToProps = (state) => ({
	hasCameraPermission: state.hasCameraPermission
});

const mapDispatchToProps = (dispatch) => ({
	onChangeCameraPermission(hasCameraPermission) {
		dispatch(changeCameraPermission(hasCameraPermission));
	}
});

const AppViewContainer = ({hasCameraPermission, onChangeCameraPermission}) => (
	<AppView
		hasCameraPermission={hasCameraPermission}
		onChangeCameraPermission={onChangeCameraPermission}
	/>
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppViewContainer);