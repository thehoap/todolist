import { HeaderButton } from "components/Button/styles";
import SHeader from "components/Header/styles";
import { SearchInput } from "components/Input/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import filterSlice from "redux/slices/filterSlice";
import { useLazyGetTodosQuery } from "services/todoApi";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");
    const [getTodos, { data: todos }] = useLazyGetTodosQuery();
    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        dispatch(filterSlice.actions.searchText(e.target.value));
    };

    return (
        <SHeader className="header">
            <HeaderButton
                onClick={() => {
                    navigate("/addtask");
                }}
            >
                Create New Task
            </HeaderButton>
            <div className="header-search">
                <SearchInput
                    placeholder="Type something to search"
                    type="text"
                    value={searchText}
                    onChange={handleSearchText}
                />
                <HeaderButton>Search</HeaderButton>
            </div>
        </SHeader>
    );
};

export default Header;
