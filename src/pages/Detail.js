import React from 'react';
import { Helmet } from 'react-helmet';
import brastlewarkdb from '../brastlewarkdb-api';
import Professions from '../components/Professions';
import Friends from '../components/Friends';

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gnome: null, isLoading: true }
  }

  async componentDidMount() {
    let gnome = null;
    try {
      gnome = await brastlewarkdb.getGnome(this.props.match.params.gnomeId)
    } catch (e) {
      gnome = null;
    }
    this.setState({ gnome, isLoading: false });
  }

  compartir = (e) => {
    e.preventDefault();
    if (!navigator.share) {
      alert('Tu browser no soporta la Web Share API'); 
      return;
    }

    const { gnome } = this.state;

    navigator.share({
      title: `${gnome.name}`,
      text: 'Gnome',
      url: document.location.href,
    })
      .then(() => alert('Contenido compartido!'))
      .catch((error) => alert('Hubo un error'))
  }

  render() {
    const { gnome, isLoading } = this.state;

    if (isLoading) {
      return <div className="message">Cargando...</div>;
    }

    if (gnome === null) {
      return <div className="message">Hubo un problema :(</div>;
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
          <div>
            <a className="share" onClick={ this.compartir }>Compartir</a>
          </div>
        </div>


        <Professions professions={gnome.professions} />

        <Friends friends={gnome.friends} />

      </div>
    );
  }
}
