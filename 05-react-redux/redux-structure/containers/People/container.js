import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToDo from './index';
import ToDoState from '../../redux/modules/ToDo';

const mapActionsToProps = (dispatch) =>
  bindActionCreators({
    getData: ToDoState.actions.getData
  }, dispatch);

const mapStateToProps = (state) => ({
  API: ToDoState.selectors.api(state),
  initialPeople: ToDoState.selectors.initialPeople(state),
  people: ToDoState.selectors.people(state),
  message: ToDoState.selectors.message(state)
});

export default connect(mapStateToProps, mapActionsToProps)(ToDo);
