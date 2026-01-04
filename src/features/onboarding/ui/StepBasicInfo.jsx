import styles from "../styles/Onboarding.module.css";
import { InputField } from "./InputField";
export function StepBasicInfo({ formData, onUpdate, mode }) {
  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>Personal Information</h2>

      <InputField
        label="Name"
        value={formData.name}
        onChange={(e) => onUpdate({ name: e.target.value })}
        placeholder="Enter your name"
        required
      />

      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => onUpdate({ email: e.target.value })}
        placeholder="Enter your email"
        required
      />
    </div>
  );
}
