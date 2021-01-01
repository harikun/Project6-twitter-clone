import React from 'react'
import {
  Link, Switch, Route, Router 
} from "react-router-dom";
import { faTimes, faCaretSquareDown, faUser, faListAlt, faBookmark, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bookmarks from '../Bookmarks';
import Lists from '../Lists';
import Profile from '../Profile';

function Sidenav() { 
  return (
    <Router>
    <div className="bg-black shadow w-64 absolute z-10 h-full ">
      <header className="flex justify-between h-12">
        <p className=" ml-4 font-bold text-white">Account Info</p>
        <Link to="/">
          <FontAwesomeIcon 
            icon={faTimes}
            className="fa-lg text-blue-600 mr-3"
          />
        </Link>
      </header>
      <div className="flex justify-between h-12 items-center">
        <img  className="rounded-full ml-3" width="49px" height="49px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="" />
          <FontAwesomeIcon 
            icon={faCaretSquareDown} 
            className="fa-lg text-sm text-gray-500 mr-6" 
          /> 
      </div>
      <div className="h-12 ml-4 mt-1">
        <p className="text-white font-bold">Cipto Suhari</p>
        <p className="text-sm text-gray-500">@hari_kun</p>
      </div>
      <div className="flex justify-between items-center text-white mx-4">
        <div className="flex items-center">
          <p className="font-bold text-white">300</p>
          <p className="text-sm text-gray-500 ml-1">Following</p>
        </div>
        <div className="flex items-center">
        <p className="font-bold text-white">177</p>
        <p className="text-sm text-gray-500 ml-1">Follower</p>
        </div>
      </div>
      {/* Link Navbar*/}
        <div className="flex items-center">
          <FontAwesomeIcon 
            icon={faUser}
            className="fa-sm text-gray-500 ml-4"
          />
          <Link to="/profile">
            <p className="block p-4 text-white border-purple hover:bg-grey-lighter ">Profile</p>
          </Link>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon 
            icon={faListAlt}
            className="fa-sm text-gray-500 ml-4"
          />
          <Link to="/lists">
            <p className="block p-4 text-white border-purple hover:bg-grey-lighter ">List</p>
          </Link>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon 
            icon={faBookmark}
            className="fa-sm text-gray-500 ml-4"
          />
          <Link to="/bookmarks">
            <p className="block p-4 text-white border-purple hover:bg-grey-lighter">Bookmark</p>
          </Link>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon 
            icon={faChartBar}
            className="fa-sm text-gray-500 ml-4"
          />
          <Link to="/analitycs">
            <p className="block p-4 text-white border-purple hover:bg-grey-lighter ">Analitycs</p>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      </Router>
      
  )
}

export default Sidenav
