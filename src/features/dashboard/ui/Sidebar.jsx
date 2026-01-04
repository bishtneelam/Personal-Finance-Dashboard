import {
  History,
  LogOut,
  PlusCircle,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";
import styles from "../styles/FinanceDashboard.module.css";
export function Sidebar({ activeView, setActiveView }) {
  return (
    <div className={styles.sidebarSection}>
      {/* Title */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Wallet className={styles.icon} />
          BudgetTrack
        </h1>
      </div>

      {/* Nav Links */}
      <nav className={styles.navLinks}>
        <button
          className={`${styles.sidebarButton} ${
            activeView === "dashboard" ? styles.active : ""
          }`}
          onClick={() => setActiveView("dashboard")}
        >
          <TrendingUp className={styles.navIcon} />
          Dashboard
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "addTransaction" ? styles.active : ""
          }`}
          onClick={() => setActiveView("addTransaction")}
        >
          <PlusCircle className={styles.navIcon} />
          Add Transaction
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "transactionHistory" ? styles.active : ""
          }`}
          onClick={() => setActiveView("transactionHistory")}
        >
          <History className={styles.navIcon} />
          Transaction History
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "editProfile" ? styles.active : ""
          }`}
          onClick={() => setActiveView("editProfile")}
        >
          <User className={styles.navIcon} />
          Edit Profile
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "logout" ? styles.active : ""
          }`}
          onClick={() => setActiveView("logout")}
        >
          <LogOut className={styles.navIcon} />
          Logout
        </button>
      </nav>
    </div>
  );
}
