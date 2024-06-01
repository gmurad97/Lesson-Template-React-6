import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Topbar from "../../components/header/components/topbar/Topbar.jsx";
import Navbar from "../../components/header/components/navbar/Navbar.jsx";
import Main from "../../components/main/Main.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Copyright from "../../components/footer/components/copyright/Copyright.jsx";


const MainLayout = () => {
    return (
        <>
            <Header>
                <Topbar discountText="Exclusive discount: 10% off all fresh produce!" isCryptoStats={true} />
                <Navbar />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <Copyright />

            </Footer>
        </>
    );
}

export default MainLayout;