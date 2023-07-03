import React, { useState } from "react";
import styles from "./UserInputForm.module.css";

const UserInputForm = (props) => {
  const intialUserInput = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

  const [inputData, setInputData] = useState(intialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    props.calculateInterest(inputData);
    props.fetchIntialSavings(inputData["current-savings"]);
  };

  function resetHandler() {
    setInputData(intialUserInput);
  }

  const changeHandler = (input, value) => {
    setInputData((prevData) => {
      return {
        ...prevData,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputgroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
            value={inputData["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={inputData["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles.inputgroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
            value={inputData["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            type="number"
            id="duration"
            value={inputData["duration"]}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInputForm;
