import React from "react";
import { HeaderButton } from "../Button/styles";
import { SearchInput } from "../Input/styles";
import SHeader from "./styles";

const Header = () => {
    return (
        <SHeader className="header">
            <HeaderButton>Create New Task</HeaderButton>
            <div className="header-search">
                <SearchInput
                    placeholder="Type something to search"
                    type="text"
                />
                <HeaderButton>Search</HeaderButton>
            </div>
        </SHeader>
    );
};

export default Header;
