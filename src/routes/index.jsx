import Form from "components/Form";
import Todos from "components/Todos";
import { PATH } from "constants/path";
import MainLayout from "layouts/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "routes/MainRoute";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={PATH.INDEX}
                    element={
                        <MainRoute layout={MainLayout} component={Todos} />
                    }
                />
                <Route
                    path={PATH.NEWTASK}
                    element={
                        <MainRoute layout={MainLayout} component={Todos} />
                    }
                />
                <Route
                    path={PATH.DOINGTASK}
                    element={
                        <MainRoute layout={MainLayout} component={Todos} />
                    }
                />
                <Route
                    path={PATH.DONETASK}
                    element={
                        <MainRoute layout={MainLayout} component={Todos} />
                    }
                />
                <Route
                    path={PATH.ADDTASK}
                    element={<MainRoute layout={MainLayout} component={Form} />}
                />
                <Route
                    path={PATH.DETAIL_TASK}
                    element={<MainRoute layout={MainLayout} component={Form} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
