import styles from "./styles/EditProfile.module.css";
import { ProfileHeader } from "./ui/ProfileHeader";
import { PersonalInfoSection } from "./ui/PersonalInfoSection";
import { BudgetSettings } from "./ui/BudgetSettings";
import { CategoryBudgetAllocation } from "./ui/CategoryBudgetAllocation";
import { BudgetSummary } from "./ui/BudgetSummary";
import { ActionButtons } from "./ui/ActionButtons";

export function EditProfile() {
  return (
    <div className={styles.container}>
      <ProfileHeader />

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Personal Information */}
      <PersonalInfoSection />

      {/* Budget */}
      <BudgetSettings />

      {/* Category Budget Allocation */}
      <CategoryBudgetAllocation />

      {/* Budget Summary */}
      <BudgetSummary />

      {/* Divider */}
      <div className={styles.divider}></div>

      <ActionButtons />

    </div>
  );
}
