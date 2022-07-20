import { HeaderButton } from "components/Button/styles";
import SHeader from "components/Header/styles";
import { SearchInput } from "components/Input/styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

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
                />
                <HeaderButton>Search</HeaderButton>
            </div>
        </SHeader>
    );
};

export default Header;
