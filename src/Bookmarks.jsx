import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { faArrowLeft, faCaretSquareDown, faComment, faRetweet, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Bookmarks() {
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
          <p className="text-white font-bold">Bookmark</p>
          <p className="text-xs text-gray-500">@hari_kun</p>
        </div>
        <FontAwesomeIcon 
          icon={faCaretSquareDown}
          className="fa-lg text-blue-600 ml-48"
        />
      </div>
      {/* konten */}
      <div className="h-28 w-full flex items-center bg-black">
        <div>
          <img className="rounded-full ml-3" width="49px" height="49px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="foto status"/>
        </div>
        <div className="ml-2">
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="flex items-center justify-around mt-2">
              <p className="text-white font-bold">Cipto Suhari</p>
              <p className="text-gray-500 text-sm">@hari_kun</p>
              <p className="text-gray-500 text-sm">15h</p>
              <FontAwesomeIcon 
                icon={faCaretSquareDown} 
                className="fa-lg text-sm text-gray-500" 
              />
            </div>
            <div className="ml-5">
              <p className="text-white text-left">inilah alasan usiaku lebih tua satu tahun dari usia anak2 diangkatanku.</p>
            </div>
            <div className="flex items-center justify-around mb-2">
              <FontAwesomeIcon 
                icon={faComment} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faRetweet} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faHeart} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faShareAlt} 
                className="fa-lg text-sm text-gray-500" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-28 w-full flex items-center bg-black">
        <div>
          <img className="rounded-full ml-3" width="49px" height="49px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="foto status"/>
        </div>
        <div className="ml-2">
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="flex items-center justify-around mt-2">
              <p className="text-white font-bold">Cipto Suhari</p>
              <p className="text-gray-500 text-sm">@hari_kun</p>
              <p className="text-gray-500 text-sm">15h</p>
              <FontAwesomeIcon 
                icon={faCaretSquareDown} 
                className="fa-lg text-sm text-gray-500" 
              />
            </div>
            <div className="ml-5">
              <p className="text-white text-left"> Apply for the job even if you don't cross all of them!</p>
            </div>
            <div className="flex items-center justify-around mb-2">
              <FontAwesomeIcon 
                icon={faComment} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faRetweet} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faHeart} 
                className="fa-lg text-sm text-gray-500" 
              />
              <FontAwesomeIcon 
                icon={faShareAlt} 
                className="fa-lg text-sm text-gray-500" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-black"></div>
    </Fragment>
  )
}

export default Bookmarks
