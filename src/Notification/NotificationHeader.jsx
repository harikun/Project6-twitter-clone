import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NotificationHeader() {
  return (
    <div className="relative top-0 left-0 w-full">
     <header className="flex items-center h-12 bg-black">
        <img  className="rounded-full ml-3" width="30px" height="30px" src="https://pbs.twimg.com/profile_images/1241004721042624513/VWp25P7j_400x400.jpg" alt="" />
        <p className="text-lg text-white ml-4 font-bold">Notifications</p>
        <FontAwesomeIcon 
          icon={faCog} 
          className="fa-lg text-blue-900 ml-40" 
          spin
        />
    </header>
    </div>
  )
}

export default NotificationHeader
