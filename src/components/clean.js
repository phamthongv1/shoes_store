/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../assets/css/custom.css";
import img1 from "../assets/img/clean1.jpg";
import img2 from "../assets/img/clean2.jpg";
import img3 from "../assets/img/clean3.jpg";
import img4 from "../assets/img/clean4.jpg";

class Clean extends Component {
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
          <h1>HOW DO I CLEAN MY SHOES?</h1>
        </header>
        <figure className="featured-image-1">
          <img
            src={img1}
            alt="Photo by Karina Carvalho on Unsplash"
          />
        </figure>
        <div className="number-1">1</div>
        <article className="article article-1">
          <h2>Dry brush</h2>
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
          <h2>Make a mild cleaning solution</h2>
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
          <h2>Wash</h2>
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
          <h2>Air dry</h2>
          <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
      </div>
    );
  }
}

export default Clean;
