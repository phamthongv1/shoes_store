/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { DataContext } from "./Context";

import "../assets/css/menu.css";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
    } else {
      return (
        <div className="cart-container">
        {cart.map((item) => (
              <div key={item.id} className="product-cart">
                <div className="main-cart">
                  <img src={item.src_img1} alt="anh" />
                  <div className="cart-info-product">
                    <p>{item.name}</p>
                    <p>{item.price -
                            (item.price * item.discounts) / 100 +
                            "$"}
                    </p>
                    <a className="delete" style={{color: 'red',curson:'pointer'}} onClick={() => removeProduct(item.id)}>Delete</a>
                  </div>
                  <div className="cart-products__qty">
                    <span className="qty qty-decrease " onClick={() => reduction(item.id)}>-</span>
                    <input type="tel" className="qty-input" value={item.count} />
                    <span className="qty qty-increase " onClick={() => increase(item.id)}>+</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      );
    }
  }
}

export default Cart;
