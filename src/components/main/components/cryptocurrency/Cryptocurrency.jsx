import { useEffect, useState } from "react";
import classes from "./Cryptocurrency.module.css";
import Binance from "../../../../api/binance.js";
import Button from "../../../common/button/Button.jsx";

const Cryptocurrency = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchingCryptoData = async () => {
            const cryptoListAll = await Binance.getCryptoData();
            const cryptoListUSDT = cryptoListAll.filter((cryptoItem) => cryptoItem.symbol.includes("USDT"));
            setCryptoList(cryptoListUSDT);
        }
        fetchingCryptoData();
    }, []);


    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Сбросить текущую страницу на 1 при новом поиске
    };

    const filteredCryptoData = cryptoList.filter((cryptoItem) =>
        cryptoItem.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const perPage = 10;
    const totalPages = Math.ceil(filteredCryptoData.length / perPage);

    const goToFirstPage = () => {
        setCurrentPage(1);
    }

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    }

    const goToNextPage = () => {
        setCurrentPage((prevPage) => {
            return prevPage + 1;
        });
    }

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => {
            return prevPage - 1;
        });
    }

    const maxPaginationButtons = 3;
    const maxPaginationButtonsAroundCurrent = 1; // Math.floor(maxPaginationButtons / 2);

    const paginationButtons = [];
    let aroundLeftPage = Math.max(1, currentPage - maxPaginationButtonsAroundCurrent);
    let aroundRightPage = Math.min(totalPages, aroundLeftPage + maxPaginationButtons - 1);

    if (aroundRightPage - aroundLeftPage < maxPaginationButtons - 1) {
        aroundLeftPage = Math.max(1, aroundRightPage - maxPaginationButtons + 1);
    }

    for (let x = aroundLeftPage; x <= aroundRightPage; x++) {
        paginationButtons.push(
            <Button width={"50px"} key={x} onClick={() => setCurrentPage(x)}>{x == currentPage ? `[${x}]` : x}</Button>
        );
    }

    return (
        <div className={classes.cryptocurrency}>
            <input
                className={classes.cryptocurrencySearch}
                onChange={handleSearchChange}
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
                    {filteredCryptoData
                        .slice((currentPage - 1) * perPage, currentPage * perPage)
                        .map((cryptoItem, index) => (
                            <tr key={(currentPage - 1) * perPage + index + 1}>
                                <td>{(currentPage - 1) * perPage + index + 1}</td>
                                <td>{cryptoItem.symbol}</td>
                                <td>{parseFloat(cryptoItem.price).toFixed(2)}</td>
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
                <Button onClick={() => goToFirstPage()}>First Page</Button>
                <Button width={"50px"} onClick={() => goToPrevPage()}>&lArr;</Button>
                {paginationButtons}
                <Button width={"50px"} onClick={() => goToNextPage()}>&rArr;</Button>
                <Button onClick={() => goToLastPage()}>Last Page</Button>
            </div>
        </div>
    );
}

export default Cryptocurrency;