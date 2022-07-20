import STodo, { STodoText } from "components/Todo/styles";
import { COLOR_STATUS } from "constants/color";

const statusToText = (status) => {
    switch (status) {
        case "newtask":
            return "New";
        case "doingtask":
            return "Doing";
        case "donetask":
            return "Done";
        default:
            return "";
    }
};

const Todo = ({ todo }) => {
    return (
        <STodo>
            <div className="todo-top">
                <STodoText lineClamp={1} fontWeight={700}>
                    Title: {todo.title}
                </STodoText>
                <STodoText>Creator: {todo.creator}</STodoText>
                <STodoText fontWeight={700} color={COLOR_STATUS[todo.status]}>
                    Status: <b>{statusToText(todo.status)}</b>
                </STodoText>
            </div>
            <hr />
            <div className="todo-bottom">
                <STodoText>
                    <STodoText fontWeight={700}>Description:</STodoText>
                    <STodoText lineClamp={2}>{todo.title}</STodoText>
                </STodoText>
            </div>
        </STodo>
    );
};

export default Todo;
