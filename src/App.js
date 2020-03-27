import React from 'react';
import {Route, Switch, Router,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Counter from './cmps/Counter'
import Home from './cmps/Home'
import Favorites from './cmps/Favorites'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to='/favorites'>FAVORITES </Link>|
        <Link to='/jerusalem/213225'> HOME</Link>
      </nav>
     
     
      <Switch>
        <Route
        exact
        path='/favorites'
        component ={Favorites}>
        </Route>

        <Route
        exact
        path='/:city/:code'
        component ={Home}>
        </Route>
      </Switch>
      {/* <Counter></Counter> */}
      {/* <Home></Home> */}
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    ctr:state.counter
  }
};

export default connect(mapStateToProps)(App) ;
