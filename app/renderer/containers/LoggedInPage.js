import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import LoggedIn from '../components/LoggedIn';
import userActions from '../actions/user';
import calculationActions from '../actions/calculation';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  const calculation = bindActionCreators(calculationActions, dispatch);
  return {
    onLogout: (data) => {
      user.logout(data);
      dispatch(push('/'));
    },

    onUpdateLength: (data) => {
      calculation.updateLength(data);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
