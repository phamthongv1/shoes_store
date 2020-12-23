/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../assets/css/login.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";

import img from "../assets/img/TOKIO_2.jpg";
import logo from "../assets/img/K-SHOE.svg";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">This field is required</small>
    );
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      accounts: [],
      username: "",
      password: "",
      incorrect: false,
      fullname:""
    };
  }

  componentWillMount() {
    fetch("http://localhost:3000/account")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          accounts: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  checkAccount = (user, pass, accounts) => {
    let length = accounts.length;
    var check = 0;
    for (let i = 0; i < length; i++) {
      if (accounts[i].username === user && accounts[i].password === pass) {
        check++;
        this.setState({fullname:accounts[i].fullname})
      }
    }
    if (check === 0) {
      this.setState({ incorrect: false });
    }else{
      this.setState({ incorrect: true });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    let user = this.state.username;
    let pass = this.state.password;
    let accounts = this.state.accounts;

    this.checkAccount(user, pass, accounts);
  };

  render() {
    return (
      <div className="container_login">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <Form
                  className="form"
                  onSubmit={(e) => this.onSubmit(e)}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="username" className="form-control-label">
                      USERNAME:
                    </label>
                    <Input
                      name="username"
                      type="text"
                      className="form-control"
                      value={this.state.username}
                      validations={[required]}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD:</label>
                    <Input
                      type={this.state.active === true ? "text" : "password"}
                      className="form-control"
                      value={this.state.password}
                      validations={[required]}
                      onChange={this.onChangeHandler}
                      name="password"
                    />
                    <i
                      onClick={() =>
                        this.setState({ active: !this.state.active })
                      }
                      className={
                        this.state.active === true
                          ? "far fa-eye-slash"
                          : "far fa-eye"
                      }
                    ></i>
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      <small
                        className={
                          this.state.incorrect === true
                            ? "form-text text-danger hid-mess"
                            : "form-text text-danger show-mess"
                        }
                      >
                        Username or Password is incorrect
                      </small>
                    </div>
                    <div className="col-lg-12 login-btm login-button">
                      <a className=" btn-outline-primary" href={
                          this.state.incorrect === true
                            ? "/admin/index"
                            : "#"
                        }> LOGIN
                      </a>
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
