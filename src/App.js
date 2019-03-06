import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import IfOffline from './components/IfOffline';
import './App.scss';


const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">
          Brastlewark
          <IfOffline>Offline</IfOffline>
        </Link>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:gnomeId" component={Detail} />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
