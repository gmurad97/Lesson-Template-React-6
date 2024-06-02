import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
    const linkActive = ({ isActive }) => isActive ? `${classes.menuLink} ${classes.active}` : `${classes.menuLink}`;
    return (
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.menuItem}>
                    <NavLink
                        className={linkActive}
                        to="/home">
                        Home
                    </NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink
                        className={linkActive}
                        to="/cryptocurrency">
                        Cryptocurrency
                    </NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink
                        className={linkActive}
                        to="/contacts">
                        Contacts
                    </NavLink>
                </li>
                <li className={classes.menuItem}>
                    <NavLink
                        className={linkActive}
                        to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;