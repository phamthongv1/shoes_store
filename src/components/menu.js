/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { DataContext } from "./Context";
import Cart from './cart'
import "../assets/css/menu.css";

import logo from "../assets/img/K-SHOE.svg";
import img from "../assets/img/image.jpg";

export class Menu extends React.Component {

  static contextType = DataContext;

  constructor() {
    super();
    this.state = {
      scrolled: false,
      active: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  // eslint-disable-next-line react/no-typos
  componentWillUnMount() {
    window.removeEventListener("scroll");
  }

  render() {
    const {cart,total} = this.context;
    return (
      <div>
        <section className={this.state.scrolled ? "menu scrolled" : "menu"}>
          <img className="logo" src={logo} alt="" />
          <nav>
            <ul className="nav-area">
              <li>
                <a href="#home" className="nav-area__bg">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#product">PRODUCT</a>
              </li>
              <li>
                <a href="#service">SERVICE</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li
                className="container-carts"
                onClick={() => this.setState({ active: !this.state.active })}
              >
                <a href="#" className="cart">
                  <i className="fas fa-shopping-cart"></i>
                  <p className="total-product-cart">{cart.length}</p>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <div
          className={
            this.state.active
              ? "container-cart toggle-on"
              : "container-cart toggle-off"
          }
        >
          <div className="top-cart">
            <p className="cart-name">
              <i className="fas fa-shopping-cart"></i>Shopping Cart
            </p>
            <i
              className="fas fa-times"
              onClick={() => this.setState({ active: !this.state.active })}
            ></i>
          </div>
          <Cart/>
          <div className={cart.length === 0 ? "total-price hidden" : "total-price"}>
                <h4>TOTAL PRICE:</h4>
                <p>${total}</p>
              </div>
              <a href={`/checkout`}>   
              <span className={cart.length === 0 ? "text hidden" : "text"}>Checkout</span>
              </a>  
          </div>
      </div>
    );
  }
}

export default Menu;
