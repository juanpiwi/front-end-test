import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Friends from '../Friends';

describe('<Friends />', () => {
  it('renders with Friends', () => {
    const items = ['Pedro', 'Jose'];
    const wrapper = shallow(<Friends friends={items} />);
    expect(wrapper.prop('className')).to.equal('friends');
    expect(wrapper.find('h2').text()).to.equal('Friends');
  });

  it('renders without Friends', () => {
    const items = [];
    const wrapper = shallow(<Friends friends={items} />);
    expect(wrapper.prop('className')).to.equal('friends');
    expect(wrapper.find('h2').text()).to.equal('Friends');
    expect(wrapper.find('p').text()).to.equal('Not friends');
  });
});
