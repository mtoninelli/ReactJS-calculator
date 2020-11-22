import React from 'react';
import './App.css';

// hypoteically in an external file
const calculateNumbers = (type, a, b) => {
  switch (type) {
    case 'sum':
      return a + b;
    case 'sub':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
};

function App() {
  // possibility to implement useReducer
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [result, setResult] = React.useState(0);

  // callback function
  const calculate = React.useCallback(
    (type) => {
      let _result;
      try {
        _result = calculateNumbers(
          type,
          Number(firstNumber),
          Number(secondNumber)
        );
      } catch (error) {
        alert('Something went wrong.');
      }
      setResult(_result);
    },
    [firstNumber, secondNumber]
  );

  // possibility to split buttons and inputs in UI components...
  return (
    <div className="App">
      <header className="App-header">
        <p className="result">Result: {result}</p>
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <div>
          <button className="button" onClick={() => calculate('sum')}>
            +
          </button>
          <button className="button" onClick={() => calculate('sub')}>
            -
          </button>
          <button className="button" onClick={() => calculate('multiply')}>
            *
          </button>
          <button className="button" onClick={() => calculate('divide')}>
            /
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
