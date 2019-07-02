import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Planets from './Planets';
// import testData from './test-data/film-data'

describe('Planets', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Planets />)
  })

  it('should do stuff', () => {
    console.log('do stuff')
  })

})