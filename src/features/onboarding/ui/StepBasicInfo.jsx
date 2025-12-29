import styles from '../styles/Onboarding.module.css';
import { InputField } from './InputField';
export function StepBasicInfo({ formData, onUpdate }) {
  return (
    <div>
      <h2 className={styles.stepTitle}>Basic Information</h2>
      
      <InputField
        label="Name"
        value={formData.name}
        onChange={(e) => onUpdate({ name: e.target.value })}
        placeholder="Enter your name"
      />
      
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => onUpdate({ email: e.target.value })}
        placeholder="Enter your email"
      />
    </div>
  );
}