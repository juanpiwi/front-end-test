import React from 'react';

const Profession = (props) => {
  const { professions } = props;
  return (
    <div className="professions">
      <h2>Professions</h2>
      <ul>
        { professions.map((i, ix) => (
          <li key={ix}>{ i }</li>
        )) }
      </ul>
    </div>
  );
};

export default Profession;
