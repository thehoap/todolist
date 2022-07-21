import { InputRadio, LabelRadio, Option } from "components/Radio/styles";
import { SRadioGroup } from "components/RadioGroup/styles";

const options = [
    {
        label: "New",
        name: "status",
        value: "newtask",
        id: "status-new",
    },
    {
        label: "Doing",
        name: "status",
        value: "doingtask",
        id: "status-doing",
    },
    {
        label: "Done",
        name: "status",
        value: "donetask",
        id: "status-done",
    },
];

const RadioGroup = ({status, onChange}) => {
    return (
        <SRadioGroup>
            {options.map((option) => (
                <Option key={option.id}>
                    <InputRadio
                        checked={option.value === status}
                        name={option.name}
                        value={option.value}
                        id={option.id}
                        onChange={onChange}
                    />
                    <LabelRadio htmlFor={option.id}>{option.label}</LabelRadio>
                </Option>
            ))}
        </SRadioGroup>
    );
};

export default RadioGroup;
