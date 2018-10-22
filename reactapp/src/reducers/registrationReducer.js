import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions';

const initialState = {};

const registration = (state = initialState, action) => {
	switch (action.type) {
		// example action
		case REGISTER_REQUEST:
			return {
				registering: true // SignupPage: display loading indicator
			};

		case REGISTER_SUCCESS:
			return {
				loggedIn: true // SignupPage: redirect to HomePage (or previous page in history else HomePage)
			};

		case REGISTER_ERROR:
			return {
				error: `${action.payload}` // SignupPage: display error message. I put an alert message in the action for now
			};

		default:
			return state;
	}
};

export default registration;
