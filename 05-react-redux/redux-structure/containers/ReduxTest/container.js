import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReduxTest from './index';
import { increment, getData } from '../../redux/modules/ReduxTest/actions'

const mapActionsToProps = (dispatch) =>
  bindActionCreators({
    increment,
    getPeople: getData
  }, dispatch);

const mapStateToProps = (state) => ({
  reduxState: state.ReduxTest,
  people: state.ReduxTest.data
});

export default connect(mapStateToProps, mapActionsToProps)(ReduxTest);
