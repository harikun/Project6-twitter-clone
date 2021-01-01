import React, { Component } from 'react'

export class MessageHeader extends Component {
  render() {
    return (
      <div className="absolute top-0 left-0 w-full">
      <header className="flex items-center h-12 bg-black">
         <img  className="rounded-full ml-3" width="30px" height="30px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="" />
         <p className="text-lg text-white ml-4 font-bold">Message</p>
     </header>
     </div>
    )
  }
}

export default MessageHeader
