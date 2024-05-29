import { useEffect, useState, useRef } from "react";
import classes from "./Cryptocurrency.module.css";
import Binance from "../../../../api/binance";

const Cryptocurrency = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 100;
    const previousData = useRef([]);

    useEffect(() => {
        const fetchingCryptoData = async () => {
            const list = await Binance.getCryptoData();
            setCryptocurrency(list);
            previousData.current = list;
            console.log(list);
        };

        fetchingCryptoData();

        const intervalId = setInterval(async () => {
            const list = await Binance.getCryptoData();
            setCryptocurrency(list);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredCryptocurrency = cryptocurrency.filter(cryptoItem => cryptoItem.symbol.includes("USDT"));
    const totalPages = Math.ceil(filteredCryptocurrency.length / itemsPerPage);
    const currentCryptocurrency = filteredCryptocurrency.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const getRowClass = (symbol, currentPrice) => {
        const previousPrice = previousData.current.find(item => item.symbol === symbol)?.price;

        if (previousPrice !== undefined) {
            if (currentPrice > previousPrice) return classes.priceUp;
            if (currentPrice < previousPrice) return classes.priceDown;
        }
        return "";
    };

    return (
        <div className={classes.cryptocurrencyBlock}>
            <table className={classes.cryptocurrencyTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Символ</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCryptocurrency.map((cryptoItem, index) => (
                        <tr key={index} className={getRowClass(cryptoItem.symbol, cryptoItem.price)}>
                            <td>{index + (currentPage - 1) * itemsPerPage}</td>
                            <td>{cryptoItem.symbol}</td>
                            <td>{cryptoItem.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Символ</th>
                        <th>Цена</th>
                    </tr>
                </tfoot>
            </table>
            <div className={classes.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={index + 1 === currentPage ? classes.active : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Cryptocurrency;
