import React from "react";
import { BasedButton } from "components/Button/styles";

const Button = ({ children, type }) => {
    return <BasedButton type={type}>{children}</BasedButton>;
};

export default Button;
