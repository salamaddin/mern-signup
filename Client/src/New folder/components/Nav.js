import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
        <NavLink to="/home" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Salam</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
         
        </li>
        <li>
        <NavLink to="/login">
            Login
          </NavLink>
        </li>

      </ul>
      <Account />
    </nav>
  );
}
