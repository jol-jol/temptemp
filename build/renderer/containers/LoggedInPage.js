"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

var _redux = require("redux");

var _LoggedIn = _interopRequireDefault(require("../components/LoggedIn"));

var _user = _interopRequireDefault(require("../actions/user"));

var _calculation = _interopRequireDefault(require("../actions/calculation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user.default, dispatch);
  const calculation = (0, _redux.bindActionCreators)(_calculation.default, dispatch);
  return {
    onLogout: data => {
      user.logout(data);
      dispatch((0, _connectedReactRouter.push)('/'));
    },
    onUpdateLength: data => {
      calculation.updateLength(data);
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoggedIn.default);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbnRhaW5lcnMvTG9nZ2VkSW5QYWdlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIiwidXNlckFjdGlvbnMiLCJjYWxjdWxhdGlvbiIsImNhbGN1bGF0aW9uQWN0aW9ucyIsIm9uTG9nb3V0IiwiZGF0YSIsImxvZ291dCIsIm9uVXBkYXRlTGVuZ3RoIiwidXBkYXRlTGVuZ3RoIiwiTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFNBQU9BLEtBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDdkMsUUFBTUMsSUFBSSxHQUFHLCtCQUFtQkMsYUFBbkIsRUFBZ0NGLFFBQWhDLENBQWI7QUFDQSxRQUFNRyxXQUFXLEdBQUcsK0JBQW1CQyxvQkFBbkIsRUFBdUNKLFFBQXZDLENBQXBCO0FBQ0EsU0FBTztBQUNMSyxJQUFBQSxRQUFRLEVBQUdDLElBQUQsSUFBVTtBQUNsQkwsTUFBQUEsSUFBSSxDQUFDTSxNQUFMLENBQVlELElBQVo7QUFDQU4sTUFBQUEsUUFBUSxDQUFDLGdDQUFLLEdBQUwsQ0FBRCxDQUFSO0FBQ0QsS0FKSTtBQU1MUSxJQUFBQSxjQUFjLEVBQUdGLElBQUQsSUFBVTtBQUN4QkgsTUFBQUEsV0FBVyxDQUFDTSxZQUFaLENBQXlCSCxJQUF6QjtBQUNEO0FBUkksR0FBUDtBQVVELENBYkQ7O2VBZWUseUJBQVFULGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q1csaUJBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IExvZ2dlZEluIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nZ2VkSW4nO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgY2FsY3VsYXRpb25BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2FsY3VsYXRpb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBiaW5kQWN0aW9uQ3JlYXRvcnModXNlckFjdGlvbnMsIGRpc3BhdGNoKTtcbiAgY29uc3QgY2FsY3VsYXRpb24gPSBiaW5kQWN0aW9uQ3JlYXRvcnMoY2FsY3VsYXRpb25BY3Rpb25zLCBkaXNwYXRjaCk7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6IChkYXRhKSA9PiB7XG4gICAgICB1c2VyLmxvZ291dChkYXRhKTtcbiAgICAgIGRpc3BhdGNoKHB1c2goJy8nKSk7XG4gICAgfSxcblxuICAgIG9uVXBkYXRlTGVuZ3RoOiAoZGF0YSkgPT4ge1xuICAgICAgY2FsY3VsYXRpb24udXBkYXRlTGVuZ3RoKGRhdGEpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2dlZEluKTtcbiJdLCJmaWxlIjoicmVuZGVyZXIvY29udGFpbmVycy9Mb2dnZWRJblBhZ2UuanMifQ==
