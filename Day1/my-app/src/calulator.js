import { useState } from "react";

function Calculator() {
  const [input1, setInputState] = useState("");
  const [input2, setInputState2] = useState("");
  const [result, setResult] = useState("");

  const addition = () => {
    setResult(Number(input1) + Number(input2));
  };

  const subtraction = () => {
    setResult(Number(input1) - Number(input2));
  };

  const multiplication = () => {
    setResult(Number(input1) * Number(input2));
  };

  const division = () => {
    if (Number(input2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(input1) / Number(input2));
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInputState(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInputState2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={addition}>Add</button>
        <button onClick={subtraction}>Subtract</button>
        <button onClick={multiplication}>Multiply</button>
        <button onClick={division}>Divide</button>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
