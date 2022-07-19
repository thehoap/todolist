import * as COLOR from "constants/color";
import styled from "styled-components";

const STodos = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;

    & > div {
        display: inline-block;
        height: 150px;
        border-radius: 10px;
        border: 2px solid ${COLOR.PRIMARY};
    }
`;

export default STodos;
