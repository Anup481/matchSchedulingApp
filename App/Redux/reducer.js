import {
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	DELETE_DATA_SUCCESS,
	DELETE_DATA_FAILURE,
	ADD_DATA,
	DELETE_DATA,
	EDIT_DATA
} from './actions';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: state.data.filter(item => item.id !== action.payload),
			};
		case DELETE_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ADD_DATA:
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case DELETE_DATA:
			return {
				...state,
				data: state.data.filter(item => item.id !== action.payload),
			};
		case EDIT_DATA:
			// Update the item with the matching ID in the data array
			const newData = state.data.map(item =>
				item.id === action.payload.id ? { ...item, ...action.payload } : item
			);
			return {
				...state,
				data: newData,
			};
		default:
			return state;
	}
};

export default reducer;
