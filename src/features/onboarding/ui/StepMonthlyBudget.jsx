import { InputField } from './InputField';
import styles from '../styles/Onboarding.module.css';
export function StepMonthlyBudget({ formData, onUpdate, mode }) {
  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>
        {mode === "edit" ? "Budget Settings" : "Set Monthly Budget"}
      </h2>
      <InputField
        label="Monthly Budget (₹)"
        value={formData.monthlyBudget}
        onChange={(e) => onUpdate({ monthlyBudget: e.target.value.replace(/\D/g,"") })}
        placeholder="50000"
        helperText="Set your total monthly budget to track expenses effectively"
        required
      />
    </div>
  );
}