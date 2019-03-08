// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import brastlewarkdb from '../brastlewarkdb-api';

import Error from '../components/Error';
import Loading from '../components/Loading';
import '../styles/_home.scss';

type PropsType = {};

type StateType = {
  isLoading: boolean,
  gnomes: ?$ReadOnlyArray<{id: number, thumbnail: string, name: string}>
};

export default class Home extends React.Component<PropsType, StateType> {
  state = {
    gnomes: null,
    isLoading: true,
  };

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
      return <Loading />;
    }

    if (gnomes === null) {
      return <Error />;
    }

    return (
      <div>
        <Helmet>
          <title>Gnomes</title>
        </Helmet>
        <div className="gnomes">
          { gnomes && gnomes.map((gnome: Object) => (
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
