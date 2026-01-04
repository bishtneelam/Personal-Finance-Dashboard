import { useFinanceDashboardController } from "../hooks/useFinanceDashboardController";
import styles from "../styles/FinanceDashboard.module.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export function FinanceDashboard({ children }) {
  const { activeView, setActiveView } = useFinanceDashboardController();
  return (
    <div className={styles.appLayout}>
      <aside className={styles.sidebar}>
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </aside>
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.pageContent}>{children}</main>
      </div>
    </div>
  );
}
