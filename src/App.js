import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoggedIn: nextProps.isLoggedIn });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ?
          <Redirect to='/Home' />
          :
          <Redirect to='/Login' />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const mapStateToProps = (state) => {
  return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
