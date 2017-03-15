import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class _AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  _handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  _handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AppBar
          title="spa-on-ghpage"
          onLeftIconButtonTouchTap={this._handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/">
            <MenuItem onTouchTap={this._handleClose}>Home</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem onTouchTap={this._handleClose}>About</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
