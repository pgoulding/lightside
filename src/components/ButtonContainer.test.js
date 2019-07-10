import React from 'react';
import { shallow } from 'enzyme';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
    let wrapper;
    let mockData;
    let mockAnimateButtons;

    beforeEach(() => {
        wrapper = shallow(<ButtonContainer />)
        mockData = [
            {
                link: '/people',
                title: 'People',
                img: 'img',
                animateButtons:{mockAnimateButtons},
                key: 1
        },
        {
            link: '/planets',
            title: 'Planets',
            img: 'img',
            animateButtons:{mockAnimateButtons},
            key: 2
    }
        ]
    })

    it('should render button data', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})