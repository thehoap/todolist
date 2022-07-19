import React from "react";
import Radio from "components/Radio";
import { SRadioGroup } from "component/RadioGroup/styles";

const options = [
    {
        label: "New",
        name: "status",
        value: "new",
        id: "status-new",
    },
    {
        label: "Doing",
        name: "status",
        value: "doing",
        id: "status-doing",
    },
    {
        label: "Done",
        name: "status",
        value: "done",
        id: "status-done",
    },
];

const RadioGroup = () => {
    return (
        <SRadioGroup>
            {options.map((option) => (
                <Radio
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    name={option.name}
                    value={option.value}
                />
            ))}
        </SRadioGroup>
    );
};

export default RadioGroup;
