import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const BasedInput = styled.input`
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: ${COLOR.TEXT};
    padding: 8px 4px;
    border-bottom: 1px solid ${COLOR.TEXT};
`;

export const SearchInput = styled(BasedInput)`
    flex-grow: 1;
    background-color: transparent;
    font-size: 24px;
    padding: 12px 20px;
    border: 2px solid ${COLOR.SECONDARY};
    border-radius: 10px 0 0 10px;
`;
