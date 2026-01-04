import styles from "../styles/FinanceDashboard.module.css";
export function FinanceDashboard({ children }) {
  return (
    <div className={styles.appLayout}>
      <aside className={styles.sidebar}>
        Sidebar
      </aside>
      <div className={styles.mainContent}>
        <header>header</header>
        <main className={styles.pageContent}>{children}</main>
      </div>
    </div>
  );
}
