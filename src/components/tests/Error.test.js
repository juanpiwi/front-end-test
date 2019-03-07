import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Error from '../Error';

describe('<Error />', () => {
  it('renders error message', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.prop('className')).to.equal('message');
    expect(wrapper.text()).to.equal('There was a problem :(');
  });
});
