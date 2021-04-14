"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class LoggedIn extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      tab: 0
    };

    this.handleLogout = () => {
      this.props.onLogout({
        username: '',
        loggedIn: false
      });
    };

    this.handleTabChange = (event, value) => {
      this.setState({
        tab: value
      });
    };

    this.handleMeterChange = e => {
      this.setState({
        meter: e.target.value
      });
      this.props.onUpdateLength({
        meter: e.target.value
      });
    };

    this.handleFeetChange = e => {
      this.setState({
        feet: e.target.value
      });
      this.props.onUpdateLength({
        feet: e.target.value
      });
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_Container.default, {
      component: "main",
      maxWidth: "xs"
    }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
      position: "absolute"
    }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
      display: "flex",
      flexGrow: 1
    }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
      value: this.state.tab,
      onChange: this.handleTabChange
    }, /*#__PURE__*/_react.default.createElement(_Tab.default, {
      label: "Meter to Feet"
    }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
      label: "Feet to Meter"
    }))), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "h1",
      variant: "body1",
      marginLeft: "auto"
    }, "Welcome, ", this.props.user.username, "! (", /*#__PURE__*/_react.default.createElement(_Link.default, {
      onClick: this.handleLogout,
      color: "inherit"
    }, "Logout"), ")"))), this.state.tab === 0 && /*#__PURE__*/_react.default.createElement(_Box.default, {
      m: 10
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      onChange: this.handleMeterChange,
      value: this.props.calculation.meter,
      margin: "normal",
      fullWidth: true,
      id: "meter-1",
      label: "Meter",
      name: "meter-1",
      InputLabelProps: {
        shrink: true
      }
    }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
      value: this.props.calculation.feet,
      margin: "normal",
      fullWidth: true,
      name: "feet-1",
      label: "Feet",
      id: "feet-1",
      InputLabelProps: {
        shrink: true
      }
    })), this.state.tab === 1 && /*#__PURE__*/_react.default.createElement(_Box.default, {
      m: 10
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      onChange: this.handleFeetChange,
      value: this.props.calculation.feet,
      margin: "normal",
      fullWidth: true,
      name: "feet-2",
      label: "Feet",
      id: "feet-2",
      InputLabelProps: {
        shrink: true
      }
    }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
      value: this.props.calculation.meter,
      margin: "normal",
      fullWidth: true,
      name: "meter-2",
      label: "Meter",
      id: "meter-2",
      InputLabelProps: {
        shrink: true
      }
    })));
  }

}

exports.default = LoggedIn;
LoggedIn.propTypes = {
  onLogout: _propTypes.default.func.isRequired,
  onUpdateLength: _propTypes.default.func.isRequired,
  meter: _propTypes.default.string,
  feet: _propTypes.default.string
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL2NvbXBvbmVudHMvTG9nZ2VkSW4uanMiXSwibmFtZXMiOlsiTG9nZ2VkSW4iLCJDb21wb25lbnQiLCJzdGF0ZSIsInRhYiIsImhhbmRsZUxvZ291dCIsInByb3BzIiwib25Mb2dvdXQiLCJ1c2VybmFtZSIsImxvZ2dlZEluIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaGFuZGxlTWV0ZXJDaGFuZ2UiLCJlIiwibWV0ZXIiLCJ0YXJnZXQiLCJvblVwZGF0ZUxlbmd0aCIsImhhbmRsZUZlZXRDaGFuZ2UiLCJmZWV0IiwicmVuZGVyIiwidXNlciIsImNhbGN1bGF0aW9uIiwic2hyaW5rIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHZSxNQUFNQSxRQUFOLFNBQXVCQyxnQkFBdkIsQ0FBaUM7QUFBQTtBQUFBO0FBQUEsU0FDOUNDLEtBRDhDLEdBQ3RDO0FBQ05DLE1BQUFBLEdBQUcsRUFBRTtBQURDLEtBRHNDOztBQUFBLFNBWTlDQyxZQVo4QyxHQVkvQixNQUFNO0FBQ25CLFdBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQjtBQUNsQkMsUUFBQUEsUUFBUSxFQUFFLEVBRFE7QUFFbEJDLFFBQUFBLFFBQVEsRUFBRTtBQUZRLE9BQXBCO0FBSUQsS0FqQjZDOztBQUFBLFNBbUI5Q0MsZUFuQjhDLEdBbUI1QixDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FBa0I7QUFDbEMsV0FBS0MsUUFBTCxDQUFjO0FBQUNULFFBQUFBLEdBQUcsRUFBRVE7QUFBTixPQUFkO0FBQ0QsS0FyQjZDOztBQUFBLFNBdUI5Q0UsaUJBdkI4QyxHQXVCekJDLENBQUQsSUFBTztBQUN6QixXQUFLRixRQUFMLENBQWM7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RUUsTUFBQSxLQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXaUIsV0FBWCxDQUF1QkgsSUFGaEM7QUFHRSxNQUFBLE1BQU0sRUFBQyxRQUhUO0FBSUUsTUFBQSxTQUFTLE1BSlg7QUFLRSxNQUFBLElBQUksRUFBQyxRQUxQO0FBTUUsTUFBQSxLQUFLLEVBQUMsTUFOUjtBQU9FLE1BQUEsRUFBRSxFQUFDLFFBUEw7QUFRRSxNQUFBLGVBQWUsRUFBRTtBQUNmSSxRQUFBQSxNQUFNLEVBQUU7QUFETztBQVJuQixNQURGLGVBYUUsNkJBQUMsa0JBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXaUIsV0FBWCxDQUF1QlAsS0FEaEM7QUFFRSxNQUFBLE1BQU0sRUFBQyxRQUZUO0FBR0UsTUFBQSxTQUFTLE1BSFg7QUFJRSxNQUFBLElBQUksRUFBQyxTQUpQO0FBS0UsTUFBQSxLQUFLLEVBQUMsT0FMUjtBQU1FLE1BQUEsRUFBRSxFQUFDLFNBTkw7QUFPRSxNQUFBLGVBQWUsRUFBRTtBQUNmUSxRQUFBQSxNQUFNLEVBQUU7QUFETztBQVBuQixNQWJGLENBdkRKLENBREY7QUFvRkQ7O0FBMUg2Qzs7O0FBQTNCdkIsUSxDQUtad0IsUyxHQUFZO0FBQ2pCbEIsRUFBQUEsUUFBUSxFQUFFbUIsbUJBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQlYsRUFBQUEsY0FBYyxFQUFFUSxtQkFBVUMsSUFBVixDQUFlQyxVQUZkO0FBR2pCWixFQUFBQSxLQUFLLEVBQUVVLG1CQUFVRyxNQUhBO0FBSWpCVCxFQUFBQSxJQUFJLEVBQUVNLG1CQUFVRztBQUpDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VkSW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0YWI6IDBcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25Mb2dvdXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25VcGRhdGVMZW5ndGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbWV0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmVldDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uTG9nb3V0KHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIGxvZ2dlZEluOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVUYWJDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGFiOiB2YWx1ZX0pO1xuICB9O1xuXG4gIGhhbmRsZU1ldGVyQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttZXRlcjogZS50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlTGVuZ3RoKHtcbiAgICAgIG1ldGVyOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUZlZXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlZXQ6IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZUxlbmd0aCh7XG4gICAgICBmZWV0OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIj5cbiAgICAgICAgICA8VG9vbEJhcj5cbiAgICAgICAgICAgIDxCb3ggIGRpc3BsYXk9J2ZsZXgnIGZsZXhHcm93PXsxfT5cbiAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFifVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGFiQ2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJNZXRlciB0byBGZWV0XCIgLz5cbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJGZWV0IHRvIE1ldGVyXCIgLz5cbiAgICAgICAgICA8L1RhYnM+PC9Cb3g+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PVwiYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2VsY29tZSwge3RoaXMucHJvcHMudXNlci51c2VybmFtZX0hIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0fVxuICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT48L1Rvb2xCYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnRhYiA9PT0gMCAmJlxuICAgICAgICAgIDxCb3ggbT17MTB9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVNZXRlckNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY2FsY3VsYXRpb24ubWV0ZXJ9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm1ldGVyLTFcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk1ldGVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm1ldGVyLTFcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYWxjdWxhdGlvbi5mZWV0fVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cImZlZXQtMVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmVldFwiXG4gICAgICAgICAgICAgIGlkPVwiZmVldC0xXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnRhYiA9PT0gMSAmJlxuICAgICAgICAgIDxCb3ggbT17MTB9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGZWV0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jYWxjdWxhdGlvbi5mZWV0fVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cImZlZXQtMlwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmVldFwiXG4gICAgICAgICAgICAgIGlkPVwiZmVldC0yXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY2FsY3VsYXRpb24ubWV0ZXJ9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYW1lPVwibWV0ZXItMlwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWV0ZXJcIlxuICAgICAgICAgICAgICBpZD1cIm1ldGVyLTJcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICB9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXSwiZmlsZSI6InJlbmRlcmVyL2NvbXBvbmVudHMvTG9nZ2VkSW4uanMifQ==
