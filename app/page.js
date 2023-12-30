"use client";

import FormInput from "@/components/FormInput/FormInput";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const defaultDenominations = [1, 5, 10, 20];
  //components states
  const [denominations, setDenominations] = useState(defaultDenominations);
  const [noteCounts, setNoteCounts] = useState({});
  const [totalBalance, setTotalBalance] = useState(0);

  //component useEffects
  useEffect(() => {
    // Load wallet data from local storage on application startup
    const storedNoteCounts =
      JSON.parse(localStorage.getItem("walletNoteCounts")) || {};
    setNoteCounts((prev) => ({ ...prev, ...storedNoteCounts }));
  }, []);

  useEffect(() => {
    // Update total balance whenever note counts change
    const newTotalBalance = denominations.reduce((acc, denomination) => {
      return acc + (noteCounts[denomination] || 0) * denomination;
    }, 0);
    setTotalBalance(newTotalBalance);

    // Save wallet data to local storage
    localStorage.setItem("walletNoteCounts", JSON.stringify(noteCounts));
  }, [noteCounts, denominations]);

  //Components functions

  const handleNoteCountChange = (denomination, value) => {
    let count = Number(value);

    if (count < 0 || isNaN(count)) {
      // Display meaningful error messages for input validation issues
      alert("Invalid note count. Please enter a valid positive number.");
      return;
    }

    setNoteCounts((prevNoteCounts) => ({
      ...prevNoteCounts,
      [denomination]: count,
    }));
  };

  //handle set denominations
  const handleSetDenominations = (value) => {
    const newDenominations = value
      .split(",")
      .map((denomination) => Number(denomination.trim()))
      .filter((denomination) => !isNaN(denomination) && denomination > 0);
    setDenominations(newDenominations);
  };
  return (
    <main>
      <div className={styles.mainCardWrap}>
        <h2 className={styles.mainTitle}>Personal Wallet Management</h2>
        <div className={styles.mainCard}>
          <div className={styles.balanceCard}>
            <h4>Total Balance</h4>
            <h3>${totalBalance}</h3>
          </div>
          <div>
            {denominations?.map((denomination, index) => (
              <div className={styles.formGroup} key={index}>
                <label htmlFor="count">${denomination} Note Count:</label>
                <FormInput
                  type="number"
                  value={noteCounts[denomination] || ""}
                  handler={(value) =>
                    handleNoteCountChange(denomination, value)
                  }
                />
              </div>
            ))}
            <div
              className={`${styles.formGroup} ${styles.customDenominationGroup}`}
            >
              <label htmlFor="count">
                Custom Denominations (comma-separated):
              </label>
              <FormInput
                type="text"
                handler={handleSetDenominations}
                placeholder="e.g., 1, 5, 10, 50"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
