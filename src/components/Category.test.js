import React from 'react';
import Category from './components/Category';
import { shallow } from 'enzyme';

describe('Category', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Category />)
    });

    it('should render a button', () => {
        expect(wrapper).instanceOf().toMatchSnapShot();
    })
})