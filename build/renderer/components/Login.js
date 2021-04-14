"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Login extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      username: ''
    };

    this.handleLogin = () => {
      this.props.onLogin({
        username: this.state.username,
        loggedIn: true
      });
    };

    this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_Container.default, {
      component: "main",
      maxWidth: "xs"
    }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
      position: "absolute"
    }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "h1",
      variant: "h5",
      align: "center"
    }, "Sign in"))), /*#__PURE__*/_react.default.createElement(_Box.default, {
      m: 10
    }, /*#__PURE__*/_react.default.createElement("form", {
      noValidate: true
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      onChange: this.handleChange,
      value: this.state.username,
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "username",
      label: "Username",
      name: "username",
      autoFocus: true
    }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "password",
      label: "Password",
      type: "password",
      id: "password"
    }), /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: this.handleLogin,
      fullWidth: true,
      variant: "contained",
      color: "primary"
    }, "Sign In"))));
  }

}

exports.default = Login;
Login.propTypes = {
  onLogin: _propTypes.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbXBvbmVudHMvTG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJDb21wb25lbnQiLCJzdGF0ZSIsInVzZXJuYW1lIiwiaGFuZGxlTG9naW4iLCJwcm9wcyIsIm9uTG9naW4iLCJsb2dnZWRJbiIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFZSxNQUFNQSxLQUFOLFNBQW9CQyxnQkFBcEIsQ0FBOEI7QUFBQTtBQUFBO0FBQUEsU0FLM0NDLEtBTDJDLEdBS25DO0FBQ05DLE1BQUFBLFFBQVEsRUFBRTtBQURKLEtBTG1DOztBQUFBLFNBUzNDQyxXQVQyQyxHQVM3QixNQUFNO0FBQ2xCLFdBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQjtBQUNqQkgsUUFBQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsUUFESjtBQUVqQkksUUFBQUEsUUFBUSxFQUFFO0FBRk8sT0FBbkI7QUFJRCxLQWQwQzs7QUFBQSxTQWdCM0NDLFlBaEIyQyxHQWdCM0JDLENBQUQsSUFBTztBQUNwQixXQUFLQyxRQUFMLENBQWM7QUFDWlAsUUFBQUEsUUFBUSxFQUFFTSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFEUCxPQUFkO0FBR0QsS0FwQjBDO0FBQUE7O0FBc0IzQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsNkJBQUMsa0JBQUQ7QUFBVyxNQUFBLFNBQVMsRUFBQyxNQUFyQjtBQUE0QixNQUFBLFFBQVEsRUFBQztBQUFyQyxvQkFDRSw2QkFBQyxlQUFEO0FBQVEsTUFBQSxRQUFRLEVBQUM7QUFBakIsb0JBQ0UsNkJBQUMsZ0JBQUQscUJBQ0UsNkJBQUMsbUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBQyxJQURaO0FBRUUsTUFBQSxPQUFPLEVBQUMsSUFGVjtBQUdFLE1BQUEsS0FBSyxFQUFDO0FBSFIsaUJBREYsQ0FERixDQURGLGVBWUUsNkJBQUMsWUFBRDtBQUFLLE1BQUEsQ0FBQyxFQUFFO0FBQVIsb0JBQ0E7QUFBTSxNQUFBLFVBQVU7QUFBaEIsb0JBQ0UsNkJBQUMsa0JBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRSxLQUFLTCxZQURqQjtBQUVFLE1BQUEsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsUUFGcEI7QUFHRSxNQUFBLE9BQU8sRUFBQyxVQUhWO0FBSUUsTUFBQSxNQUFNLEVBQUMsUUFKVDtBQUtFLE1BQUEsUUFBUSxNQUxWO0FBTUUsTUFBQSxTQUFTLE1BTlg7QUFPRSxNQUFBLEVBQUUsRUFBQyxVQVBMO0FBUUUsTUFBQSxLQUFLLEVBQUMsVUFSUjtBQVNFLE1BQUEsSUFBSSxFQUFDLFVBVFA7QUFVRSxNQUFBLFNBQVM7QUFWWCxNQURGLGVBYUUsNkJBQUMsa0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBQyxVQURWO0FBRUUsTUFBQSxNQUFNLEVBQUMsUUFGVDtBQUdFLE1BQUEsUUFBUSxNQUhWO0FBSUUsTUFBQSxTQUFTLE1BSlg7QUFLRSxNQUFBLElBQUksRUFBQyxVQUxQO0FBTUUsTUFBQSxLQUFLLEVBQUMsVUFOUjtBQU9FLE1BQUEsSUFBSSxFQUFDLFVBUFA7QUFRRSxNQUFBLEVBQUUsRUFBQztBQVJMLE1BYkYsZUF1QkUsNkJBQUMsZUFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFLEtBQUtDLFdBRGhCO0FBRUUsTUFBQSxTQUFTLE1BRlg7QUFHRSxNQUFBLE9BQU8sRUFBQyxXQUhWO0FBSUUsTUFBQSxLQUFLLEVBQUM7QUFKUixpQkF2QkYsQ0FEQSxDQVpGLENBREY7QUFpREQ7O0FBeEUwQzs7O0FBQXhCSixLLENBQ1pjLFMsR0FBWTtBQUNqQlIsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUMsSUFBVixDQUFlQztBQURQLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgdXNlcm5hbWU6ICcnLFxuICB9O1xuXG4gIGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25Mb2dpbih7XG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIGxvZ2dlZEluOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiPlxuICAgICAgICAgIDxUb29sQmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1Rvb2xCYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8Qm94IG09ezEwfT5cbiAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdLCJmaWxlIjoicmVuZGVyZXIvY29tcG9uZW50cy9Mb2dpbi5qcyJ9
