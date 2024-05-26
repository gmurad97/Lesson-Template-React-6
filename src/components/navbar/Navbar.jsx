import "./Navbar.css";
import Logo from "./components/logo/Logo.jsx";
import Menu from "./components/menu/Menu.jsx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo image="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png" />
            <Menu />
        </nav>
    );
}

export default Navbar;