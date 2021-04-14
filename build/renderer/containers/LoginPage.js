"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _redux = require("redux");

var _Login = _interopRequireDefault(require("../components/Login"));

var _user = _interopRequireDefault(require("../actions/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user.default, dispatch);
  return {
    onLogin: data => {
      user.login(data);
      dispatch((0, _connectedReactRouter.push)('/loggedin'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login.default);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbnRhaW5lcnMvTG9naW5QYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIiwidXNlckFjdGlvbnMiLCJvbkxvZ2luIiwiZGF0YSIsImxvZ2luIiwiTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFNBQU9BLEtBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDdkMsUUFBTUMsSUFBSSxHQUFHLCtCQUFtQkMsYUFBbkIsRUFBZ0NGLFFBQWhDLENBQWI7QUFDQSxTQUFPO0FBQ0xHLElBQUFBLE9BQU8sRUFBR0MsSUFBRCxJQUFVO0FBQ2pCSCxNQUFBQSxJQUFJLENBQUNJLEtBQUwsQ0FBV0QsSUFBWDtBQUNBSixNQUFBQSxRQUFRLENBQUMsZ0NBQUssV0FBTCxDQUFELENBQVI7QUFDRDtBQUpJLEdBQVA7QUFNRCxDQVJEOztlQVVlLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNPLGNBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgY29uc3QgdXNlciA9IGJpbmRBY3Rpb25DcmVhdG9ycyh1c2VyQWN0aW9ucywgZGlzcGF0Y2gpO1xuICByZXR1cm4ge1xuICAgIG9uTG9naW46IChkYXRhKSA9PiB7XG4gICAgICB1c2VyLmxvZ2luKGRhdGEpO1xuICAgICAgZGlzcGF0Y2gocHVzaCgnL2xvZ2dlZGluJykpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XG4iXSwiZmlsZSI6InJlbmRlcmVyL2NvbnRhaW5lcnMvTG9naW5QYWdlLmpzIn0=
