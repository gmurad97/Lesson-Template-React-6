import "./App.css";
import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";
import Footer from "../footer/Footer.jsx";
import Topbar from "../header/components/topbar/Topbar.jsx";
import Navbar from "../header/components/navbar/Navbar.jsx";

const App = () => {
    return (
        <div className="app">
            <Header>
                <Topbar discountText="Exclusive discount: 10% off all fresh produce!" isCryptoStats={true} />
                <Navbar />
            </Header>

            <Main>

            </Main>

            <Footer>

            </Footer>
        </div>
    );
}

export default App;