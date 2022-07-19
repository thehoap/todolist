import React from "react";
import { NavLink } from "react-router-dom";
import { dataSidebar } from "../../constants/dataSidebar";
import SSidebar from "./styles";

const Sidebar = () => {
    return (
        <SSidebar className="sidebar">
            <nav className="nav">
                <ul>
                    {dataSidebar.map((navItem, index) => (
                        <li className="nav-item" key={index}>
                            <NavLink
                                to={navItem.link}
                                className={({ isActive }) =>
                                    `nav-link ${isActive && "active"}`
                                }
                            >
                                {navItem.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </SSidebar>
    );
};

export default Sidebar;
