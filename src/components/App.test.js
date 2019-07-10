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
    mockFavorite = {id: 1, name: 'Jev', height: 'the perfect height', eye_color: 'green?'};
    
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

  it('should update selected state if animateButtons is called', () => {
    wrapper.setState({ selected: false })
    wrapper.instance().animateButtons();

    expect(wrapper.state('selected')).toEqual(true)
  });

  it('should update selected state if restoreHomePage is called', () => {
    wrapper.setState({ selected: true})
    wrapper.instance().restoreHomePage();

    expect(wrapper.state('selected')).toEqual(false)
  });

  it('should update showSplash state when toggleSplash is called', () => {
    wrapper.setState({ showSplash: true })
    wrapper.instance().toggleSplash();

    expect(wrapper.state('showSplash')).toEqual(false)
  });

  it('should update favorites when addFavorite is called', () => {
    wrapper.setState({ favorites: [] });

    wrapper.instance().addFavorite(mockFavorite)

    expect(wrapper.state('favorites')).toEqual([mockFavorite])
  });

  it('should update favorites when removeFavorites is called', () => {
    wrapper.setState({ favorites: [mockFavorite] })
    wrapper.instance().removeFavorite(1)

    expect(wrapper.state('favorites')).toEqual([])

  });

})
