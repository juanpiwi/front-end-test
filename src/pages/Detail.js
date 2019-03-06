// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import brastlewarkdb from '../brastlewarkdb-api';
import Professions from '../components/Professions';
import Friends from '../components/Friends';
import Error from '../components/Error';
import Loading from '../components/Loading';

type PropsType = {
  match: Object
};

type StateType = {
  isLoading: boolean,
  gnome: Object
};

export default class Recipe extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { gnome: null, isLoading: true };
  }

  async componentDidMount() {
    let gnome = null;
    const { match } = this.props;
    try {
      gnome = await brastlewarkdb.getGnome(match.params.gnomeId);
    } catch (e) {
      gnome = null;
    }
    this.setState({ gnome, isLoading: false });
  }

  render() {
    const { gnome, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (gnome === null) {
      return <Error />;
    }

    return (
      <div className="Gnome">
        <Helmet>
          <title>{ gnome.name }</title>
        </Helmet>

        <div className="hero" style={{ backgroundImage: `url(${gnome.thumbnail})` }} />

        <div className="title">
          <div className="info">
            <h1>{ gnome.name }</h1>
            <p>{`Age: ${gnome.age}`}</p>
            <p>{`Weight: ${gnome.weight}`}</p>
            <p>{`Height: ${gnome.height}`}</p>
            <p>{`Hair color: ${gnome.hairColor}`}</p>
          </div>
        </div>

        <Professions professions={gnome.professions} />
        <Friends friends={gnome.friends} />
      </div>
    );
  }
}
