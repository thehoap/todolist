import styled from "styled-components";
import * as COLOR from "constants/color";

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${COLOR.PRIMARY};
    padding: 10px;

    & .header-search {
        max-width: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }
`;

export default SHeader;
