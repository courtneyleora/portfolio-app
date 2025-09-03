import "./Navbar.css/";
import logo from "../../assets/lgt_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="nav-connect">
        <span>Let's Connect</span>
        <span className="bubble-layer bubble-1"></span>
        <span className="bubble-layer bubble-2"></span>
        <span className="bubble-layer bubble-3"></span>
        <span className="bubble-layer bubble-4"></span>
        <span className="bubble-layer bubble-5"></span>
        <span className="bubble-layer bubble-6"></span>
        <span className="bubble-layer bubble-7"></span>
      </button>
    </div>
  );
};

export default Navbar;
