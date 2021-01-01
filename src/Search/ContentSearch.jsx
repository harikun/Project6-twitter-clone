import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

export class ContentSearch extends Component {
 
  render() {
    const {trendingTweet} = this.props;
    const trendingTweetList = trendingTweet.map(tweet =>{
        return (
          <div className="h-20 w-full bg-black" key={tweet.id}>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700 ml-3 mt-3">{tweet.trending}</span>
              <FontAwesomeIcon 
                icon={faCaretSquareDown} 
                className="fa-lg text-sm text-gray-500 mr-3"  
               />
            </div>
            <div className="font-bold text-white ml-3">{tweet.hastag}</div>
            <div className="text-xs text-gray-700 ml-3">{tweet.count} Tweets</div>
          </div>
        )
    })
    return (
     <div>
        {trendingTweetList}
     </div>
    )
  }
}

export default ContentSearch
