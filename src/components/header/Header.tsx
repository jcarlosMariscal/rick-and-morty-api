import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src="/assets/ram.png" className="header__logo" alt="ram-logo" />
      </NavLink>
      <div className="header__navs">
        <NavLink to="favorites" className="nav-link">
          Favoritos
        </NavLink>
      </div>
    </div>
  );
};
