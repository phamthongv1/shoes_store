import React from "react";

import logo from "../assets/img/K-SHOES-2.svg";
import avatar from "../assets/img/avatar.webp";
import "../assets/css/admin-page.css";

class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  activeMenu = (e) => {
    // if(this.state.active === true){
    //   return;
    // }
    if(e.target.className === ""){
      e.target.classList.add('active-menu');
      this.setState({active:true})
    }else{
      e.target.classList.remove('active-menu');
    }
  }

  render() {
    return (
      <div>
        <div className="container-menu">
          <div className="logo-menu">
            <img src={logo} alt="logo" />
          </div>
          <div className="content-menu">
            <p className="nofication">1</p>
            <i class="far fa-bell"></i>
            <h3 className="welcome">Hi ! Phạm Văn Thi Thông</h3>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="container-content">
          <div className="container-content-menu">
            <ul>
              <li
                // className={this.state.active === true ? "active-menu" : ""}
                onClick={this.activeMenu}
              >
                <a href="#">Order Management</a>
              </li>
              <li
                // className={this.state.active === true ? "active-menu" : ""}
                onClick={this.activeMenu}
              >
                <a href="#">Products Management</a>
              </li>
              <li
                // className={this.state.active === true ? "active-menu" : ""}
                onClick={this.activeMenu}
              >
                <a href="#">Product Portfolio Management</a>
              </li>
            </ul>
          </div>
          <div className="container-content-main"></div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
