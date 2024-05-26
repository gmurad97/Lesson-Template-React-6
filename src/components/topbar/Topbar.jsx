import styles from "./Topbar.module.css";
import CryptoStats from "./components/crypto_stats/CryptoStats.jsx";

const Topbar = ({ discountText, isCryptoStats }) => {
    console.log(styles)
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarRow}>
                <h1 className={styles.topbarTitle}>{discountText}</h1>
            </div>
            {
                isCryptoStats &&
                <div className={styles.topbarRow}>
                    <CryptoStats />
                </div>
            }
        </div>
    );
}

export default Topbar;