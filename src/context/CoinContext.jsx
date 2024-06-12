import { createContext, useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_REACT_API_KEY;
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCoins(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCoin();
  },[currency]);
  const contextValue = {
    coins, currency, setCurrency
  };
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
