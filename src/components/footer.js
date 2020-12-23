/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import "../assets/css/footer.css";
import logo from "../assets/img/K-SHOE.svg"
import SimpleMap from "./map"

function Footer(){

    return (
        <footer id="contact" className="footer-distributed">
        <div className="footer-left">
        <img className="logo" src={logo} alt=""/>
          <p className="footer-links">
            <a href="#">Satisfaction is our motto</a>
          </p>
          <p className="footer-company-name">Design by ThongPham © 2020</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p><span>2 Vo Oanh Street</span> Binh Thanh, Ho Chi Minh City</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>+84 077 559 6283</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="mailto:support@company.com">1651120134@sv.ut.edu.vn</a></p>
          </div>
        </div>
        <div className="footer-right">
            <SimpleMap/>
        </div>
      </footer>
    );
}

export default Footer;