import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


class LoginToggle extends React.Component {

  render() {
    const auth = this.props.auth;
    const authChange = this.props.authChange;

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={auth} onChange={authChange} aria-label="LoginSwitch" />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
    );
  }
}

export default LoginToggle;
