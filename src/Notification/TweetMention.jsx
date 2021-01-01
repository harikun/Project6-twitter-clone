import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { faCaretSquareDown, faComment, faRetweet, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

export class TweetMention extends Component {
  render() {
    return (
      <div className="h-40 w-full flex items-center bg-black">
        <div>
          <img className="rounded-full ml-3" width="49px" height="49px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="foto status"/>
        </div>
        <div className="ml-2">
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="flex items-center justify-around ">
              <p className="text-white font-bold leading-3">p.t. saphira</p>
              <p className="text-gray-500 text-sm leading-3">@ptsaphira</p>
              <p className="text-gray-500 text-sm leading-3 ">15h</p>
              <FontAwesomeIcon 
                icon={faCaretSquareDown} 
                className="fa-lg text-sm text-gray-500" 
              />
            </div>
            <div className="ml-5 ">
            <span className="text-gray-500 text-sm text-left inline ">replying to</span><p className="text-sm text-blue-900 inline">@hari_kun</p>
            <p className="text-white text-left">I try TailwindCSS after Bootstrap and Materialize CSS</p>
            </div>
            <div className="flex items-center justify-around">
              <FontAwesomeIcon 
                icon={faComment} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faRetweet} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faHeart} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faShareAlt} 
                className="fa-lg text-sm text-gray-500" 
              />
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TweetMention
