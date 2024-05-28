import classes from "./Header.module.css";

const Header = ({ children }) => {
    return (
        <header className={classes.header}>
            {children}
        </header>
    );
}

export default Header;