import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xYtcckMzGZTQvQ_CsLTtQRp98hdl32_KRUPyqBjvMw&s"
          alt=""
        />
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink >Edit</NavLink>
        </nav>
        <button>create</button>
      </div>
    </header>
    // arsen
  );
};

export default Header;
