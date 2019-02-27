import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import brastlewarkdb from '../brastlewarkdb-api';

import Search from '../components/Search';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gnomes: null, isLoading: true };
  }

  async componentDidMount() {
    let gnomes;
    try {
      gnomes = await brastlewarkdb.getLatest();
    } catch (e) { gnomes = null; }
    this.setState({ gnomes, isLoading: false });
  }

  render() {
    const { gnomes, isLoading } = this.state;

    if (isLoading) {
      return <div className="message">Cargando...</div>;
    }

    return (
      <div>
        <Helmet>
          <title>Brastlewark</title>
        </Helmet>
        <div className="HSearch"><Search /></div>
        <div className="gnomes">
          { gnomes && gnomes.map(gnome => (
            <Link to={`/detail/${gnome.id}`} className="gnome" key={gnome.id}>
              <span className="bg" style={{ backgroundImage: `url(${gnome.thumbnail})` }} />
              <span className="info">
                <h2>{ gnome.name }</h2>
              </span>
            </Link>
          )) }
        </div>
      </div>
    );
  }
}
