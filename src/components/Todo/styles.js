import * as COLOR from "constants/color";
import styled from "styled-components";

const border = `2px solid ${COLOR.PRIMARY}`;

const STodo = styled.div`
    padding: 12px;
    display: inline-block;
    height: 160px;
    border-radius: 10px;
    border: ${border};
    cursor: pointer;
    
    & > hr {
        height: 2px;
        background-color: ${COLOR.PRIMARY};
        border: 0;
        outline: none;
    }
`;

export default STodo;

export const STodoText = styled.span`
    font-weight: ${(props) => props.fontWeight || 400};
    line-height: 1.4;
    color: ${(props) => props.color || "#000"};
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => props.lineClamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
