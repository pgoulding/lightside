import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button'


describe('Button', () => {
    let wrapper;
    let mockAnimateButtons;

    beforeEach(() => {
        mockAnimateButtons = jest.fn();
        wrapper = shallow(<Button 
            animateButtons={mockAnimateButtons} link='/people' title='people' img='img' /> )
    });

    it('should render all props passed down from ButtonContainer', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update state when animateButtons is called', () => {
        wrapper.instance().animateButtons()

        expect(wrapper.state('selected')).toEqual(true);
    });

})