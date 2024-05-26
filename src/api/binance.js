class Binance {
    constructor() {
        this.API_URL = "https://api.binance.com/api/v3";
        this.API_VER = "v3";
    }

    static getCryptoData = async (coin_list = null) => {
        try {
            const response = await fetch(
                `https://api.binance.com/api/v3/ticker/price${coin_list !== null ? "?symbols=" + coin_list : ""}`,
                {
                    method: "GET",
                    headers: { "Accept": "application/json" }
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const json_data = await response.json();
            return json_data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error}`);
            return null;
        }
    }
}

export default Binance;