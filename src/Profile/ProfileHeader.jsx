import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { faArrowLeft, faMapMarkerAlt, faBirthdayCake, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeContent from '../Home/HomeContent';
function ProfileHeader() {
  return (
    <Fragment>
    <div className="h-12 flex items-center bg-black">
      <Link to="/">
        <FontAwesomeIcon 
          icon={faArrowLeft}
          className="text-blue-700 fa-lg ml-3 font-medium"
        />
      </Link>
      <div className="ml-4">
        <p className="text-white font-bold">Cipto Suhari</p>
        <p className="text-xs text-gray-500">6,046 Tweets</p>
      </div>
    </div>
    <img src="https://pbs.twimg.com/profile_banners/549206229/1602428413/1500x500" alt="banner profile" />
    <div className="bg-black">
      <div className="flex items-center justify-between">
        <img className="rounded-full ml-4 mt-2"  width="78px" height="78px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="profile" />
        <div className="rounded-full py-1 px-6 text-white bg-black ring-1 ml-3 mx-3 border-blue-700">
              <p className="p-1 text-blue-700">Edit Profile</p>
        </div>
      </div>
      <p className="text-white font-bold ml-4">Cipto Suhari</p>
      <p className="text-sm text-gray-500 ml-4">@hari_kun</p>
      <p className="text-white ml-4">Front End Dev (React.js) | Tailwind</p>
      <div className="flex items-center">
        <FontAwesomeIcon 
          icon={faMapMarkerAlt}
          className="fa-xs ml-4 text-gray-500"
        />
        <p className="text-gray-500 text-sm ml-2">Bojonegoro, Indonesia</p>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon 
          icon={faBirthdayCake}
          className="fa-xs ml-4 text-gray-500 text-sm"
        />
        <p className="text-gray-500 text-sm ml-2">Born May 5, 1992</p>
        <FontAwesomeIcon 
          icon={faCalendarAlt}
          className=" text-xs text-gray-500 ml-4"
        />
        <p className="text-gray-500 text-sm ml-2">
        Joined April 2012
        </p>
      </div>
        <div className="flex items-center text-white mx-4">
          <div className="flex items-center">
            <p className="font-bold text-white">300</p>
            <p className="text-sm text-gray-500 ml-1">Following</p>
          </div>
          <div className="flex items-center ml-5">
            <p className="font-bold text-white">177</p>
            <p className="text-sm text-gray-500 ml-1">Follower</p>
          </div>
        </div>
    </div>
    <div className="bg-black flex">
      <p className="text-blue-700 font-semibold ml-4 p-4">Tweet</p>
      <p className="text-gray-500 font-semibold ml-3 p-4">Tweets & Replies</p>
      <p className="text-gray-500 font-semibold ml-3 p-4">Media</p>
    </div>
    <HomeContent />
    <HomeContent />
    </Fragment>
  )
}

export default ProfileHeader
