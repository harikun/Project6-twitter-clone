import React, { Component } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SearchField extends Component {
  render() {
    return (
      <div className=" bg-black mt-12">
        <div className="rounded-full px-6 text-white bg-gray-700 mx-3">
            <div className="flex items-center justify-between text-gray-600 p-1">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="fa-lg" 
              />
              <p>Search for people or group</p>
            </div>
         </div>
      </div>
    )
  }
}

export default SearchField
