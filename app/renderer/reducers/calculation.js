import { handleActions } from 'redux-actions';
import actionsCalculation from '../actions/calculation';

export default handleActions(
  {
    [actionsCalculation.updateLength]: (state, action) => {
      var str = action.payload['meter'] || action.payload['feet'];
      var num = parseFloat(str);
      if (isNaN(str)) {
        if (str)
          return {...state};
        return {feet: "", meter: ""};
      }

      if ("meter" in action.payload) {
        return {
          feet: String(num * 3.28084),
          meter: str
        };
      } else {
        return {

          meter: String(num / 3.28084),
          feet: str
        };
      }
    },
  },
  {},
);
