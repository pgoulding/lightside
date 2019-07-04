import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import MovieIntro from './MovieIntro';
import results from '../test-data/film-data'

describe('Movie Intro', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieIntro  films={results}/>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieIntro films={results} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    wrapper.instace().findEpisode(4)
    expect(wrapper).toMatchSnapshot()
  })

  it('should find a random movie and display the title', () => {
    console.log('movie intro', wrapper)
    expect(wrapper.instance().findEpisode(2)).to.equal()
  })

})