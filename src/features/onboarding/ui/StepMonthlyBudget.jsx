import { IndianRupee, Lightbulb } from 'lucide-react';
import { InputField } from './InputField';
import styles from '../styles/Onboarding.module.css';

export function StepMonthlyBudget({ formData, onUpdate, mode }) {
  const tipBoxStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)',
    border: '1px solid #fcd34d',
    borderRadius: '12px',
    padding: '1rem',
    marginTop: '1.5rem',
  };

  const tipIconStyle = {
    color: '#d97706',
    flexShrink: 0,
    marginTop: '2px',
  };

  const tipTextStyle = {
    fontSize: '0.85rem',
    color: '#92400e',
    lineHeight: 1.5,
    margin: 0,
  };

  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>
        {mode === "edit" ? "Budget Settings" : "Set Monthly Budget"}
      </h2>
      
      <InputField
        label="Monthly Budget"
        value={formData.monthlyBudget}
        onChange={(e) => onUpdate({ monthlyBudget: e.target.value.replace(/\D/g, "") })}
        placeholder="Enter amount (e.g., 50000)"
        helperText="This is your total spending limit for the month"
        required
        icon={IndianRupee}
      />

      {mode !== "edit" && (
        <div style={tipBoxStyle}>
          <Lightbulb size={20} style={tipIconStyle} />
          <p style={tipTextStyle}>
            <strong>Pro Tip:</strong> Start with your monthly income minus savings goals. 
            You can always adjust this later in settings.
          </p>
        </div>
      )}
    </div>
  );
}
