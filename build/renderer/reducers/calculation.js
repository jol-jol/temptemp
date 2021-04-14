"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = require("redux-actions");

var _calculation = _interopRequireDefault(require("../actions/calculation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reduxActions.handleActions)({
  [_calculation.default.updateLength]: (state, action) => {
    var str = action.payload['meter'] || action.payload['feet'];
    var num = parseFloat(str);

    if (isNaN(str)) {
      if (str) return state;
      return {
        feet: "",
        meter: ""
      };
    }

    if ("meter" in action.payload) {
      state.feet = String(num * 3.28084);
      state.meter = str;
    } else {
      state.meter = String(num / 3.28084);
      state.feet = str;
    }

    return state;
  }
}, {});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3JlZHVjZXJzL2NhbGN1bGF0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvbnNDYWxjdWxhdGlvbiIsInVwZGF0ZUxlbmd0aCIsInN0YXRlIiwiYWN0aW9uIiwic3RyIiwicGF5bG9hZCIsIm51bSIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZlZXQiLCJtZXRlciIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWUsaUNBQ2I7QUFDRSxHQUFDQSxxQkFBbUJDLFlBQXBCLEdBQW1DLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNwRCxRQUFJQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLE9BQWYsS0FBMkJGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLE1BQWYsQ0FBckM7QUFDQSxRQUFJQyxHQUFHLEdBQUdDLFVBQVUsQ0FBQ0gsR0FBRCxDQUFwQjs7QUFDQSxRQUFJSSxLQUFLLENBQUNKLEdBQUQsQ0FBVCxFQUFnQjtBQUNkLFVBQUlBLEdBQUosRUFDRSxPQUFPRixLQUFQO0FBQ0YsYUFBTztBQUFDTyxRQUFBQSxJQUFJLEVBQUUsRUFBUDtBQUFXQyxRQUFBQSxLQUFLLEVBQUU7QUFBbEIsT0FBUDtBQUNEOztBQUVELFFBQUksV0FBV1AsTUFBTSxDQUFDRSxPQUF0QixFQUErQjtBQUM3QkgsTUFBQUEsS0FBSyxDQUFDTyxJQUFOLEdBQWFFLE1BQU0sQ0FBQ0wsR0FBRyxHQUFHLE9BQVAsQ0FBbkI7QUFDQUosTUFBQUEsS0FBSyxDQUFDUSxLQUFOLEdBQWNOLEdBQWQ7QUFDRCxLQUhELE1BR087QUFDTEYsTUFBQUEsS0FBSyxDQUFDUSxLQUFOLEdBQWNDLE1BQU0sQ0FBQ0wsR0FBRyxHQUFHLE9BQVAsQ0FBcEI7QUFDQUosTUFBQUEsS0FBSyxDQUFDTyxJQUFOLEdBQWFMLEdBQWI7QUFDRDs7QUFFRCxXQUFPRixLQUFQO0FBQ0Q7QUFuQkgsQ0FEYSxFQXNCYixFQXRCYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IGFjdGlvbnNDYWxjdWxhdGlvbiBmcm9tICcuLi9hY3Rpb25zL2NhbGN1bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyhcbiAge1xuICAgIFthY3Rpb25zQ2FsY3VsYXRpb24udXBkYXRlTGVuZ3RoXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHZhciBzdHIgPSBhY3Rpb24ucGF5bG9hZFsnbWV0ZXInXSB8fCBhY3Rpb24ucGF5bG9hZFsnZmVldCddO1xuICAgICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgICAgIGlmIChpc05hTihzdHIpKSB7XG4gICAgICAgIGlmIChzdHIpXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICByZXR1cm4ge2ZlZXQ6IFwiXCIsIG1ldGVyOiBcIlwifTtcbiAgICAgIH1cblxuICAgICAgaWYgKFwibWV0ZXJcIiBpbiBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICBzdGF0ZS5mZWV0ID0gU3RyaW5nKG51bSAqIDMuMjgwODQpO1xuICAgICAgICBzdGF0ZS5tZXRlciA9IHN0cjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLm1ldGVyID0gU3RyaW5nKG51bSAvIDMuMjgwODQpO1xuICAgICAgICBzdGF0ZS5mZWV0ID0gc3RyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgfSxcbiAge30sXG4pO1xuIl0sImZpbGUiOiJyZW5kZXJlci9yZWR1Y2Vycy9jYWxjdWxhdGlvbi5qcyJ9
