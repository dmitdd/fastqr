import {
	CHANGE_CAMERA_PERMISSION
} from '../constants/ActionTypes';

export const changeCameraPermission = (hasCameraPermission) => ({type: CHANGE_CAMERA_PERMISSION, hasCameraPermission});