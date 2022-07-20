import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "constants/path";
import MainLayout from "layouts/MainLayout/MainLayout";
import MainRoute from "routes/MainRoute";
import Todos from "components/Todos";

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
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
