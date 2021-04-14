"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _LoginPage = _interopRequireDefault(require("./containers/LoginPage"));

var _LoggedInPage = _interopRequireDefault(require("./containers/LoggedInPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = /*#__PURE__*/_react.default.createElement(_reactRouter.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  exact: true,
  path: "/",
  component: _LoginPage.default
}), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
  exact: true,
  path: "/loggedin",
  component: _LoggedInPage.default
}));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJMb2dpblBhZ2UiLCJMb2dnZWRJblBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs0QkFHRSw2QkFBQyxtQkFBRCxxQkFDRSw2QkFBQyxrQkFBRDtBQUFPLEVBQUEsS0FBSyxNQUFaO0FBQWEsRUFBQSxJQUFJLEVBQUMsR0FBbEI7QUFBc0IsRUFBQSxTQUFTLEVBQUVBO0FBQWpDLEVBREYsZUFFRSw2QkFBQyxrQkFBRDtBQUFPLEVBQUEsS0FBSyxNQUFaO0FBQWEsRUFBQSxJQUFJLEVBQUMsV0FBbEI7QUFBOEIsRUFBQSxTQUFTLEVBQUVDO0FBQXpDLEVBRkYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL2NvbnRhaW5lcnMvTG9naW5QYWdlJztcbmltcG9ydCBMb2dnZWRJblBhZ2UgZnJvbSAnLi9jb250YWluZXJzL0xvZ2dlZEluUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFN3aXRjaD5cbiAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cbiAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dnZWRpblwiIGNvbXBvbmVudD17TG9nZ2VkSW5QYWdlfSAvPlxuICA8L1N3aXRjaD5cbik7XG4iXSwiZmlsZSI6InJlbmRlcmVyL3JvdXRlcy5qcyJ9
