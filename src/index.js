import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import GeneralInfo from './containers/GeneralInfo';
import PackageDetails from './containers/PackageDetails';
import HeaderBar from './components/HeaderBar';
import promise from 'redux-promise';

import reducers from './store/reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
       <HeaderBar />
       <Switch>
          <Route path="/packagedetails" component={PackageDetails} />
          <Route path="/" exact component={GeneralInfo} />
          <Redirect to="/" />
       </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));



