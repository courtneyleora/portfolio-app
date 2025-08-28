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
      <div className="nav-connect">Connect with me!</div>
    </div>
  );
};

export default Navbar;
