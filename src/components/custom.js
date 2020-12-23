/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../assets/css/custom.css";
import img1 from "../assets/img/custom1.jpg";
import img2 from "../assets/img/custom2.jpg";
import img3 from "../assets/img/custom3.jpg";
import img4 from "../assets/img/custom4.jpg";

class Custom extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
        <i class="fas fa-arrow-left"></i>
        <div class="last-page-hint">
          <a href={`/`}>
            <div class="last-page-hint__content">K-SHOES</div>
          </a>
        </div>
          <h1>How to Customize Shoes</h1>
        </header>
        <figure className="featured-image-1">
          <img
            src={img1}
            alt="Photo by Karina Carvalho on Unsplash"
          />
        </figure>
        <div className="number-1">1</div>
        <article className="article article-1">
          <h2>Preparing a Sneaker</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
        <figure className="featured-image-2">
          <img
            src={img2}
            alt="Photo by JC Dela Cuesta on Unsplash"
          />
        </figure>
        <div className="number-2">2</div>
        <article className="article article-2">
          <h2>Masking of Sneakers for Paint</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </article>
        <figure className="featured-image-3">
          <img
            src={img3}
            alt="Photo by Seth Doyle on Unsplash"
          />
        </figure>
        <div className="number-3">3</div>
        <article className="article article-3">
          <h2>Solid Color Sneakers</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
        <figure className="featured-image-4">
          <img
            src={img4}
            alt="Photo by Tim Marshall on Unsplash"
          />
        </figure>
        <div className="number-4">4</div>
        <article className="article article-4">
          <h2>Removing Masking Tape From Sneaker</h2>
          <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
      </div>
    );
  }
}

export default Custom;
