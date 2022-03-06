import { useState, useEffect } from "react";

/**
 * Coin Tracker 
 * 
 *  - https://api.coinpaprika.com/v1/tickers
 * @returns 
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {!loading ? `(${coins.length})` : null}</h1>
      {
        loading 
        ? 
        <strong>Loading...</strong> 
        : 
        <select>
          {coins.map((item, idx) => (
            <option>
              {item.name} ({item.symbol}) : {item.quotes.USD.price} 
            </option>
          ))}
        </select>
      }
      
    </div>
  );
}

export default App;