import React from 'react'
import Navbar from './Components/Navbar/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Photos from './Containers/Photos/index'


function App() {
  return (
    <div className="App">
    <BrowserRouter basename="spacestagram">
    <Navbar />
    <Switch>

      <Route path="/">
        <Photos />
      </Route>
    </Switch>
  </BrowserRouter>

  
    </div>
  );
}

export default App;
