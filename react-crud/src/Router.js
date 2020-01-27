import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import App from './App'

class Router extends React.Component{
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
