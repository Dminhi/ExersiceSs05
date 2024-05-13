import React, { Component } from "react";

import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      user: [],
      err: {
        usernameErr: "",
        passwordErr: "",
        email: "",
      },
      // dataRegister: {},
    };
  }

  handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      dataRegister: {
        [name]: value,
      },
    });
  };

  redirectToRegister = () => {
    const { display } = this.state;
    this.setState({
      ...this.state,
      display: !this.state.display,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    console.log(e);
    let err = {
      usernameErr: "",
      passwordErr: "",
      emailErr: "",
    };
    let check = true;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (username.length === 0) {
      err.usernameErr = "username not empty";
      check = false;
    }
    if (email.length === 0) {
      err.emailErr = "email not empty";
      check = false;
    }
    if (password.length === 0) {
      err.passwordErr = "password not empty";
      check = false;
    }
    if (check) {
      // Sử dụng setState với callback để kiểm tra giá trị của state sau khi cập nhật
      this.setState(
        (prevState) => ({
          user: [
            ...prevState.user,
            {
              username,
              email,
              password,
            },
          ],
          display: !this.state.display,
        }),
        () => {
          // Callback được gọi sau khi state được cập nhật
          console.log("Cập nhật state thành công:", this.state.user);
        }
      );
      // this.redirectToRegister();
    } else {
      this.setState({
        err,
      });
    }
  };

  render() {
    console.log(this.state.err);
    return (
      <div>
        <FormLogin
          err={this.state.err}
          redirectToRegister={this.redirectToRegister}
          display={this.state.display}
          user={this.state.user}
        />
        <FormRegister
          err={this.err}
          handleRegister={this.handleRegister}
          // handleChange={this.handleChange}
          user={this.state.user}
          setUser={this.setState}
          redirectToRegister={this.redirectToRegister}
          display={this.state.display}
        />
      </div>
    );
  }
}
