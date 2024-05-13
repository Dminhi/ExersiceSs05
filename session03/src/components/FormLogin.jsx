import "./login.css";

import React, { Component } from "react";

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    // Trạng thái lưu trữ tên người dùng và mật khẩu
    this.state = {
      userLogin: {
        username: "",
        password: "",
      },
    };
    // Bind các hàm
  }

  // Hàm xử lý thay đổi input
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Hàm xử lý sự kiện đăng nhập
  handleLogin = () => {
    if (this.state.userLogin.username.length === 0) {
      console.log("username not empty");
    }
    if (this.state.userLogin.username.length === 0) {
      console.log("password not empty");
    }
    const { username, password } = this.state;

    let userList = this.props.user;
    console.log(userList);
    const user = userList.filter(
      (e) => e.username === username && e.password === password
    );
    if (user.length > 0) {
      console.log("Đăng nhâp thành công");
    } else {
      console.log("Đăng nhập thất bại");
    }
    // Logic đăng nhập ở đây
    console.log(`Tên người dùng: ${username}, Mật khẩu: ${password}`);
  };

  render() {
    return this.props.display ? (
      <div className="container">
        <div className="login-container">
          <h2 className="login-title">Đăng nhập</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Tên người dùng</label>
              <input
                type="text"
                id="usernameLogin"
                name="username"
                className="form-control"
                placeholder="Nhập tên người dùng"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="passwordLogin"
                name="password"
                className="form-control"
                placeholder="Nhập mật khẩu"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="login-button"
              onClick={this.handleLogin}
            >
              Đăng nhập
            </button>
          </form>
          <a
            href="#"
            onClick={this.props.redirectToRegister}
            className="login-title"
          >
            Chưa có tài khoản
          </a>
        </div>
      </div>
    ) : (
      ""
    );
  }
}
