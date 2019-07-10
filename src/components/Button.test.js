import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button'


describe('Button', () => {
    let wrapper;
    let mockAnimateButtons;

    beforeEach(() => {
        mockAnimateButtons = jest.fn();
        wrapper = shallow(
        <Button 
            animateButtons={mockAnimateButtons} 
            link='/people' 
            title='people' 
            img='img' /> )
    });

    it('should render all props passed down from ButtonContainer', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call animateButtons when button is clicked',  () => {
         wrapper.find('.selectCategoryBtn').simulate('click');

        expect(mockAnimateButtons).toHaveBeenCalled();
    });

})