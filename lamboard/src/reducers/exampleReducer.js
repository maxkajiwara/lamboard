import { EXAMPLE_ACTION } from '../actions';

const initialState = {
	exampleKey: 'exampleProp' // convered exampleProp into a string to stop error where exampleProp was not defined 
};

const exampleReducer = (state = initialState, action) => {
	switch (action.type) {
		// example action
		case EXAMPLE_ACTION:
			return { ...state, exampleKey: 'payload' }; // commented payload out as we never defined the payload. This was preventing the app from running

		default:
			return state;
	}
};

export default exampleReducer;
