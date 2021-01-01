import React, { Component } from 'react'
import {  BrowserRouter as  Link} from "react-router-dom";
import { faHome, faSearch, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
        <div className="absolute bottom-0 w-full">
          <footer className="flex items-center justify-between h-12 bg-black ">
          <li className="nav-item list-none text-white mx-2">
            <Link to="/">
              <FontAwesomeIcon 
                icon={faHome} 
                className="fa-lg" 
              />
            </Link>
          </li>
          <li className="nav-item list-none text-white mx-2">
            <Link to="/search">
              <FontAwesomeIcon
               icon={faSearch}
               className="fa-lg"
               />
            </Link>
          </li>
          <li className="nav-item list-none text-white mx-2">
            <Link to="/">
              <FontAwesomeIcon 
                icon={faBell} 
                className="fa-lg" 
              />
            </Link>
          </li>
          <li className="nav-item list-none text-white mx-2">
            <Link to="/">
              <FontAwesomeIcon
              icon={faEnvelope} 
              className="fa-lg"
              />
            </Link>
          </li>
        </footer> 
        </div>
    )
  }
}

export default Footer
