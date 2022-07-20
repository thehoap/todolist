import styled from "styled-components";

export const SForm = styled.form`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 1rem;

    &:last-child {
        margin-top: 2rem;
    }
`;

export const FormLabel = styled.label`
    display: inline-block;
    min-width: 100px;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;
