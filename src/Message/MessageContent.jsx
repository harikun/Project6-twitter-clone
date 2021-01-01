import React, { Component } from 'react'

export class MessageContent extends Component {
  render() {
    const {pesan} = this.props;
    const DaftarPesan = pesan.map(chat =>{
      return(
        <div className="h-28 w-full flex items-center bg-black" key={chat.id}>
        <div>
          <img className="rounded-full ml-3" width="49px" height="49px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="foto status"/>
        </div>
        <div className="ml-2 " >
          <div className="grid grid-rows-2 ">
            <div className="flex items-center justify-around">
              <p className="text-white font-bold text-xs ">{chat.name}</p>
              <p className="text-gray-500 text-xs">{chat.akun}</p>
              <p className="text-gray-500 text-xs">15h</p>
            </div>
            <div className="ml-5">
              <p className=" text-left text-xs text-gray-500 ">{chat.pesan}</p>
            </div>
          </div>
        </div>
      </div>
      )
    })
    return (
      <div>
        {DaftarPesan}
      </div>
    )
  }
}

export default MessageContent
