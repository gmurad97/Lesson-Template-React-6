import { useEffect, useState } from "react";
import classes from "./CryptocurrencySection.module.css";
import Binance from "../../api/binance.js";

const CryptocurrencySection = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);

    useEffect(() => {
        const fetchingCryptoData = async () => {
            const list = await Binance.getCryptoData();
            setCryptocurrency(list);
            console.log(list)
        }
        fetchingCryptoData();
    }, []);


    return (
        <section className="cryptocurrency">
            <div className="cryptocurrencyHeader">
                <div className="cryptocurrencyContainer">
                    <h1 className="cryptocurrencyTitle"></h1>
                </div>
            </div>
            <div className="cryptocurrencyBody">
                <div className="cryptocurrencyContainer">
                    <table className="cryptocurrencyTable">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left" }}>Name</th>
                                <th style={{ textAlign: "left" }}>Name1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*TEST CODE*/}
                            {
                                cryptocurrency.map((currency, index) => (
                                    currency.symbol.endsWith("USDT") && (
                                        <tr>
                                            <td>{currency.symbol}</td>
                                            <td>{currency.price}</td>
                                        </tr>
                                    )
                                ))


                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Name1</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default CryptocurrencySection;