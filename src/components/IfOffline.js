// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: string,
};

type State = {
  onLine: boolean,
};

class IfOffline extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { onLine: navigator ? navigator.onLine : true };
  }

  componentDidMount() {
    if (!window) return;
    window.addEventListener('online', this.goOnline);
    window.addEventListener('offline', this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.goOnline);
    window.removeEventListener('offline', this.goOffline);
  }

  goOnline = () => this.setState({ onLine: true })

  goOffline = () => this.setState({ onLine: false })

  render() {
    const { children } = this.props;
    const { onLine } = this.state;

    if (onLine) { return null; }

    return <span>{ children }</span>;
  }
}

IfOffline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default IfOffline;
