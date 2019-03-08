import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('renders error message', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.prop('className')).to.equal('lds-ring');
  });
});