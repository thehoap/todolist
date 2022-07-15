import styled from "styled-components";
import * as COLOR from "../../constants/color";

const SSidebar = styled.aside`
    background-color: ${COLOR.SIDEBAR};
    height: 100vh;

    & .nav-link {
        text-align: center;
        color: ${COLOR.SECONDARY};
        padding: 20px 12px;
        font-size: 24px;
        font-weight: 400;
        border-bottom: 2px solid ${COLOR.SECONDARY};
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export default SSidebar;