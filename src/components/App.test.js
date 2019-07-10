import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call fetch with correct url', () => {

  });

  it('should return a response if status is ok', () => {

  });

  it('should throw an error if status is not ok', () => {

  });

  it('should fetch categories when updatePage is called', () => {

  });

  it('should update favorites array if favoriteCard is called', () => {

  });

  it('should update selected state if animateButtons is called', () => {

  });

  it('should update selected state if restoreHomePage is called', () => {

  });

  it('should update showSplash state when toggleSplash is called', () => {

  });

  it('should update favorites when addFavorite is called', () => {

  });

  it('should update favorites when removeFavorites is called', () => {

  });

  it('should ')

})
