import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />)
    })

    it('should render the movie title and faves button', () => {
        expect(wrapper).toMatchSnapshot();
    })
})