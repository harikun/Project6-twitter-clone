import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { faArrowLeft, faCaretSquareDown, faListAlt, faBug, faThumbtack, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ListsHeader() {
  return (
    <Fragment>
      <div className="flex items-center bg-black h-12">
        <Link to="/">
          <FontAwesomeIcon 
            icon={faArrowLeft}
            className="text-blue-500 font-medium fa-lg ml-4"
          />
        </Link>
        <div>
          <p className="font-bold text-white text-lg ml-6">Lists</p>
          <p className="text-xs text-gray-500 ml-6">@hari_kun</p>
        </div>
        <FontAwesomeIcon 
          icon={faCaretSquareDown} 
          className="fa-lg text-sm float-right ml-52 text-blue-600 "  
        />
      </div>
      <div className="h-12 bg-black flex  items-center">
        <p className="text-white font-bold ml-4">Pinned</p>
      </div>
      <div className="h-28 bg-black flex items-center justify-center">
        <p className="text-sm text-gray-500 p-6">Nothing to see here yet — pin up to five of your favorite Lists to access them quickly.</p>
      </div>
      <div className="bg-gray-700 h-2.5 block"> </div>
      <div className="h-12 bg-black flex items-center justify-items-center">
        <p className="text-white font-bold ml-4">Your Lists</p>
      </div>
      <div className="bg-black h-16 flex items-center">
        <FontAwesomeIcon 
          icon={faListAlt}
          className="text-gray-600 fa-lg ml-4"
        />
        <div className="ml-3">
          <p className="text-white font-bold">Lady-hosted podcasts</p>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBug}
              className="fa-xs text-gray-300"
             />
            <p className="text-white text-xs font-bold ml-2">Ladybug Podcast</p>
            <p className="text-gray-600 text-xs ml-2">@LadybugPodcast</p>
          </div>
        </div>
        <FontAwesomeIcon 
          icon={faThumbtack}
          className="fa-lg text-blue-600 ml-8"
        />
      </div>
      <div className="bg-black h-16 flex items-center">
        <FontAwesomeIcon 
          icon={faListAlt}
          className="text-gray-600 fa-lg ml-4"
        />
        <div className="ml-3">
          <p className="text-white font-bold">temen nongkrong</p>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="fa-xs text-gray-300"
             />
            <p className="text-white text-xs font-bold ml-2">Cipto Suhari</p>
            <p className="text-gray-600 text-xs ml-2">@hari_kun</p>
          </div>
        </div>
        <FontAwesomeIcon 
          icon={faThumbtack}
          className="fa-lg text-blue-600 ml-24"
        />
      </div>
      <div className="bg-black h-screen block w-full"> </div>
    </Fragment>
  )
}

export default ListsHeader
