import React from "react";

// import "reset-css";
import "../assets/css/about.css";
import Slide from "./slide"
import Menu from "./menu"
import "../assets/css/slide.css"


function Header() {

  return (
    <header>
        <Menu/>
        <Slide />
    </header>
  );
}

export default Header;
