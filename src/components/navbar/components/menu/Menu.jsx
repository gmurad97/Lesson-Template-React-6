import classes from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink} href="/#">Home</a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink} href="/#">Cryptocurrency</a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink} href="/#">Products</a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink} href="/#">Contacts</a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink} href="/#">About</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;