/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { DataContext } from "./Context";
import Select from "react-select";
import "../assets/css/product.css";
import Pagination from "./pagination"

export class testProducts extends Component {
  static contextType = DataContext;

  render() {
    const {productPerPage, selects, filter,filterSearch,addCart } = this.context;
    return (
      <section className="product">
        <h1 id="product">PRODUCT</h1>
        <form>
          <input type="text" className="textbox" onChange={e => filterSearch(e.target.value)} placeholder="Search" />
          <input title="Search" value="" type="submit" className="button" />
        </form>
        {/* <Filter/> */}
        <div className="selectdiv">
          <Select
            options={selects} // set list of the data
            value={selects.value}
            onChange={value => filter(value)} // assign onChange function
            defaultValue={{ label: selects[0].label, value: selects[0].value }}
          />
        </div>
        <div className="container">
          <div className="row">
            {productPerPage.map((product,index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#">
                        <img alt="img1" className="pic-1" src={product.src_img1} />
                        <img alt="img2" className="pic-2" src={product.src_img2} />
                    </a>
                    <ul className="social">
                      <li onClick={this.refesh}>
                        <a href={`/product/${product.id}`} data-tip="Quick View">
                          <i className="fa fa-search"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="product-new-label">
                      {product.discounts > 0 ? "Sale" : ""}
                    </span>
                    <span className="product-discount-label">
                      {product.discounts > 0 ? product.discounts + "%" : ""}
                    </span>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">{product.name}</a>
                    </h3>
                    <div className="price">
                      {product.discounts > 0
                        ? product.price -
                          (product.price * product.discounts) / 100 +
                          "$"
                        : product.price + "$"}
                      <span>
                        {product.discounts > 0 ? product.price + "$" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination/>
      </section>
    );
  }
}

export default testProducts;
