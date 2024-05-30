import classes from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.menuItem}>
                    {/* <a className={classes.menuLink} href="/#">Home</a> */}
                    <NavLink className={classes.menuLink} to="/home">Home</NavLink>
                </li>
                <li className={classes.menuItem}>
                    {/* <a className={classes.menuLink} href="/#">Cryptocurrency</a> */}
                    <NavLink className={classes.menuLink} to="/cryptocurrency">Cryptocurrency</NavLink>
                </li>
                <li className={classes.menuItem}>
                    {/* <a className={classes.menuLink} href="/#">Products</a> */}
                    <NavLink className={classes.menuLink} to="/products">Products</NavLink>
                </li>
                <li className={classes.menuItem}>
                    {/* <a className={classes.menuLink} href="/#">Contacts</a> */}
                    <NavLink className={classes.menuLink} to="/contacts">Contacts</NavLink>
                </li>
                <li className={classes.menuItem}>
                    {/* <a className={classes.menuLink} href="/#">About</a> */}
                    <NavLink className={classes.menuLink} to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;