import { Skeleton } from "antd";
import STodo from "components/Todo/styles";

export const SkeletonTodo = () => {
    return (
        <STodo>
            <div className="todo-top">
                <Skeleton active round={true} paragraph={false} />
                <Skeleton active round={true} paragraph={false} />
                <Skeleton active round={true} paragraph={false} />
            </div>
            <div className="todo-bottom">
                <Skeleton active round={true} paragraph={{ rows: 1 }} title={false} />
                <Skeleton active round={true} paragraph={false} />
            </div>
        </STodo>
    );
};
