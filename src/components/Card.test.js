import React from 'react';
import Card from '../components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card/>);
    });

    it('should render all passed data', () => {
        expect(wrapper).toMatchSnapshot();
    })
})