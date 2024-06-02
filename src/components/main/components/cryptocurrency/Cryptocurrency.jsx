import { useState, useEffect } from "react";
import classes from "./Cryptocurrency.module.css";
import Binance from "../../../../api/binance.js";
import Button from "../../../common/button/Button.jsx";

const Cryptocurrency = () => {
    const [cryptocurrencyList, setCryptocurrencyList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(2);

    useEffect(() => {
        const fetchingCryptoData = async () => {
            const cryptoData = await Binance.getCryptoData();
            const cryptoDataUsdt = cryptoData.filter((cryptoItem) => cryptoItem.symbol.includes("USDT"));
            setCryptocurrencyList(cryptoDataUsdt);
        }
        fetchingCryptoData();
    }, []);

    const cryptocurrencyFilteredList = cryptocurrencyList.filter((cryptocurrencyItem) => {
        return (cryptocurrencyItem.symbol).toLowerCase().includes(searchTerm);
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setCurrentPage(1);
    }

    const perPage = 10;
    const totalPages = Math.ceil(cryptocurrencyFilteredList.length / perPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const paginationButtons = () => {
        const maxVisibleButtons = 3;
        const buttons = [];

        let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (totalPages <= 1) {
            startPage = 1;
            endPage = 1;
        } else if (endPage - startPage < maxVisibleButtons - 1) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        for (let x = startPage; x <= endPage; x++) {
            buttons.push(
                <Button width={"64px"} onClick={() => goToPage(x)} key={x}>
                    {x === currentPage ? `[${x}]` : x}
                </Button>
            );
        }
        return buttons;
    }

    return (
        <div className={classes.cryptocurrency}>
            {cryptocurrencyList.length > 0 ? (
                <>
                    <input
                        className={classes.cryptocurrencySearch}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search symbol..."
                    />
                    <table className={classes.cryptocurrencyTable}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Symbol</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptocurrencyFilteredList
                                .slice((currentPage - 1) * perPage, currentPage * perPage)
                                .map((cryptocurrencyItem, index) => (
                                    <tr key={((currentPage - 1) * perPage) + index + 1}>
                                        <td>{((currentPage - 1) * perPage) + index + 1}</td>
                                        <td>{cryptocurrencyItem.symbol}</td>
                                        <td>{parseFloat(cryptocurrencyItem.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Symbol</th>
                                <th>Price</th>
                            </tr>
                        </tfoot>
                    </table>
                    <div className={classes.cryptocurrencyPagination}>
                        <Button onClick={() => goToPage(Math.min(1, totalPages))}>First Page</Button>
                        {paginationButtons()}
                        <Button onClick={() => goToPage(Math.max(1, totalPages))}>Last Page</Button>
                    </div>
                </>
            ) : (<h1>Loading...</h1>)}

        </div>
    );
}

export default Cryptocurrency;