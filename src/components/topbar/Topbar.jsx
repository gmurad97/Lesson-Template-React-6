import styles from "./Topbar.module.css";

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div className="topbar__row">
                <h1 className="topbar__title">kturoy Text BdishdsUHUJHJhjkhjdhf sdf dsfd!</h1>
            </div>
            <div className="topbar__row">
                <div className="topbar__crypto-stats">
                    <h1 className="coin_name">
                        BTC: <span className="trade">$99,999</span>
                    </h1>
                    <h1 className="coin_name">
                        BTC: <span className="trade">$99,999</span>
                    </h1>
                    <h1 className="coin_name">
                        BTC: <span className="trade">$99,999</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Topbar;