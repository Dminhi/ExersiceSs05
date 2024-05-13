import "./register.css";

import React, { Component } from "react";

export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo trạng thái với các trường nhập liệu
    this.state = {};
    // Ràng buộc các hàm
  }

  // Hàm xử lý sự kiện đăng ký

  render() {
    console.log(this.props.err);
    return this.props.display ? (
      ""
    ) : (
      <div className="register-container">
        <h2 className="register-title">Đăng ký</h2>
        <form className="register-form" onSubmit={this.props.handleRegister}>
          <div className="form-group">
            <label htmlFor="usernameRegister">Tên người dùng</label>
            <input
              type="text"
              id="usernameRegister"
              name="username"
              className="form-control"
              placeholder="Nhập tên người dùng"
              //   value={this.state.username}
              //   onChange={this.props.handleChange}
            />
            <p>{this.props.err}</p>
          </div>
          <div className="form-group">
            <label htmlFor="emailRegister">Email</label>
            <input
              type="email"
              id="emailRegister"
              name="email"
              className="form-control"
              placeholder="Nhập email"
              //   value={this.state.email}
              //   onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordRegister">Mật khẩu</label>
            <input
              type="password"
              id="passwordRegister"
              name="password"
              className="form-control"
              placeholder="Nhập mật khẩu"
              //   value={this.state.password}
              //   onChange={this.props.handleChange}
            />
          </div>
          <button type="submit" className="register-button">
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}
