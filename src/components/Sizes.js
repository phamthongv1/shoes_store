import React, { Component } from "react";
import { DataContext } from "./Context";

export class Sizes extends Component {
  static contextType = DataContext;

  render() {
    const {sizes} = this.props;
    const {sizeChoose,sizeSelect} = this.context;

    return (
      <div className="colors">
        {sizes.map((size, index) => (
          <button value={index} key={index} onClick={() => sizeChoose(size)} style={sizeSelect === size
            ? {backgroundColor: "black",color:"white"} : {}}>
            {size}
          </button>
        ))}
      </div>
    );
  }
}

export default Sizes;
