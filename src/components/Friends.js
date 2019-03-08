// @flow
import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

type FriendType = {
  friends: Array<string>
};

const Friend = (props: FriendType) => {
  const { friends } = props;

  if (friends.length === 0) {
    return (
      <div className="friends">
        <h2>Friends</h2>
        <p>Not friends</p>
      </div>
    );
  }
  return (
    <div className="friends">
      <h2>Friends</h2>

      <div className="steps">
        { friends.map((line: string, ix: number) => (
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
