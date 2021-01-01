import React, { Component } from 'react'
import Mention from './Notification/Mention'
import NotificationHeader from './Notification/NotificationHeader'
import TweetMention from './Notification/TweetMention'

export class Notification extends Component {
  render() {
    return (
      <div>
        <NotificationHeader />
        <Mention />
        <TweetMention />
        <TweetMention />
        <TweetMention />
        <TweetMention />
      </div>
    )
  }
}

export default Notification
