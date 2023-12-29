import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.mainCardWrap}>
        <h2 className={styles.mainTitle}>Personal Wallet Management</h2>
        <div className={styles.mainCard}>
          <div className={styles.balanceCard}>
            <h4>Total Balance</h4>
            <h3>$1000</h3>
          </div>
          <div>
            <div className={styles.formGroup}>
              <label htmlFor="count">$1 Note Count:</label>
              <input type="number" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="count">$5 Note Count:</label>
              <input type="number" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="count">$10 Note Count:</label>
              <input type="number" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="count">$20 Note Count:</label>
              <input type="number" className={styles.formInput} />
            </div>

            <div
              className={`${styles.formGroup} ${styles.customDenominationGroup}`}
            >
              <label htmlFor="count">
                Custom Denominations (comma-separated):
              </label>
              <input
                type="text"
                placeholder="e.g., 1, 5, 10, 50"
                className={styles.formInput}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
