import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const factorial = () => {
    let f = 1;
    for (let i = 1; i <= Number(num); i++) f *= i;
    setResult("Factorial: " + f);
  };

  const fibonacci = () => {
    let a = 0, b = 1, series = [];
    for (let i = 0; i < Number(num); i++) {
      series.push(a);
      [a, b] = [b, a + b];
    }
    setResult("Fibonacci Series: " + series.join(", "));
  };

  const primeCheck = () => {
    let n = Number(num);
    if (n < 2) {
      setResult("Not a Prime Number");
      return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        setResult("Not a Prime Number");
        return;
      }
    }
    setResult("Prime Number");
  };

  return (
    <div className="app">
      <h2>Math Operations</h2>

      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={factorial}>Factorial</button>
      <button onClick={fibonacci}>Fibonacci</button>
      <button onClick={primeCheck}>Prime Check</button>

      <p>{result}</p>
    </div>
  );
}

export default App;
