import { EXAMPLE_ACTION } from '../actions';

const initialState = {
	exampleKey: exampleProp
};

const exampleReducer = (state = initialState, action) => {
	switch (action.type) {
		// example action
		case EXAMPLE_ACTION:
			return { ...state, exampleKey: payload };

		default:
			return state;
	}
};

export default exampleReducer;
