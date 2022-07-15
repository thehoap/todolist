import React from "react";
import Header from "../../components/Header";
import { BasedInput } from "../../components/Input/styles";
import Radio from "../../components/Radio";
import RadioGroup from "../../components/RadioGroup";
import Sidebar from "../../components/Sidebar";
import "./MainLayout.scss";

const MainLayout = ({ header, sidebar, main }) => {
    const headerElement = header ?? <Header />;
    const sidebarElement = sidebar ?? <Sidebar />;

    return (
        <div className="main-layout">
            <div className="main-layout__header">{headerElement}</div>
            <div className="main-layout__container">
                <div className="main-layout__sidebar">{sidebarElement}</div>
                {/* <div className="main-layout__main">{main}</div> */}
                <div className="main-layout__main">
                    <BasedInput
                        type="text"
                        placeholder="Enter your title"
                        name="title"
                        id="title"
                    />
                    <RadioGroup/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
