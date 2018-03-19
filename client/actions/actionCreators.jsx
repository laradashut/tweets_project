// import axios from 'axios';
import fetch from 'cross-fetch'

export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const SELECT_BRAND = 'SELECT_BRAND'

export const fetchTweets = (brand) => {
  return dispatch => {
    dispatch(requestTweets(brand))
    return fetch(`/home/${brand}`)
      .then(response => response.json(),
        error => console.log('Tweets not found', error))
      .then(json => dispatch(receiveTweets(brand, json)))
  }
}
// dispatch(receiveTweets(brand, json)

const requestTweets = (brand) => {
  return {
    type: REQUEST_TWEETS,
    brand
  }
}

const receiveTweets = (brand, json) => {
  return {
    type: RECEIVE_TWEETS,
    brand,
    tweets: json.rows,
    receivedAt: Date.now()
  }
}

export const selectBrand = (brand) => {
  return {
    type: SELECT_BRAND,
    brand
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const VisibilityFilters = {
  SHOW_UNITED: 'SHOW_UNITED',
  SHOW_VIRGIN: 'SHOW_VIRGIN',
  SHOW_AMERICAN: 'SHOW_AMERICAN',
  SHOW_DELTA: 'SHOW_DELTA'
}
