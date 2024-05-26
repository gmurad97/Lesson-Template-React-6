import Topbar from "../topbar/Topbar.jsx";
import Navbar from "../navbar/Navbar.jsx";

const App = () => {
    return (
        <div className="app">
            <header className="header">
                <Topbar discountText="Exclusive discount: 10% off all fresh produce!" isCryptoStats={true} />
                <Navbar />
            </header>
            <main className="main">

            </main>

            <footer className="footer">

            </footer>
        </div>
    );
}

export default App;