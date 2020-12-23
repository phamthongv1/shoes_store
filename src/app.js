import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/homepage.js';
import Detail from './components/Detail.js'
import Checkout from './components/Checkout.js'
import Custom from './components/custom.js'

import {DataProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <Router>
            <Route path="/" component={HomePage} exact />
            <Route path="/product" component={HomePage} exact />
            <Route path="/product/:id" component={Detail} exact/>
            <Route path="/checkout" component={Checkout} exact/>
            <Route path="/custom" component={Custom} exact/>
        </Router>
      </DataProvider>
    );
  }
}

export default App;