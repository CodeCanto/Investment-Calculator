import React from "react";
import styles from "./Table.module.css";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.interestResults.map((x, index) => {
          return (
            <tr key={index}>
              <td>{x.year}</td>
              <td>{currencyFormatter.format(x.savingsEndOfYear)}</td>
              <td>{currencyFormatter.format(x.yearlyInterest)}</td>
              <td>
                {currencyFormatter.format(
                  x.savingsEndOfYear -
                    props.intialSavings -
                    x.yearlyInterest * x.year
                )}
              </td>
              <td>
                {currencyFormatter.format(
                  props.intialSavings + x.yearlyContribution * x.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
