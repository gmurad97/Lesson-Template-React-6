import classes from "./Topbar.module.css";
import CryptoStats from "./components/crypto_stats/CryptoStats.jsx";

const Topbar = ({ discountText, isCryptoStats }) => {
    return (
        <div className={classes.topbar}>
            <div className={classes.topbarRow}>
                <h1 className={classes.topbarTitle}>{discountText}</h1>
            </div>
            {
                isCryptoStats &&
                <div className={classes.topbarRow}>
                    <CryptoStats targetCoins='["BTCUSDT","ETHUSDT","BNBUSDT"]' />
                </div>
            }
        </div>
    );
}

export default Topbar;