import styled from "styled-components";
import * as COLOR from "constants/color";

const SSidebar = styled.aside`
    background-color: ${COLOR.SIDEBAR};
    height: 100%;

    & .nav-link {
        display: block;
        text-decoration: none;
        text-align: center;
        color: ${COLOR.SECONDARY};
        padding: 20px 12px;
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.2s linear;
        border-bottom: 2px solid ${COLOR.SECONDARY};

        &:hover {
            opacity: 0.8;
        }

        &.active {
            color: ${COLOR.PRIMARY};
        }
    }
`;

export default SSidebar;
