import React from "react";
import { BasedButton } from "components/Button/styles";

const Button = ({ children, type, onClick }) => {
    return (
        <BasedButton type={type} onClick={onClick}>
            {children}
        </BasedButton>
    );
};

export default Button;
