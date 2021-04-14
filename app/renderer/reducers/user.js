import { handleActions } from 'redux-actions';
import actionsUser from '../actions/user';

export default handleActions(
  {
    [actionsUser.login]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [actionsUser.logout]: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  {},
);
