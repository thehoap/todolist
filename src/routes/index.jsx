import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from "../components/Input";
import { PATH } from "../constants/path";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MainRoute from "./MainRoute";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={PATH.INDEX}
                    element={
                        <MainRoute layout={MainLayout} component={Fragment} />
                    }
                />
                <Route
                    path={PATH.NEWTASK}
                    element={
                        <MainRoute layout={MainLayout} component={Fragment} />
                    }
                />
                <Route
                    path={PATH.DOINGTASK}
                    element={
                        <MainRoute layout={MainLayout} component={Fragment} />
                    }
                />
                <Route
                    path={PATH.DONETASK}
                    element={
                        <MainRoute layout={MainLayout} component={Fragment} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
