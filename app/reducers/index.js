import {
	TURN_TOURCH,
	CHANGE_CAMERA_PERMISSION
} from '../constants/ActionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case TURN_TOURCH: {
			return Object.assign({}, state, {
				tourchOn: !state.tourchOn
			});
		}
		case CHANGE_CAMERA_PERMISSION: {
			return Object.assign({}, state, {
				hasCameraPermission: action.hasCameraPermission
			});
		}
		default:
			return state
	}
};