import { currentMovie, fetchPageData, fetchPeopleDetails } from './swapi'
import { shallow, mount } from 'enzyme'
import { peopleData1 } from '../test-data/people-data-pg1'
import { person } from '../test-data/mockPerson'
import films from '../test-data/film-data'
import React from 'react'


describe('swapi', () => {


  describe('fetchPageData', () => {

    let mockData;

    beforeEach(() => {
      mockData = peopleData1

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData)
        })
      })
    })

    it('HAPPY: should be able to fetch the ideas form the server', () => {
      expect(fetchPageData('people')).resolves.toBe(mockData)
    })

    it('SAD: should be able to return an error on fecthPageData', async () => {
      try {
        await fetchPageData();
      } catch (error) {
        expect(error).toMatch('error');
      }
    })

  })

  describe('fetchPeopleResults', () => {
    let mockPerson;
    let mockURL;
    beforeEach(() => {
      mockPerson = person;
      mockURL = '../test-data/mockPerson'

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPerson)
        })
      })
    })

    it('HAPPY: should be able to fetch the ideas form the server', () => {
      expect(fetchPeopleDetails(mockURL)).resolves.toBe(mockPerson)
    })


    it('SAD: should be able to return an error on fetchPeopleDetails', async () => {
      try {
        await fetchPeopleDetails();
      } catch (error) {
        expect(error).toMatch('error');
      }
    })

  })

  describe('currentMovie fetch', () => {
    let mockFilms
  
    beforeEach(() => {
      mockFilms = films
  
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFilms)
        })
      })
    })
  
    it('HAPPY: should be able to fetch the ideas form the server', () => {
      expect(currentMovie()).resolves.toBe(mockFilms)
    })
  
  
    it('SAD: should be able to return an error on currentMovie', async () => {
      try {
        await currentMovie();
      } catch (error) {
        expect(error).toMatch('error');
      }
    })

  })

})