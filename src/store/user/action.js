import axios from '../../utils/axios';
import types from './types';

const {
	GET_USER,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	GET_USER_LOGOUT,
	SIGN_UP_USER,
} = types;

const actions = {};

actions.singup = (data) => {
	return (dispatch) => {
		dispatch({
			SIGN_UP_USER,
		});
		axios.post('/user/register', data);
	};
};

actions.login = (data) => async (dispatch) => {
	dispatch({ type: GET_USER });

	// Return promise with success and failure actions
	try {
		const user = await axios.post('/user/login', data);
		console.log('it is working');
		return dispatch({
			type: GET_USER_SUCCESS,
			payload: user.data,
		});
	} catch (e) {
		return dispatch({
			type: GET_USER_FAILURE,
			payload: e.message,
		});
	}
};

actions.logout = () => {
	return {
		type: GET_USER_LOGOUT,
	};
};

export default actions;
