import React from 'react';
import Card from '../components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {
    let wrapper;
    let mockToggleFavorite;
    let mockAddFavorite;
    let mockRemoveFavorite;
    let mockData;
    let mockFavorites;

    beforeEach(() => {
        mockToggleFavorite = jest.fn();
        mockAddFavorite = jest.fn();
        mockRemoveFavorite = jest.fn();
        mockFavorites = [
            {favorite1: 'Luke Skywalker'},
            {favorite2: 'Leia SkyWalker'}
        ]
        mockData = {
            name: 'Beyonce',
            birth_year: 1990,
            gender: 'fierce',
            height: 'tall',
            eye_color: 'golden'
        }
        wrapper = shallow(
            <Card 
                data={mockData}
                id='1'
                key='100'
                toggleFavorite={mockToggleFavorite}
                addFavorite={mockAddFavorite}
                removeFavorite={mockRemoveFavorite}
                favorites={mockFavorites}
            />);
    });

    it('should render all passed data', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should set state when toggleFavorite is called', () => {
        wrapper.instance().setState({ isFavorited: true });
        wrapper.instance().toggleFavorite();

        expect(wrapper.state('isFavorited')).toEqual(false)

    });

    it('should call addFavorite after setting state', () => {
        wrapper.instance().toggleFavorite();
        wrapper.instance().setState({ isFavorited: true })

        expect(wrapper.instance().props.addFavorite).toHaveBeenCalled();
    });

    it('should call removeFavorite if current favorite exists in Favorites on toggleFavorite', () => {
        wrapper.instance().props.addFavorite(mockData);
        wrapper.instance().toggleFavorite();
 
        expect(wrapper.instance().props.favorites).toEqual(mockFavorites)
    });

})