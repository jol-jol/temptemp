import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ToolBar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';


export default class LoggedIn extends Component {
  state = {
    tab: 0
  }

  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    onUpdateLength: PropTypes.func.isRequired,
    meter: PropTypes.string,
    feet: PropTypes.string
  };

  handleLogout = () => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };

  handleTabChange = (event, value) => {
    this.setState({tab: value});
  };

  handleMeterChange = (e) => {
    this.setState({meter: e.target.value});
    this.props.onUpdateLength({
      meter: e.target.value
    });
  };

  handleFeetChange = (e) => {
    this.setState({feet: e.target.value});
    this.props.onUpdateLength({
      feet: e.target.value
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <AppBar position="absolute">
          <ToolBar>
            <Box  display='flex' flexGrow={1}>
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
          >
            <Tab label="Meter to Feet" />
            <Tab label="Feet to Meter" />
          </Tabs></Box>
          <Typography
            component="h1"
            variant="body1"
            marginLeft="auto"
          >
            Welcome, {this.props.user.username}! (
            <Link
              onClick={this.handleLogout}
              color='inherit'
            >
              Logout
            </Link>)
          </Typography></ToolBar>
        </AppBar>

        {this.state.tab === 0 &&
          <Box m={10}>
            <TextField
              onChange={this.handleMeterChange}
              value={this.props.calculation.meter}
              margin="normal"
              fullWidth
              id="meter-1"
              label="Meter"
              name="meter-1"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              value={this.props.calculation.feet}
              margin="normal"
              fullWidth
              name="feet-1"
              label="Feet"
              id="feet-1"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        }

        {this.state.tab === 1 &&
          <Box m={10}>
            <TextField
              onChange={this.handleFeetChange}
              value={this.props.calculation.feet}
              margin="normal"
              fullWidth
              name="feet-2"
              label="Feet"
              id="feet-2"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              value={this.props.calculation.meter}
              margin="normal"
              fullWidth
              name="meter-2"
              label="Meter"
              id="meter-2"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        }
      </Container>
    );
  }
}
