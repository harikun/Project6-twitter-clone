import React, { Component } from 'react'
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class SearchHeader extends Component {
  render() {
    return (
    <div className="fixed top-0 left-0 w-full">
      <header className="flex items-center h-12 bg-black">
         <img  className="rounded-full ml-3" width="30px" height="30px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="" />
         <div className="rounded-full py-1 px-6 text-white bg-gray-700 ml-3 w-full">
            <div className="flex items-center justify-between text-gray-600">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="fa-lg" 
              />
              <p>Search Twitter</p>
            </div>
         </div>
         <div className="text-blue-900 mx-2">
         <FontAwesomeIcon 
            icon={faCog} 
            className="fa-lg" 
            spin
          />
         </div>
     </header>
     </div>
    )
  }
}

export default SearchHeader
