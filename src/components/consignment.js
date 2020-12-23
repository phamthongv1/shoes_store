/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import "../assets/css/consignment.css";

export class Consignment extends Component {
  render() {
    return (
      <div class="page">
        <i class="fas fa-arrow-left"></i>
        <div class="last-page-hint">
          <a href={`/`}>
            <div class="last-page-hint__content">K-SHOES</div>
          </a>
        </div>
        <header>
          <div class="header__solid-block solid-block"></div>
          <div class="header__empty-block empty-block"></div>
          <div class="header__img"></div>
          <div class="header__title header_top-right">VINTAGE</div>
          <div class="header__title header_right">SHOES</div>
          <div class="header__title header_left">HIGH</div>
          <div class="header__title header_left-bottom">TOP</div>
        </header>

        <article>
          <div class="article__hint">SHOES CONSIGNMENT</div>

          <div class="article__title">VINTAGE SHOES</div>
          <div class="article__subtitle">
            Kogi Cosby sweater ethical squid irony
          </div>
          <div class="article__content1">
            In the tumultuous business of cutting-in and attending to a whale,
            there is much running backwards and forwards among the crew. Now
            hands are wanted here, and then again hands are wanted there. There
            is no staying in any one place; for at one and the same time
            everything has to be done everywhere. It is much the same with him
            who endeavors the description of the scene.
          </div>
          <div class="article__content2">
            We must now retrace our way a little. It was mentioned that upon
            first breaking ground in the whale's back, the blubber-hook was
            inserted into the original hole there cut by the spades of the
            mates. But how did so clumsy and weighty a mass as that same hook
            get fixed in that hole? It was inserted there by my particular
            friend Queequeg, whose duty it was, as harpooneer.
          </div>
        </article>

        <footer>
          <div class="footer__solid-block solid-block"></div>
          <div class="footer__empty-block empty-block"></div>
          <div class="footer__img1"></div>
          <div class="footer__img2"></div>
          <div class="footer__ingredient-block ingredient-block"></div>
        </footer>
      </div>
    );
  }
}

export default Consignment;
