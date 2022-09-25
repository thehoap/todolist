import styled from "styled-components";
import * as COLOR from "constants/color";

export const BasedButton = styled.button`
    display: inline-block;
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.SECONDARY};
    font-size: 24px;
    font-weight: 400;
    padding: 4px 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2 ease;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const HeaderButton = styled(BasedButton)`
    border: 2px solid ${COLOR.SECONDARY};
    padding: 15px 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;
