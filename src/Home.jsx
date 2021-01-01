import React, { Component } from 'react'
import HomeContent from './Home/HomeContent'
import HomeHeader from './Home/HomeHeader'

export class Home extends Component {

  render() {
    return (
      <div className="grid grid-flow-col">
        <HomeHeader />
        <main className="h-auto">
         <HomeContent />
         <HomeContent />
         <HomeContent />
         <HomeContent />
         <HomeContent />
         <HomeContent />
        </main>
        
      </div>
    )
  }
}

export default Home
