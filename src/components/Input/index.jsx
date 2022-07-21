import { BasedInput } from "components/Input/styles";

const Input = ({
    type,
    placeholder,
    name,
    id,
    value,
    onChange,
    disabled,
    width,
}) => {
    return (
        <BasedInput
            type={type || "text"}
            placeholder={placeholder}
            name={name}
            id={id}
            width={width}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default Input;
