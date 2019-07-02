import React from 'react';
import Category from '../components/Category';
import { shallow } from 'enzyme';

describe('Category', () => {
    let wrapper;
    const changeViewMock = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
        <Category 
            changeView={changeViewMock}
        />)
    });

    it('should render a button', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call changeView on a click', () => {
        wrapper.find('.selectCategoryBtn').simulate('click');

        expect(changeViewMock).toHaveBeenCalled();
    })

})