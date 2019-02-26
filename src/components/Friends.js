import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

const Friend = (props) => {
  const { friends } = props;
  return (
    <div className="friends">
      <h2>Friends</h2>

      <div className="steps">
        { friends.map((line, ix) => (
          <div className="step" key={uid()}>
            <div className="number">{ix + 1}</div>
            <div className="text">{ line }</div>
          </div>
        )) }
      </div>
    </div>
  );
};

Friend.propTypes = {
  friends: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Friend;
