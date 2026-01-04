import styles from "../styles/Onboarding.module.css";
export function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  helperText,
  required = false,
  noMargin = false,
}) {
  return (
    <div className={styles.inputGroup} style={{marginBottom : noMargin ? 0 : undefined}} >
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}
