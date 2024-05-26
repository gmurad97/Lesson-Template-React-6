import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link" href="">Home</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="">Cryptocurrency</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="">Products</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="">Contacts</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="">About</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;