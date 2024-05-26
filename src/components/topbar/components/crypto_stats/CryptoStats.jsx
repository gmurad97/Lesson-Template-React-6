import { useEffect, useState } from "react";
import styles from "./CryptoStats.module.css";
import Binance from "../../../../api/binance.js";

const CryptoStats = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const cryptoData = async () => {
            const cryptoStats = await Binance.getCryptoData(`["BTCUSDT","ETHUSDT","BNBUSDT"]`);
            setCoins(cryptoStats);
        }

        cryptoData();

        const syncInterval = setInterval(() => {
            cryptoData();
        }, 8192);

        return (() => {
            clearInterval(syncInterval);
        })
    }, []);

    return (
        <div className={styles.cryptoStatsBlock}>
            {coins.length ?
                coins.map((coin, index) => (
                    <div className="cryptoStatsElement" key={index}>
                        <h1 className="cryptoStatsCoin">
                            {coin.symbol.replace('USDT', '')}:
                            <span className="cryptoStatsCoinPrice">
                                ${parseFloat(coin.price).toFixed(2)}
                            </span>
                        </h1>
                    </div>
                ))
                : (<>
{/*                     <div className="crypto-stats__element">
                        <h1 className="crypto-stats__coin">
                            BTC: <span className="crypto-stats__coin-price">$...</span>
                        </h1>
                    </div>
                    <div className="crypto-stats__element">
                        <h1 className="crypto-stats__coin">
                            ETH: <span className="crypto-stats__coin-price">$...</span>
                        </h1>
                    </div>
                    <div className="crypto-stats__element">
                        <h1 className="crypto-stats__coin">
                            BNB: <span className="crypto-stats__coin-price">$...</span>
                        </h1>
                    </div> */}
                </>)
            }
        </div>
    );
}

export default CryptoStats;