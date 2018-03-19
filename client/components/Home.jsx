// import React from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { fetchTweets } from '../actions/actionCreators'

const Home = ({ tweets, onChange }) => (
  <div>
    <div>
      <h1>
        Tweets Analytics
      </h1>
      <form>
        <label>
          Choose a brand:
          <select onChange={this.fetchTweets.bind(this)}>
            <option>United</option>
            <option>Virgin</option>
            <option>Delta</option>
            <option>American</option>
          </select>
        </label>
      </form>

      {/* {React.cloneElement(this.props.children, this.props)} */}
    </div>

    <div>{tweets.data.map(tweet => <li>{tweet.text}</li>)}</div>
  </div>
)

Home.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired
}

export default Home
