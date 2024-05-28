import classes from "./Navbar.module.css";
import Logo from "./components/logo/Logo.jsx";
import Menu from "./components/menu/Menu.jsx";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <Logo image="assets/logo_dark.png" />
            <Menu />
        </nav>
    );
}

export default Navbar;