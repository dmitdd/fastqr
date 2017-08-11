import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppViewContainer from './containers/AppViewContainer';

const initialState = {
	tourchOn: false,
	hasCameraPermission: null
};

const store = createStore(reducers, initialState);

const FastQRApp = () => (
	<Provider store={store}>
		<AppViewContainer />
	</Provider>
);

export default FastQRApp;