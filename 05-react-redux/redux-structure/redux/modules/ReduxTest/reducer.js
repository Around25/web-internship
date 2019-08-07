import * as types from './types'

const initialState = {
  counter: 0,
  data: [],
  api: {
    pending: false,
    success: false,
    error: false
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case types.GET_DATA_PENDING: {
      return {
        ...state,
        api: {
          ...state.api,
          pending: true
        }
      }
    }

    case types.GET_DATA_ERROR: {
      return {
        ...state,
        api: {
          ...state.api,
          error: action.payload
        }
      }
    }

    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        api: {
          ...state.api,
          pending: true
        }
      }
    }

    default:
      return state
  }
}
