// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTweets, selectBrand } from '../actions/actionCreators'
// import { bindActionCreators } from 'redux'

// import Tweets from './Tweets'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount() {
  //   const { dispatch, selectedBrand } = this.props
  //   dispatch(fetchTweets(selectedBrand))
  // }
  //
  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedBrand !== prevProps.selectedBrand) {
  //     const { dispatch, selectedBrand } = this.props
  //     dispatch(fetchTweets(selectedBrand))
  //   }
  // }

  handleChange (nextBrand) {
    this.props.dispatch(selectBrand(nextBrand))
    this.props.dispatch(fetchTweets(nextBrand))
  }

  render () {
    const { selectedBrand, tweets, fetching, lastUpdated } = this.props
    return (
      <div>
        <h1>
            Tweets Analytics
        </h1>
        <form>
          <label>
              Choose a brand:
            <select value={selectedBrand} onChange={e => this.handleChange(e.target.value)}>
              <option>United</option>
              <option>Virgin</option>
              <option>Delta</option>
              <option>American</option>
            </select>
          </label>
        </form>
        <div>
          {this.props.tweets.map((tweet, i) => <Tweets key={i} tweet={tweet} />)}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  selectedBrand: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { selectedBrand, reducerForTweets } = state
  const {
    fetching,
    lastUpdated,
    data: tweets
  } = reducerForTweets

  console.log('new state', {
    selectedBrand,
    tweets,
    fetching,
    lastUpdated
  })

  return {
    selectedBrand,
    tweets,
    fetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)

//
//
// const tweets = (state = {
//   data: [],
//   fetching: false,
//   fetched: false,
//   error: null,
// }, action) => {
//
//   switch (action.type) {
//     case FETCH_TWEETS_REQUEST:
//       return {...state, fetching: true}
//
//     case FETCH_TWEETS_ERROR:
//       return { ...state, fetching: false, error: action.payload}
//
//     case RECEIVE_TWEETS_SUCCESS:
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         data: action.payload,
//       }
//     default:
//       return state;
//   }
// };
//
// const mapStateToProps = (state) => {//accepts the state and returns an object of props
//   console.log('my state', state.tweets.data);
//   return {
//     // items: state.items,
//     // hasErrored: state.itemsHasErrored,
//     // isLoading: state.itemsIdLoading,
//     tweets: state.tweets.data,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {//dispatch itemsFetchData() with a prop
//   // return bindActionCreators(actionCreators, dispatch);
//   return {
//     onChange: () => {
//       dispatch(actionCreators.fetchTweets())
//     }
//   }
// };
//
// // const App = connect(mapStateToProps, mapDispatchToProps)(Home);
//
// export default App;
