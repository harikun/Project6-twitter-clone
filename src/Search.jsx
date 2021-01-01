import React, { Component } from 'react'
import ContentSearch from './Search/ContentSearch'
import SearchHeader from './Search/SearchHeader'
import TrendForYou from './Search/TrendForYou'

export class Search extends Component {
  state = {
    trendingTweet: [
        { id: 1, trending: "1 Entertainment. Trending", hastag: "#Love Story", count: 2.199 },
        { id: 2, trending: "2 Sport. Trending",         hastag: "Leicester", count: 46.189 },
        { id: 3, trending: "3 Entertainment. Trending", hastag: "#BiroJomblo", count: 7.908 },
        { id: 4, trending: "4 Kpop. Trending", hastag: "#Jun_DreamCover", count: 2.199 },
        { id: 5, trending: "5 Music. Trending", hastag: "JUNHUI BEST BOY", count: 17.009 },
        { id: 6, trending: "6 Premier League. Trending", hastag: "Cavani", count: 25.909 },
        { id: 7, trending: "7 Premier League. Trending", hastag: "Chelsea", count: 17.678 }
    ]
  }
  render() {
    return (
      <div>
        <SearchHeader />
        <TrendForYou />
        <ContentSearch trendingTweet={this.state.trendingTweet} />
   
      </div>
    )
  }
}

export default Search
