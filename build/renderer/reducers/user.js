"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = require("redux-actions");

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reduxActions.handleActions)({
  [_user.default.login]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  },
  [_user.default.logout]: (state, action) => {
    return { ...state,
      ...action.payload
    };
  }
}, {});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiYWN0aW9uc1VzZXIiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWUsaUNBQ2I7QUFDRSxHQUFDQSxjQUFZQyxLQUFiLEdBQXFCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN0QyxXQUFPLEVBQUUsR0FBR0QsS0FBTDtBQUFZLFNBQUdDLE1BQU0sQ0FBQ0M7QUFBdEIsS0FBUDtBQUNELEdBSEg7QUFJRSxHQUFDSixjQUFZSyxNQUFiLEdBQXNCLENBQUNILEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN2QyxXQUFPLEVBQUUsR0FBR0QsS0FBTDtBQUFZLFNBQUdDLE1BQU0sQ0FBQ0M7QUFBdEIsS0FBUDtBQUNEO0FBTkgsQ0FEYSxFQVNiLEVBVGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBhY3Rpb25zVXNlciBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKFxuICB7XG4gICAgW2FjdGlvbnNVc2VyLmxvZ2luXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gICAgW2FjdGlvbnNVc2VyLmxvZ291dF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxuICB7fSxcbik7XG4iXSwiZmlsZSI6InJlbmRlcmVyL3JlZHVjZXJzL3VzZXIuanMifQ==
