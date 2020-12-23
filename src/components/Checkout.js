/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { DataContext } from "./Context";
import Select from "react-select";

import "../assets/css/checkout.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/K-SHOE.svg";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import axios from "axios";

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">This field is required</small>
    );
  }
};

const isNumber = (value) => {
  if (!Number(value)) {
    return <small className="form-text text-danger">Value is Not Number</small>;
  }
};

const specilCharacter = (value) => {
  var format = /[`!@#$%^&*()_+\-=\\/[\]{};':"\\|,.<>\\/?~]/;
  if (format.test(value) === true) {
    return (
      <small className="form-text text-danger">
        Do not contain special characters
      </small>
    );
  }
  if (Number(value)) {
    return <small className="form-text text-danger">Name is Not Number</small>;
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <small className="form-text text-danger">Invalid email format</small>
    );
  }
};

const minLength = (value) => {
  if (value.trim().length < 10) {
    return (
      <small className="form-text text-danger">
        Phone number must be at least 10 characters long
      </small>
    );
  }
};

class Checkout extends Component {
  static contextType = DataContext;
  
  constructor() {
    super();
    this.state = {
          district:"",
          fullname:"",
          phonenumber:"",
          email:"",
          address:"",
          province:"",
          OrNote:"",
          cart:JSON.parse(localStorage.getItem("dataCart")),
          total:JSON.parse(localStorage.getItem("dataTotal"))
    };
  }

  getDistrict = (e) => {
    fetch('http://localhost:3000/' + e.code )
    .then(res => res.json())
    .then(json => {
        this.setState({
          district: json,
        })
    }).catch((err) => {
        console.log(err);
    });
    this.setState({province:e.label})
}

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
        axios.post('http://localhost:3000/order',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        localStorage.removeItem("dataCart");
        localStorage.removeItem("dataTotal");
        alert("Success!!");
        window.location.reload();
    }
  }

  onChangeHandler = (e) => {
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state)
  }

  onChangeSelect = (e) =>{
    this.setState({district:e.label});
    console.log(this.state)
  }

  render() {
    const { cart, total,removeProduct, province } = this.context;
    return (
      <div className="container-checkout">
        <div className="menu-left">
          <div className="menu-detail">
            <Link to={`/`}>
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="menu-left-1">
              <ul>
                <li>
                  <Link to={`/`}>
                    HOME
                  </Link>
                </li>
                <li>
                  <i className="fas fa-angle-double-down"></i>
                </li>
                <li>
                  <a href="#">CHECKOUT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="info-customer">
            <h2>Payment and delivery</h2>
            <Form
              className="form"
              onSubmit={(e) => this.onSubmit(e)}
              ref={(c) => {
                this.form = c;
              }}
            >
              <label htmlFor="fname">FULL NAME:</label>
              <Input
                id="fname"
                name="fullname"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Full name"
                className="form-control"
                value={this.state.fullname}
                validations={[required, specilCharacter]}
              />
              <label htmlFor="phone">PHONE NUMBERS:</label>
              <Input
                id="phone"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Phone number"
                className="form-control"
                validations={[minLength, isNumber]}
                name="phonenumber"
                value={this.state.phonenumber}
              />
              <label htmlFor="email">EMAIL:</label>
              <Input
                id="email"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Email"
                name="email"
                className="form-control"
                validations={[email]}
              />
              <label htmlFor="Country">Province:</label>
              <Select className="select" name="Country" id="Country"
                options={province} // set list of the data 
                value={province.code}
                onChange={this.getDistrict}// assign onChange function
                defaultValue={{ label: "Choose province" }}
                />
              <label htmlFor="District">District:</label>
              <Select className="select" name="District" id="District"
                options={this.state.district} // set list of the data 
                value={this.state.district.label}
                defaultValue={{ label: "Choose district" }}
                onChange={this.onChangeSelect}
              />
              <label htmlFor="Address">ADDRESS:</label>
              <Input
                id="Address"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Address"
                name="address"
                className="form-control"
                validations={[required]}
                value={this.state.address}
              />
              <label htmlFor="OrNote">ORDER NOTES (OPTIONAL):</label>
              <textarea rows="6" value={this.state.OrNote} onChange={this.onChangeHandler} id="OrNote" name="OrNote"></textarea>
              <hr />
              <h5 className="cod">PAY CASH ON RECEIVING (COD)</h5>
              <hr />
              <button className={total === 0 ? "hidden" : "btn btn-info btn-block login"} type="submit">
                Checkout
              </button>
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
          <div className="cart-right">
            <div className="shopping-cart">
              <h1 className="title-cart">YOUR CART</h1>
              <ul className="shopping-cart-items">
                {cart.map((item) => (
                  <li key={item._id} className="clearfix">
                    <img src={item.src_img1} alt="item1" />
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">
                      {item.price - (item.price * item.discounts) / 100 + "$"}
                    </span>{" "}
                    <br />
                    <span className="item-quantity">
                      Quantity: {item.count}
                    </span>{" "}
                    <br />
                    <span
                      className="delete"
                      style={{ color: "red", curson: "pointer" }}
                      onClick={() => removeProduct(item.id)}
                    >
                      Delete
                    </span>
                  </li>
                ))}
              </ul>
              <span className={total === 0 ? "" : "hidden"}>
                Nothings Product
              </span>
              <hr />
              <span className={total === 0 ? "hidden" : "total"}>
                Total:{total}$
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
