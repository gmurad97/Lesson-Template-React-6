import { useEffect, useState } from "react";
import classes from "./CryptoStats.module.css";
import Binance from "../../../../../../api/binance.js";

const CryptoStats = ({ targetCoins }) => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const cryptoData = async () => {
            const cryptoStats = await Binance.getCryptoData(targetCoins);
            setCoins(cryptoStats);
        }

        cryptoData();

        const syncInterval = setInterval(() => {
            cryptoData();
        }, 10240);

        return (() => {
            clearInterval(syncInterval);
        })
    }, []);

    return (
        <div className={classes.cryptoStatsBlock}>
            {coins.length ?
                coins.map((coin, index) => (
                    <div className={classes.cryptoStatsElement} key={index}>
                        <h1 className={classes.cryptoStatsCoin}>
                            {coin.symbol.replace('USDT', '')}:
                            <span className={classes.cryptoStatsCoinPrice}>
                                ${parseFloat(coin.price).toFixed(2)}
                            </span>
                        </h1>
                    </div>
                ))
                : (
                    <div className={classes.cryptoStatsElement}>
                        <h1 className={classes.cryptoStatsCoin}>
                            Loading...
                        </h1>
                    </div>
                )
            }
        </div>
    );
}

export default CryptoStats;