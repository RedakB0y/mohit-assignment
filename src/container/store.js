// Import the required Redux modules
import { createStore } from 'redux';

// Define action types
const category = 'category';

// Define the initial state
const initialState = {
  data: [],
};

// Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case category:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;