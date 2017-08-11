import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Permissions } from "expo";
import LoadingView from './LoadingView';
import PermissionsErrorView from './PermissionsErrorView';
import ScannerViewContainer from '../containers/ScannerViewContainer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

class AppView extends Component {

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
				this.props.hasCameraPermission === null ? <LoadingView /> :
					this.props.hasCameraPermission === false ? <PermissionsErrorView /> :
						<ScannerViewContainer onBarCodeRead={this._onBarCodeRead}/>
			}
			</View>
		);
	}
}

export default AppView;