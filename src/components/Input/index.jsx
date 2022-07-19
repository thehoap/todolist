import React from "react";
import { BasedInput } from "components/Input/styles";

const Input = ({ type, placeholder, name, id }) => {
    return (
        <BasedInput type={type} placeholder={placeholder} name={name} id={id} />
    );
};

export default Input;
