import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.menuItem}>
                    <NavLink className={classes.menuLink} to="/home">Home</NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink className={classes.menuLink} to="/cryptocurrency">Cryptocurrency</NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink className={classes.menuLink} to="/products">Products</NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink className={classes.menuLink} to="/contacts">Contacts</NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink className={classes.menuLink} to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;