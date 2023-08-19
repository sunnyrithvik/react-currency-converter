// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [converted, setConverted] = useState("");

  useEffect(
    function () {
      async function convert() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
        );
        const data = await res.json();
        setConverted(data.rates[toCurr]);
      }

      if (fromCurr === toCurr) return setConverted(amount);
      convert();
    },
    [amount, fromCurr, toCurr]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="AUD">AUD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
      </select>
      <select value={toCurr} onChange={(e) => setToCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="AUD">AUD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
      </select>
      <p>
        {converted} {toCurr}
      </p>
    </div>
  );
}
