import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import "font-awesome/css/font-awesome.min.css"
import React, { Component } from 'react';
class App extends Component
{
  
  //passed our store instance into Provider as a prop, making it available to all of our other components.
  render()
  {
    return(
     <div>
       <Header/>
     </div>
    )
  }
}


export default App;
