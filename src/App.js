import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar';
import Footer from './Footer';
import LoginToggle from './LoginToggle';

class App extends Component {
  state = {
    auth: false,
  };

  handleLoginToggleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  render() {
    const auth = this.state.auth;

    return (
      <div className="App">
        <LoginToggle auth={auth} authChange={this.handleLoginToggleChange} />
        <MenuAppBar auth={auth} />
        <header className="App-header">
          <p>
            Contents
          </p>
        </header>
        <Footer auth={auth}/>
      </div>
    );
  }
}

export default App;
