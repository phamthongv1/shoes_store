import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './components/login.js';
import AdminPage from './components/admin-page'
import {DataProvider} from './components/Context'


class Admin extends React.Component{
  render(){
    return(
      <DataProvider>
          <Router>
              <Route path="/admin/login" component={Login} exact />
              <Route path="/admin/index" component={AdminPage} exact />
          </Router>
        <Login/>
      </DataProvider>
    );
  }
}

export default Admin;