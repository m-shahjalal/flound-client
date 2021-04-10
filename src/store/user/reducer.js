import types from './types';

const {
	GET_USER,
	GET_USER_FAILURE,
	GET_USER_SUCCESS,
	GET_USER_LOGOUT,
	SIGN_UP_USER,
} = types;
const initialState = {
	loading: false,
	user: null,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			console.log('user login successfully');
			return {
				...state,
				loading: true,
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				user: action.payload,
			};
		case GET_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case GET_USER_LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
				user: null,
			};
		case SIGN_UP_USER:
			return {
				...state,
				user: null,
				loading: true,
				error: null,
			};
		default:
			return state;
	}
};

export default userReducer;
