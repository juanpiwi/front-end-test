// @flow
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import IfOffline from './components/IfOffline';
import './App.css';

type Props = {};


const App = (props: Props) => {
  return (
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
}

export default App;
/* export default class App extends React.Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Brastlewark <IfOffline>Offline</IfOffline></Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:gnomeId" component={Detail} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
} */
