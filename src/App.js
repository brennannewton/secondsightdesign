// Components
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './js/Navigation';
import Landing from './js/Landing';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currPage: "Landing",
    };
  }

  render() {
    return (
      <div className={`App ${this.state.currPage}`}>
        <BrowserRouter>
          <Navigation/>
            <Route path="/" exact render={() => <Landing/>}/>
        </BrowserRouter>
      </div>
    );
  }
}
