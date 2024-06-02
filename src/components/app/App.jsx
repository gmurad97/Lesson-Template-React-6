import { Routes, Route } from "react-router-dom";
import MainLayout from "../../pages/layouts/MainLayout.jsx";
import HomePage from "../../pages/HomePage.jsx";
import CryptocurrencyPage from "../../pages/CryptocurrencyPage.jsx";
import ContactsPage from "../../pages/ContactsPage.jsx";
import AboutPage from "../../pages/AboutPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="cryptocurrency" element={<CryptocurrencyPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;