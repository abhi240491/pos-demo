//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
//import Login from "./Login";
//import { useStateValue } from './Reducer/StateProvider';
//import Payment from './Payment';

//Libraries from stripe for payment processing

function App() {
  
  return (
    //BEM
    <Router>
    <div className = "app">
      <Switch>
        <Route path = "/checkout"> 
          <Header/>
          <Checkout/>
        </Route>
        <Route path = "/">
          {/*Home*/}
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
