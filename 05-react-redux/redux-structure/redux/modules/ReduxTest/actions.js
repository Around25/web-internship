import * as types from './types'
import swAPI from '../../../api/star-wars'

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function getData() {
  return async (dispatch) => {
    dispatch({ type: types.GET_DATA_PENDING });

    try {
      const data = await swAPI.get();

      dispatch({
        type: types.GET_DATA_SUCCESS,
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: types.GET_DATA_ERROR,
        payload: err
      })
    }
  }
}
