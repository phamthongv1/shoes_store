/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { DataContext } from "../components/Context";
import {Link} from 'react-router-dom'
import "../assets/css/menu.css";
import Cart from "./cart"
import Sizes from './Sizes'

import logo from "../assets/img/K-SHOE.svg";
import '../assets/css/detail.css'

class App extends React.Component {
  static contextType = DataContext;
  state = {
    product: [],
  };
  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item.id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }
  render() {
    const { product} = this.state;
    const { addCart,cart,total} = this.context;
    return (
      <>
      {
        product.map(item =>(
        <div key={item.id} className="app">
          <div className="container-detail">
            <div className="menu-left">
              <div className="menu-detail">
                <Link to={`/`}>
                <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="menu-left-1">
                  <ul>
                    <li>
                      <Link to={`/product/`}>
                      Trang chủ
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-angle-double-down"></i>
                    </li>
                    <li>
                      <a href="#">{item.name}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-detail">
                <div className="container-img">
                    <img src={item.src_img1} alt="img1" />
                    <img src={item.src_img2} alt="img2"/>
                </div>
                <div className="container-product">
                  <div className="info-product ">
                  <h1 className="name-product">{item.name}</h1>
                  <div className="price">
                    <span>Price:</span>
                      {item.discounts > 0
                        ? item.price -
                          (item.price * item.discounts) / 100 +
                          "$"
                        : item.price + "$"}
                      <span className="discount">
                        {item.discounts > 0 ? item.price + "$" : ""}
                      </span>
                    </div>
                  <Sizes sizes={item.sizes} amount={item.amount}/>
                  <h2 className="desc">Product Description:</h2> <br/>
                  <p className="title">{item.title}</p>
                  <button className="cart-button" onClick={() => addCart(item.id)}>
                      Add to cart
                  </button>
                  </div>
                </div>
            </div>
            <div className="cart-detail">
              <ul className="nav-area">
                <li
                  className="container-carts"
                  onClick={() => this.setState({ active: !this.state.active })}
                >
                  <a className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <p className="total-product-cart">{cart.length}</p>
                  </a>
                </li>
              </ul>
            </div>
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
              <Link to={`/checkout`}>
              <span className={cart.length === 0 ? "text hidden" : "text"}>Checkout</span>
              </Link>
          </div>
          </div>
          </div>
        ))
      }
      </>
    );
  }
}

export default App;
