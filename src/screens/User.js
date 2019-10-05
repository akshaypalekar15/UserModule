import React, { Component } from 'react';
import NavBar from '../component/Navbar';
import './User.css';
import { connect } from 'react-redux';
import { userLogout } from '../actions'

class User extends Component {

  state = {
    isChangePassword: false,
    password: ''
  }

  handleChangePassword() {
    this.setState({
      isChangePassword: !this.state.isChangePassword
    })
  }

  setPasswordvalue(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogOut() {
    debugger;
    this.props.userLogout(false);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='user-container'>
          <p>Username: DummyName</p>

          {this.state.isChangePassword ?
            <p>
              <span>Password: </span>
              <input type="text" value={this.state.password} onChange={this.setPasswordvalue.bind(this)} />
            </p>
            :
            <p>Password: *******</p>
          }

          <div className='btn-grp'>
            {this.state.isChangePassword ?
              <input
                className='btn'
                type="button"
                value="Save Password"
                onClick={this.handleChangePassword.bind(this)} />
              :
              <input
                className='btn'
                type="button"
                value="Change Password"
                onClick={this.handleChangePassword.bind(this)} />
            }
            <input
              className='btn'
              type="button"
              value="Logout"
              onClick={this.handleLogOut.bind(this)} />
          </div>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    userLogout: (bool)=>{dispatch(userLogout(bool))}
  }
}

export default connect(null, mapDispatchToProps)(User);