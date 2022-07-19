import React from "react";

const MainRoute = ({ layout: Layout, component: Component }) => {
    return (
        <Layout>
            <Component />
        </Layout>
    );
};

export default MainRoute;
