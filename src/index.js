import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import {DataProvider} from './components/Context'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './admin.js'
import Detail from './components/Detail.js'
import Checkout from './components/Checkout.js'
import Login from './components/login.js';
import AdminPage from './components/admin-page'
import Consignment from './components/consignment.js'
import Custom from './components/custom.js'
import Clean from './components/clean.js'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
        <div>
        <Router>
            <Route path="/" component={App} exact />
            <Route path="/admin/login" component={Admin} exact />
            <Route path="/product/:id" component={Detail} exact/>
            <Route path="/checkout" component={Checkout} exact/>
            <Route path="/admin" component={Login} exact />
            <Route path="/admin/index" component={AdminPage} exact />
            <Route path="/consignment" component={Consignment} exact/> 
            <Route path="/custom" component={Custom} exact/> 
            <Route path="/clean" component={Clean} exact/> 
        </Router>
        </div>
      </DataProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
