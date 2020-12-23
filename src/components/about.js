/* eslint-disable no-useless-constructor */
import React , { Component} from "react";
import "../assets/css/about.css";

class About extends Component {

  constructor(props){
    super(props);
    this.state = {
      listItems : [
        {title: '2015', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: '2017', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: '2018', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: '2019', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: '2020', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      ]
    };
  }
  


  render(){

      let element = this.state.listItems.map((listItem,index) => {
          let result =    <div className = {"slide slider" + index} key = {index}>
                            <h1>{listItem.title}</h1>
                            <h2>{listItem.content}</h2>
                          </div>
          return result;
      });   

        return (
          <div>
            <section id="about" className="slider">
              <div className="slideshow-container">
                  <div className="slider">
                  {element}
                  </div>
              </div>
            </section>
          </div>
      );
  }
}

export default About;