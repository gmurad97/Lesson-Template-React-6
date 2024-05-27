import Topbar from "../topbar/Topbar.jsx";
import Navbar from "../navbar/Navbar.jsx";
import CryptocurrencySection from "../cryptocurrency_section/CryptocurrencySection.jsx";

const App = () => {
    return (
        <div className="app">
            <header className="header">
                <Topbar discountText="Exclusive discount: 10% off all fresh produce!" isCryptoStats={true} />
                <Navbar />
            </header>
            <main className="main">
                <CryptocurrencySection />
            </main>

            <footer className="footer">

            </footer>
        </div>
    );
}

export default App;