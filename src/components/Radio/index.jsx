import React from "react";
import { InputRadio, LabelRadio, Option } from "components/Radio/styles";

const Radio = ({ label, checked, name, value, id }) => {
    const handleRadioChange = (e) => {
        console.log(e.target.value, e.target.checked);
    };

    return (
        <Option>
            <InputRadio
                checked={checked}
                name={name}
                value={value}
                id={id}
                onChange={handleRadioChange}
            />
            <LabelRadio htmlFor={id} checked={checked}>
                {label}
            </LabelRadio>
        </Option>
    );
};

export default Radio;
