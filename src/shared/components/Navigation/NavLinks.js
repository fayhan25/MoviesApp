import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = props =>{
    return <ul className="nav-links">
        <li>
            <NavLink to = "/">Movie Critics</NavLink>
        </li>
        <li>
            <NavLink to = "/u1/movies">My Reviews</NavLink>
        </li>
        <li>
            <NavLink to = "/movies/new">Add Review</NavLink>
        </li>
        <li>
            <NavLink to = "/auth">Sign In</NavLink>
        </li>
    </ul>
}

export default NavLinks;