import React from 'react'
import Navbar from './Components/Navbar/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Photos from './Containers/Photos/index'
import Search from './Containers/Search';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename="spacestagram">
    <Navbar />
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Photos />
      </Route>
    </Switch>
  </BrowserRouter>

  
    </div>
  );
}

export default App;
