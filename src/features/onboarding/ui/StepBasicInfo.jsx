import { User, Mail } from "lucide-react";
import styles from "../styles/Onboarding.module.css";
import { InputField } from "./InputField";

export function StepBasicInfo({ formData, onUpdate, mode }) {
  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>Personal Information</h2>

      <InputField
        label="Full Name"
        value={formData.name}
        onChange={(e) => onUpdate({ name: e.target.value })}
        placeholder="Enter your full name"
        required
        icon={User}
      />

      <InputField
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => onUpdate({ email: e.target.value })}
        placeholder="Enter your email address"
        helperText="We'll use this for account recovery"
        required
        icon={Mail}
      />
    </div>
  );
}
