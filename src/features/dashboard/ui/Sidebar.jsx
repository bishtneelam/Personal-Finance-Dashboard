import {
  History,
  LogOut,
  PlusCircle,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FinanceDashboard.module.css";
export function Sidebar({ activeView, setActiveView }) {
  const navigate = useNavigate();
  return (
    <div>
      {/* Title */}
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Wallet className={styles.icon} />
        </div>
        <h1 className={styles.title}>BudgetTrack</h1>
      </div>
    <div className={styles.divider}></div>
      {/* Nav Links */}
      <nav className={styles.navLinks}>
        <button
          className={`${styles.sidebarButton} ${
            activeView === "dashboard" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveView("dashboard");
            navigate("/");
          }}
        >
          <TrendingUp className={styles.navIcon} />
          Dashboard
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "addTransaction" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveView("addTransaction");
            navigate("/add-transaction");
          }}
        >
          <PlusCircle className={styles.navIcon} />
          Add Transaction
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "transactionHistory" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveView("transactionHistory");
            navigate("/history");
          }}
        >
          <History className={styles.navIcon} />
          Transaction History
        </button>

        <button
          className={`${styles.sidebarButton} ${
            activeView === "editProfile" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveView("editProfile");
            navigate("/edit");
          }}
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
