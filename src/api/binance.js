import { API_BINANCE_URL } from "../utils/constants";

class Binance {
    /**
     * Get cryptocurrencies list (symbol and price)
     * @param {Array} coinList 
     */
    static getCryptoData = async (coinList = null) => {
        try {
            const response = await fetch(
                `${API_BINANCE_URL}/ticker/price${coinList !== null ? "?symbols=" + coinList : ""}`,
                {
                    method: "GET",
                    headers: { "Accept": "application/json" }
                }
            );
            if (!response.ok)
                throw new Error(`HTTP Error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        }
        catch (error) {
            console.error(`Error fetching data: ${error}`);
            return null;
        }
    }
}

export default Binance;