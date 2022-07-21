import styled from "styled-components";

const STodos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
`;

export default STodos;
