import React, { useState } from "react";

import Header from "./components/Header/Header";
import UserInputForm from "./components/UserInputForm/UserInputForm";
import Table from "./components/Table/Table";
import CalculatorFunction from "./components/CalculatorFunction";

function App() {
  const [interestResults, setInterestResults] = useState();
  const [intialSavings, setIntialSavings] = useState(0);

  const calculateInterest = (input) => {
    setInterestResults(CalculatorFunction(input));
  };

  const fetchIntialSavings = (input) => {
    setIntialSavings(input);
    console.log(intialSavings);
  };

  return (
    <div>
      <Header />
      <UserInputForm
        calculateInterest={calculateInterest}
        fetchIntialSavings={fetchIntialSavings}
      />
      {!interestResults && (
        <p style={{ textAlign: "center" }}>
          Fill out form and click calculate for results.
        </p>
      )}
      {interestResults && (
        <Table
          interestResults={interestResults}
          intialSavings={intialSavings}
        />
      )}
    </div>
  );
}

export default App;
