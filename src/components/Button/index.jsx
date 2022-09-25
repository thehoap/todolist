import React from "react";
import { BasedButton } from "components/Button/styles";

<<<<<<< HEAD
const Button = ({ children, type }) => {
    return <BasedButton type={type}>{children}</BasedButton>;
=======
const Button = ({ children, type, onClick }) => {
    return (
        <BasedButton type={type} onClick={onClick}>
            {children}
        </BasedButton>
    );
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
};

export default Button;
