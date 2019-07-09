import React from 'react';
import Container from '../components/Container';
import { shallow } from 'enzyme';
import favorites from '../test-data/favorites'
import peopleData1 from '../test-data/people-data-pg1'

describe('Container', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
        <Container addFavorite={jest.fn()}
            removeFavorite={jest.fn()}
            favorites={favorites}
            data={peopleData1}
            type={'people'}
            />)
    });

    it('should render card components', () => {
        expect(wrapper).toMatchSnapshot();
    })

})