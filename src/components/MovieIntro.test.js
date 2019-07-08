import React from 'react';
import { shallow, mount } from 'enzyme'
import MovieIntro from './MovieIntro';
import results from '../test-data/film-data'

describe('Movie Intro', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieIntro toggleSplash={jest.fn()} films={results}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should swap the episode numbers with roman numerals', () => {
    expect(wrapper.instance())
  })

})