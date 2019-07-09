import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button'
import { idText } from 'typescript';

describe('Button', () => {
    let wrapper;
    let mockAnimateButtons;

    beforeEach(() => {
        mockAnimateButtons = jest.fn();
        wrapper = shallow(
         <Button 
            link='/people'
            title='people'
            img='img'
            animateButtons={mockAnimateButtons}
        />)
    })

    it('should render all props passed down from ButtonContainer', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call animateButtons when clicked', () => {
    
    });

})