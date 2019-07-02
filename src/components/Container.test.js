import React from 'react';
import Container from '../components/Container';
import { shallow } from 'enzyme';

describe('Container', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Container />)
    });

    it('should render card components', () => {
        expect(wrapper).toMatchSnapshot();
    })

})