import { combineReducers } from 'redux';

import ReduxTest from './modules/ReduxTest/reducer'
import People from './modules/People/reducer'

export default combineReducers({
  ReduxTest,
  People
});
