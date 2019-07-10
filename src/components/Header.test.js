import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
    let wrapper;
    let mockRestoreHomePage;
    let mockAnimateButtons;
    let mockFavorites;

    beforeEach(() => {
        mockRestoreHomePage = jest.fn();
        mockAnimateButtons = jest.fn();
        mockFavorites = [];

        wrapper = shallow(
            <Header 
                restoreHomePage={mockRestoreHomePage}
                animateButtons={mockAnimateButtons}
                favorites={mockFavorites}
            />)
    })

    it('should render the movie title and faves button', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call restoreHomePage when the title is clicked', () => {
        wrapper.find('h1').simulate('click');

        expect(mockRestoreHomePage).toHaveBeenCalled();
    });

    it('should call animateButtons when the view Favorites button is clicked', () => {
        wrapper.find('.faveBtn').simulate('click');

        expect(mockAnimateButtons).toHaveBeenCalled();
    });
})