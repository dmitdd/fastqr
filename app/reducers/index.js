import * as ActionTypes from '../constants/ActionTypes';

export default (state, action) => {
	switch (action.type) {
		case ActionTypes.TURN_TOURCH: {
			return Object.assign({}, state, {tourchOn: !state.tourchOn});
		}
		case ActionTypes.CHANGE_CAMERA_PERMISSION: {
			return Object.assign({}, state, {hasCameraPermission: action.hasCameraPermission});
		}
		default:
			return state
	}
};