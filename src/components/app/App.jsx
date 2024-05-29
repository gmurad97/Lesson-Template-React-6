import "./App.css";
import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";
import Footer from "../footer/Footer.jsx";
import Topbar from "../header/components/topbar/Topbar.jsx";
import Navbar from "../header/components/navbar/Navbar.jsx";
import Section from "../main/components/section/Section.jsx";


import Cryptocurrency from "../main/components/cryptocurrency/Cryptocurrency.jsx";

const App = () => {
    return (
        <div className="app">
            <Header>
                <Topbar discountText="Exclusive discount: 10% off all fresh produce!" isCryptoStats={true} />
                <Navbar />
            </Header>

            <Main>
                <Section sectionTitle="Cryptocurrency List">
                    <Cryptocurrency />
                </Section>






            </Main>

            <Footer>
                gmurad97 ^_^
            </Footer>
        </div>
    );
}

export default App;