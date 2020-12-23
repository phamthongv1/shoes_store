import React  from "react";
import "../assets/css/main.css";
import About from "./about"
import Product from "./product"
import Services from "./services"

function Main(){

    return (
        <main>
            <About/>
            <Product/>
            <Services/>
        </main>
    );
}

export default Main;