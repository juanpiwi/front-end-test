import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Professions from '../Professions';

describe('<Professions />', () => {
  it('renders Professions', () => {
    const items = ['Brewer', 'Medic', 'Prospector', 'Gemcutter', 'Mason', 'Tailor'];
    const wrapper = shallow(<Professions professions={items} />);
    expect(wrapper.prop('className')).to.equal('professions');
    expect(wrapper.find('h2').text()).to.equal('Professions');
    expect(wrapper.find('ul')).to.have.length(1);
  });
});
