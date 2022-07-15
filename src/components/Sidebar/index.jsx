import React from "react";
import SSidebar from "./styles";

const Sidebar = () => {
    return (
        <SSidebar className="sidebar">
            <nav className="nav">
                <ul>
                    <li className="nav-link">All Task</li>
                    <li className="nav-link">New Task</li>
                    <li className="nav-link">Doing Task</li>
                    <li className="nav-link">Done Task</li>
                </ul>
            </nav>
        </SSidebar>
    );
};

export default Sidebar;
