import React, {useState} from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

import "./MainNavigation.css";


const MainNavigation = props =>{
    const [isOpen, setDrawerOpen]  = useState(false);

    const  drawerOpen = () => {
        setDrawerOpen(true)
    }
    const drawerClose = () => {
        setDrawerOpen(false);
    }

    return <React.Fragment>
        {isOpen && <SideDrawer onClick = {drawerClose}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>}
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={drawerOpen}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to ="/">Reviews</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
            
        </MainHeader>
    </React.Fragment>
}

export default MainNavigation;