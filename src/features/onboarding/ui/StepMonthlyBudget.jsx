import { InputField } from './InputField';
import styles from '../styles/Onboarding.module.css';
export function StepMonthlyBudget({ formData, onUpdate }) {
  return (
    <div>
      <h2 className={styles.stepTitle}>Set Monthly Budget</h2>
      
      <InputField
        label="Total Monthly Budget (₹)"
        type="number"
        value={formData.monthlyBudget}
        onChange={(e) => onUpdate({ monthlyBudget: e.target.value })}
        placeholder="50000"
        helperText="Enter your total monthly income"
      />
    </div>
  );
}