import Header from "components/Header";
import Sidebar from "components/Sidebar";
import "layouts/MainLayout/MainLayout.scss";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <div className="main-layout__header">
                <Header />
            </div>
            <div className="main-layout__container">
                <div className="main-layout__sidebar">
                    <Sidebar />
                </div>
                <div className="main-layout__main">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
