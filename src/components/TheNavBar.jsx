import '../assets/styles/navbar.css'
import {Link} from "react-router-dom";
function TheNavBar() {
  const isLoggedIn = localStorage.getItem("token");
  return <div className="app-navbar">
    <ul>
      <li className="brand">
        <Link to="/">Daily Planner App</Link>
      </li>
      <li className="nav-item">
        {isLoggedIn ?
          <Link to="#">Log out</Link>
          :
          <Link to="/auth/login">Login</Link> }

      </li>
    </ul>
  </div>
}

export default TheNavBar;