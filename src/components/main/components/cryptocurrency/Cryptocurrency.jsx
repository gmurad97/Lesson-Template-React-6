import { useEffect, useState, useRef } from "react";
import classes from "./Cryptocurrency.module.css";
import Binance from "../../../../api/binance";

const Cryptocurrency = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
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
        }, 10000);

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

    const renderPageNumbers = () => {
        const pageButtons = [];

        if (totalPages <= 5) {
            // Отображаем все кнопки, если всего 5 страниц или меньше
            for (let i = 1; i <= totalPages; i++) {
                pageButtons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={i === currentPage ? classes.active : ""}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Отображаем первую страницу
            pageButtons.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={1 === currentPage ? classes.active : ""}
                >
                    {1}
                </button>
            );

            // Отображаем многоточие между текущей страницей и первыми двумя
            if (currentPage > 3) {
                pageButtons.push(<span key="start-ellipsis" className={classes.ellipsis}>...</span>);
            }

            // Определяем диапазон отображаемых кнопок
            let startPage = currentPage > 2 ? currentPage - 1 : 2;
            let endPage = currentPage < totalPages - 2 ? currentPage + 1 : totalPages - 1;

            // Отображаем кнопки в этом диапазоне
            for (let i = startPage; i <= endPage; i++) {
                pageButtons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={i === currentPage ? classes.active : ""}
                    >
                        {i}
                    </button>
                );
            }

            // Отображаем многоточие между текущей страницей и последними двумя
            if (currentPage < totalPages - 2) {
                pageButtons.push(<span key="end-ellipsis" className={classes.ellipsis}>...</span>);
            }

            // Отображаем последнюю страницу
            pageButtons.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={totalPages === currentPage ? classes.active : ""}
                >
                    {totalPages}
                </button>
            );
        }

        return pageButtons;
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
                {renderPageNumbers()}
            </div>
        </div>
    );
}

export default Cryptocurrency;
