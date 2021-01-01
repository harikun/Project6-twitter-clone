import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Search from './Search'
import { faHome, faSearch, faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from './Notification';
import Message from './Message';
import Sidenav from './Sidenav/Sidenav';
import Lists from './Lists';
import Bookmarks from './Bookmarks';
import Profile from './Profile';



function App() {
  
  return (
    <Router>
      {/* sidenav */}
     
      {/* bottom nav */}
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
            <Link to="/notification">
              <FontAwesomeIcon 
                icon={faBell} 
                className="fa-lg" 
              />
            </Link>
          </li>
          <li className="nav-item list-none text-white mx-2">
            <Link to="/message">
              <FontAwesomeIcon
              icon={faEnvelope} 
              className="fa-lg"
              />
            </Link>
          </li>
        </footer> 
        </div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/sidenav">
            <Sidenav />
          </Route>
           <Route path="/message">
              <Message />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
