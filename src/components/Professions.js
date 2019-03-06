// @flow
import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

type Props = {
  professions: Array<string>,
};

const Profession = (props: Props) => {
  const { professions } = props;
  return (
    <div className="professions">
      <h2>Professions</h2>
      <ul>
        { professions.map(currProfession => (
          <li key={uid()}>{ currProfession }</li>
        )) }
      </ul>
    </div>
  );
};

Profession.propTypes = {
  professions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Profession;
