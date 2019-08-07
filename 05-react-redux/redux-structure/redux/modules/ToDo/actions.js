import * as types from './types';
import swAPI from '../../../api/star-wars'

export function getData() {
  return async (dispatch) => {
    dispatch({ type: types.GET_PENDING });

    try {
      const data = await swAPI.get();
      dispatch({
        type: types.GET_SUCCESS,
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: types.GET_ERROR,
        payload: err
      })
    }
  }
}
