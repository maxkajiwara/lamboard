/*
Basic registration actions using jwt for authentication
	todo:
		- Return a message for duplicate username
		- Switch to auth0?
*/

import axios from 'axios';

// Constants
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

// Test loading messages
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const register = () => {
	return dispatch => {
		dispatch({ type: REGISTER_REQUEST });

		axios
			.get('/api/register')

			.then(async ({ data }) => {
				await sleep(1000);
				if (data.token) {
					localStorage.setItem('jwt', data.token);
					dispatch({ type: REGISTER_SUCCESS });
				} else {
					alert(
						'Oops! Something went wrong. That username might already be taken.'
					); // todo: check response for sql constraint error
					dispatch({
						type: REGISTER_ERROR,
						payload: data
					});
				}
			})

			.catch(error => dispatch({ type: REGISTER_ERROR, payload: error }));
	};
};
