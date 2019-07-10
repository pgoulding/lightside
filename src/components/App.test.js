import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;
  let mockData;
  let mockFavorite;
  let mockUpdatePage;
  let mockFavoriteCard;
  let mockAnimateButtons;
  let mockRestoreHomePage;
  let mockToggleSplash;
  let mockAddFavorite;
  let mockRemoveFavorite;
  
  beforeEach(() => {
    wrapper = shallow(<App />)
    mockData = [
      {id: 100, title: 'starwars movie', characters: 'Leia, Yoda, BB8'},
      {id: 101, title: 'another movie', characters: 'Travis and Leta'}
    ];
    mockFavorite = {name: 'Jev', height: 'the perfect height', eye_color: 'green?'};
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    })
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
    const expected = 'https://swapi.co/api/films/'

    window.fetch('https://swapi.co/api/films/')

    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should fetch categories when updatePage is called', () => {
    wrapper.instance().updatePage();

    expect(window.fetch).toHaveBeenCalled();
  });

  it.only('should update favorites array if favoriteCard is called', () => {
    wrapper.setState({ favorites: [] });

    wrapper.instance().addFavorite(mockFavorite)

    expect(wrapper.state('favorites'))
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

})
