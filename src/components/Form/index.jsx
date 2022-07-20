import { BasedButton } from "components/Button/styles";
import { BasedInput } from "components/Input/styles";
import { objToTime } from "utils/helpers/dateConvert";
import { FormGroup, FormLabel, SForm } from "./styles";

const Form = ({ feature }) => {
    const isAddFeature = feature === "add";

    return (
        <SForm>
            <FormGroup>
                <FormLabel htmlFor="title">Title</FormLabel>
                <BasedInput
                    id="title"
                    placeholder="Enter the task's title"
                    width={"300px"}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="creator">Creator</FormLabel>
                <BasedInput
                    id="creator"
                    placeholder="Enter the name of creator"
                    width={"300px"}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="createAt">Create at</FormLabel>
                <BasedInput
                    id="createAt"
                    placeholder={objToTime(new Date())}
                    width={"300px"}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="description">Description</FormLabel>
                <BasedInput
                    id="description"
                    placeholder="Description the task"
                    width={"300px"}
                />
            </FormGroup>
            <FormGroup>
                <BasedButton>Save</BasedButton>
            </FormGroup>
        </SForm>
    );
};

export default Form;
