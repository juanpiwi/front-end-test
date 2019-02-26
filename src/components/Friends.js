import React from 'react';

const Friend = (props) => {
  const { friends } = props;
  return (
    <div className="friends">
      <h2>Friends</h2>

      <div className="steps">
        { friends.map((line, ix) => (
          <div className="step" key={ix}>
            <div className="number">{ix+1}</div>
            <div className="text">{ line }</div>
          </div>
        )) }
      </div>
    </div>
  );
};
export default Friend;
