import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Linking } from 'react-native';
import { Permissions } from "expo";
import { changeCameraPermission } from '../actions/ChangeCameraPermission';
import LoadingViewContainer from './LoadingViewContainer';
import PermissionsErrorViewContainer from './PermissionsErrorViewContainer';
import ScannerViewContainer from './ScannerViewContainer';

const mapStateToProps = (state) => ({
	hasCameraPermission: state.hasCameraPermission
});

const mapDispatchToProps = (dispatch) => ({
	onChangeCameraPermission(hasCameraPermission) {
		dispatch(changeCameraPermission(hasCameraPermission));
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

class AppViewContainer extends Component {

	componentDidMount() {
		this._requestCameraPermission();
	}

	_requestCameraPermission = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.props.onChangeCameraPermission(status === 'granted');
	};

	_onBarCodeRead = data => {
		Linking.openURL(data.data);
	};

	render() {
		return (
			<View style={styles.container}>
			{
				this.props.hasCameraPermission === null ? <LoadingViewContainer /> :
					this.props.hasCameraPermission === false ? <PermissionsErrorViewContainer /> :
						<ScannerViewContainer onBarCodeRead={this._onBarCodeRead}/>
			}
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppViewContainer);