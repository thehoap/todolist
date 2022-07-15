import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const Option = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 24px;
    padding: 0 28px;
`;

export const InputRadio = styled.input.attrs((props) => ({ type: "radio" }))`
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 100rem;
        border: 2px solid ${COLOR.TEXT};
    }

    &:after {
        visibility: hidden;
    }
    &:checked:after {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 100rem;
        border: 2px solid ${COLOR.TEXT};
        background-color: ${COLOR.PRIMARY};
    }

    & > * {
        color: ${COLOR.PRIMARY};
    }
`;

export const LabelRadio = styled.label`
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.checked ? `${COLOR.PRIMARY}` : `${COLOR.TEXT}`)};
`;
