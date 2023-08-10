import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Lottie from "lottie-react";
import helloData from "../assets/hello1.json";
import "./navbar.css";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <nav className="navbar">
        <div className="header-left">
          <Link to="/">
            <h1>Code Everyday!</h1>
          </Link>
          <Lottie animationData={helloData} className="hello" />
        </div>
        <div className="header-right">
          {!user && (
            <div>
              <Link className="navbtn" to="/login">
                Login
              </Link>
              <Link className="navbtn" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
        <div className="header-middle">
          {user && (
            <div>
              <Link className="navbtn" to="/">
                Home
              </Link>
            </div>
          )}
          {user && (
            <div>
              <Link className="navbtn" to="/about">
                About
              </Link>
            </div>
          )}
        </div>
        <div className="header-right">
          {user && (
            <div>
              <span>Welcome {user.email}!</span>
              <button className="navbtn" onClick={handleClick}>
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
