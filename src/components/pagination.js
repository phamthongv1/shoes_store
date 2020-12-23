import React, {Component } from "react";
import { DataContext } from "./Context";

class Pagination extends Component {
  static contextType = DataContext;
  
  
  
  render(){

    const {page, products,pagination} = this.context;
    const length = products.length;

    function display(){
      const numberPage = length/12;
      let result = [];
      for(let i = 0; i <= numberPage;i++){
          result.push(
            <li key={i} onClick={() => pagination(i)} className={page === i ? "page-item active-page" : "page-item"}>{i+1}</li>
          )
      }
      return result;
    }

  return (
    <div id="service" className="flex">
        <ul>       
            <li onClick={() => pagination(page-1)}><i className="fas fa-angle-double-left"></i></li>
                {display()}
            <li onClick={() => pagination(page+1)}><i className="fas fa-angle-double-right"></i></li>
        </ul>
    </div>
  );
  }
};

export default Pagination;