import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tweets extends Component {
  render () {
    const { tweet } = this.props
    return (
      <div>
        <div clasName='media-left'>
          <img src={tweet.user_profile_image_url} />
        </div>
        <div className='item-username'>{tweet.user_name}</div>
        <div className='item-text'>{tweet.tweet_text}</div>

      </div>
    )
  }
}

Tweets.propTypes = {
  tweet: PropTypes.object.isRequired
}
