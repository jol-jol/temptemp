import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <AppBar position="absolute">
          <ToolBar>
            <Typography
              component="h1"
              variant="h5"
              align="center"
            >
              Sign in
            </Typography>
          </ToolBar>
        </AppBar>
        <Box m={10}>
        <form noValidate>
          <TextField
            onChange={this.handleChange}
            value={this.state.username}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            onClick={this.handleLogin}
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
        </Box>
      </Container>
    );
  }
}
