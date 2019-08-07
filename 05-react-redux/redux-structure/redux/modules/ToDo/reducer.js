import * as types from './types';

const apiInitialState = {
  pending: false,
  error: false,
  success: false
};

const initialState = {
  initialPeople: [],
  people: [],
  message: false,
  api: apiInitialState
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.GET_PENDING:
      return {
        ...state,
        api: {
          ...initialState.api,
          pending: true
        }
      };

    case types.GET_ERROR:
      return {
        ...state,
        api: {
          ...initialState.api,
          error: action.payload
        }
      };

    case types.GET_SUCCESS:
      return {
        ...state,
        people: action.payload,
        api: {
          ...initialState.api,
          success: true
        }
      };

    default:
      return state
  }
}
