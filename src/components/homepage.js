import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../components/header';
import Main from "../components/main"
import Footer from "../components/footer"
import {DataProvider} from '../components/Context'


class HomePage extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header/>
            <Main />
            <Footer/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default HomePage;