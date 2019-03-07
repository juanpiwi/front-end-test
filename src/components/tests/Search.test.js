import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Search from '../Search';

describe('<Search />', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.prop('className')).to.equal('search');
    expect(wrapper.find('.container')).to.have.length(1);
    expect(wrapper.find('.btn-search')).to.have.length(1);
  });
});
