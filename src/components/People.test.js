import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import People from './People';
// import testData from './test-data/film-data'

describe('People', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<People />)
  })

  it('should do stuff', () => {
    console.log('do stuff')
  })

})