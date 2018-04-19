import React, { Component } from 'react';
import News from './components/news';
import './App.css';
import Weather from './components/Weather';
// import DateTimeDisplay from './components/Date';
import List from './components/List';
import base from './config/constants';
import AddItem from './components/AddItem';
import Quote from './components/Quote';
// import base from './config/constants';
// import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className = "row" id="header">
          <div className = "col-8 mt-4">
            <h2 className ="goodMorning pl-5">Good Morning! </h2>
          </div>
          <div className = 'col mb-5'>
            <Weather/> 
          </div>
         </div>
      </div>

          

        <div className = "container">
          <div className = "row">
            <div className = "col">
              <News />
            </div>
            <div>
              {/* <List /> */}
            </div>
          </div>
          <div className="row">
            <Quote />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
